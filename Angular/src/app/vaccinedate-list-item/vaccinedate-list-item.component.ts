import { Component, OnInit, Input } from '@angular/core';
import { Vaccinedate } from "../shared/vaccinedate";

@Component({
  selector: 'a.vc-vaccinedate-list-item',
  templateUrl: './vaccinedate-list-item.component.html',
  styleUrls: []
})
export class VaccinedateListItemComponent implements OnInit {

  @Input() vaccinedate: Vaccinedate

  constructor() { }

  ngOnInit(): void {
  }

}
