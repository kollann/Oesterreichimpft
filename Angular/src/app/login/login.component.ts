import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/authentication.service';

interface Response {
  access_token: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;


  constructor(
    private vc: FormBuilder,
    private router: Router,
    private authService : AuthenticationService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.vc.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    })
  }

  login(){
    const val = this.loginForm.value;
    if(val.email && val.password){
      // login 
      this.authService.login(val.email, val.password).subscribe(res => {
        // console.log(res);
        this.authService.setSessionStorage(
          (res as Response).access_token)
      });
    }
  }

  isLoggedIn(){
    return this.authService.isLoggedIn();
  }

  logout(){
    return this.authService.logout();
  }

}
