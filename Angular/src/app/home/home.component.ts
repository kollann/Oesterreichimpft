import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';

@Component({
  selector: 'app-home',
  template: `
  <div class="ui center aligned container">
  <h2 class="ui center aligned icon header">
  <i class="circular syringe icon"></i>
  Österreich impft
</h2>
<div class="content">Willkommen zu Österreich impft. Sie können sich hier für eine Impfung anmelden.</div>
    <button style="margin-top: 1em;" [routerLink]="'/vaccinedates'" textAlign="center" class="ui basic button"><i class="icon list"></i>Zu der Terminliste</button>
      </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  private authService: AuthenticationService
  
  constructor() { }

  ngOnInit(): void {
  }

}
