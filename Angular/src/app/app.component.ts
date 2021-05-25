import { Component, VERSION } from '@angular/core';
import { AuthenticationService } from './shared/authentication.service';
import { Vaccinedate } from './shared/vaccinedate';

@Component({
  selector: 'vc-root',
  templateUrl: './app.component.html'
})

export class AppComponent  {
  constructor(private authService : AuthenticationService){}
    isLoggedIn(){
      return this.authService.isLoggedIn();
    }

    getInfoIfAdmin(){
      return this.authService.getInfoIfAdmin();
    }

    getLoginLabel(){
      return this.isLoggedIn() ? "Logout" : "Login";
    }
  }
