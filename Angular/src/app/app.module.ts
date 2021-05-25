import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VaccinedateListComponent } from './vaccinedate-list/vaccinedate-list.component';
import { VaccinedateListItemComponent } from './vaccinedate-list-item/vaccinedate-list-item.component';
import { VaccinedateDetailsComponent } from './vaccinedate-details/vaccinedate-details.component';

import { OesterreichimpftService } from './shared/oesterreichimpft.service';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { VaccinedateFormComponent } from './vaccinedate-form/vaccinedate-form.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './shared/authentication.service';
import { TokenInterceptorService } from './shared/token-interceptor.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule ],
  declarations: [ AppComponent, VaccinedateListComponent, VaccinedateListItemComponent, VaccinedateDetailsComponent, HomeComponent, VaccinedateFormComponent, LoginComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ {provide: APP_BASE_HREF, useValue:'/'}, OesterreichimpftService, AuthenticationService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }]
})

export class AppModule { }
