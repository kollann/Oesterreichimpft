import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OesterreichimpftService } from '../shared/oesterreichimpft.service';
import { Vaccinedate } from "../shared/vaccinedate";

@Component({
  selector: 'vc-vaccinedate-list',
  templateUrl: './vaccinedate-list.component.html',
  styleUrls: []
})
export class VaccinedateListComponent implements OnInit {

  vaccinedates: Vaccinedate[];

  constructor(private vc: OesterreichimpftService) { }

  ngOnInit(): void {
    this.vc.getAllDates().subscribe(res => this.vaccinedates = res);
  }

}
