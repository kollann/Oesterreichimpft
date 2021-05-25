import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from "@angular/forms";
import { VaccinedateFactory } from '../shared/vaccinedate-factory';
import { OesterreichimpftService } from "../shared/oesterreichimpft.service";
import { VaccinedateFormErrorMessages } from './vaccinedate-form-error-messages';
import { Vaccinedate } from "../shared//vaccinedate";
import { Vaccinelocation } from "../shared//vaccinelocation";
import { Vaccinations } from "../shared//vaccinations";

@Component({
  selector: 'app-vaccinedate-form',
  templateUrl: './vaccinedate-form.component.html',
  styleUrls: ['./vaccinedate-form.component.css']
})
export class VaccinedateFormComponent implements OnInit {

  vaccinedateForm: FormGroup;
  vaccinedate = VaccinedateFactory.empty();
  vaccinelocations = [];
  selectedVaccinelocation: Vaccinelocation;
  isUpdatingVaccinedate = false;
  errors: { [key: string]: string } = {};
  selectedLocation;

  constructor(
    private fb: FormBuilder,
    private vc: OesterreichimpftService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const dateid = this.route.snapshot.params["dateid"];
    const locid = this.route.snapshot.params["locid"];

    if (dateid && locid) {
      this.isUpdatingVaccinedate = true;

      this.vc.getSingleDate(dateid).subscribe(vaccinedate => {
        this.vaccinedate = vaccinedate;
        if (this.vaccinelocations.length != 0)
          this.initVaccinedate();
      });
      
      this.isUpdatingVaccinedate = true;
      this.vc.getAllLocations().subscribe(locations => {
        this.vaccinelocations = locations;
        for(const loc of this.vaccinelocations){
          if (loc.id == locid) {
            this.selectedVaccinelocation = loc;
          }
        }


        if (this.vaccinedate != null)
          this.initVaccinedate();
      });
    } else {
      this.vc.getAllLocations().subscribe(locations => {
        this.vaccinelocations = locations;
      });
    }
    this.initVaccinedate();
  }

  initVaccinedate() {
    this.vaccinedateForm = this.fb.group({
      id: this.vaccinedate.id,
      day: [this.vaccinedate.day.toISOString().substring(0, 10), Validators.required],
      starttime: [this.vaccinedate.starttime.toISOString().substring(11,16), Validators.required],
      endtime: [this.vaccinedate.endtime.toISOString().substring(11,16), Validators.required],
      maximum_attendees: [this.vaccinedate.maximum_attendees, [Validators.required, Validators.min(1), Validators.max(200)]],
      vaccinelocation: this.selectedVaccinelocation 
    });

    this.vaccinedateForm.statusChanges.subscribe(() =>
      this.updateErrorMessages());
  }

  submitForm() {
    // Formularfelder auf Objekt mappen durch fromObject in VaccinedateFactory
    const vaccinedate: Vaccinedate = VaccinedateFactory.fromObject(this.vaccinedateForm.value);

    if (this.isUpdatingVaccinedate) {
      this.vc.updateDate(vaccinedate).subscribe(res => {
        const vac = new Vaccinations(this.vaccinedate.vaccinations[0].id, this.vaccinedateForm.value.vaccinelocation.id, vaccinedate.id);

        this.vc.updateVaccination(vac).subscribe(res => {
          this.router.navigate(["../../vaccinedates", vaccinedate.id, this.vaccinedateForm.value.vaccinelocation.id]), {
            relativeto: this.route
          }
        })
      });
    } else {
      // console.log(vaccinedate);
      this.vc.createDate(vaccinedate).subscribe(res => {
        const vac = new Vaccinations(null, this.vaccinedateForm.value.vaccinelocation.id, res.id);
        this.vc.createVaccination(vac).subscribe(res => {
          this.vaccinedate = VaccinedateFactory.empty();
          this.vaccinedateForm.reset(VaccinedateFactory.empty());
          this.router.navigate(["../vaccinedates"]), {
            relativeto: this.route
          }
        });
      },
        err => {
          console.log("Fehler ist passiert", err)
        })
    }
  }

  updateErrorMessages() {
    // console.log('form invalid?' + this.vaccinedateForm.invalid);

    this.errors = {};

    for (const message of VaccinedateFormErrorMessages) {
      const control = this.vaccinedateForm.get(message.forControl);
      if (
        control &&
        control.dirty &&
        control.invalid &&
        control.errors[message.forValidator] &&
        !this.errors[message.forControl]
      ) {
        this.errors[message.forControl] = message.text;
      }
    }
  }
}
