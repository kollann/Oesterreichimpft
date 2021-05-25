import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Vaccinedate } from "../shared//vaccinedate";
import { Vaccinelocation } from "../shared//vaccinelocation";
import { User } from "../shared/user";
import { OesterreichimpftService } from '../shared/oesterreichimpft.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../shared/authentication.service'
import { UserPivot } from '../shared/UserPivot';

@Component({
  selector: 'vc-vaccinedate-details',
  templateUrl: './vaccinedate-details.component.html',
  styleUrls: []
})
export class VaccinedateDetailsComponent implements OnInit {

  vaccinedate: Vaccinedate
  vaccinelocation: Vaccinelocation
  vaccineusers: User[]
  userPivot: UserPivot
  userHasVaccination: boolean

  constructor(
    private vc: OesterreichimpftService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService

  ) { }

  ngOnInit(): void {
    // Access to parameters in the URL
    const params = this.route.snapshot.params;
    this.vc.getSingleDate(params['dateid']).subscribe(res => {
      this.vaccinedate = res;

      let userTimezoneOffset = this.vaccinedate.starttime.getTimezoneOffset() * 60000;
      this.vaccinedate.starttime = new Date(this.vaccinedate.starttime.getTime() + userTimezoneOffset);
      this.vaccinedate.endtime = new Date(this.vaccinedate.endtime.getTime() + userTimezoneOffset);
    });
    this.vc.getSingleLocation(params['locid']).subscribe(res => this.vaccinelocation = res);
    this.vc.getUsersByLocationAndDate(params['dateid'], params['locid']).subscribe(res => {
      this.vaccineusers = res;
      this.userHasVaccination = this.checkUser();
      console.log(this.vaccineusers);
    });
    

  }

  // check if registration is full (maximum number of attendees for vaccination is reached)
  checkAttendees() {
    if (this.vaccineusers && this.vaccineusers.length == this.vaccinedate.maximum_attendees) {
      return true;
    } else {
      return false;
    }
  }

  // check if current logged in user is already registered to a vaccination --> if true show message
  checkUser() {
    if (this.vaccineusers) {
      for (var vaccineuser of this.vaccineusers) {
        if (vaccineuser.id == this.authService.getCurrentUserId()) {
          return true;
        }
      }
    }
  }

  // check if checkbox is checked so user vaccination is administered or not
  checkValue(vaccineuser: User){
    if (vaccineuser.pivot.vaccination_administered === 0) 
      vaccineuser.pivot.vaccination_administered = 1;
    else 
      vaccineuser.pivot.vaccination_administered = 0;
    
    this.vc.vaccinationAdministered(vaccineuser).subscribe();
  }

  // remove vaccinedate 
  removeVaccinedate() {
    if (confirm('Wollen Sie diesen Termin wirklich löschen?')) {
      this.vc.removeDate(this.vaccinedate.id)
        .subscribe(res => this.router.navigate(['../../'], { relativeTo: this.route }));
    }
  }

  // register user to vaccination if logged in, otherwise return message
  registerVaccination() {
    if (this.authService.isLoggedOut()) {
      alert('Sie müssen sich anmelden um einen Termin zu buchen!');
    } else {
      const userId = this.authService.getCurrentUserId();
      const userPivot = new UserPivot(this.vaccinedate.vaccinations[0].id, userId, null);
      this.vc.registerToVaccination(userPivot).subscribe(res => this.userPivot = res);
      this.userHasVaccination = true;
      alert('Sie wurden zu diesem Termin angemeldet!');
    }
  }
}
