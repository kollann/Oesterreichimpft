// Routen Konfigurationsfile

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VaccinedateDetailsComponent } from './vaccinedate-details/vaccinedate-details.component';
import { VaccinedateListComponent } from './vaccinedate-list/vaccinedate-list.component';
import { HomeComponent } from './home/home.component';
import { VaccinedateFormComponent } from './vaccinedate-form/vaccinedate-form.component';
import { LoginComponent } from './login/login.component';


// Welche Adresse mappt auf welche Component?
const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'vaccinedates', component: VaccinedateListComponent },
    { path: 'vaccinedates/:dateid/:locid', component: VaccinedateDetailsComponent }, 
    { path: 'admin', component: VaccinedateFormComponent },
    { path: 'admin/:dateid/:locid', component: VaccinedateFormComponent },
    { path: 'login', component: LoginComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})

export class AppRoutingModule {

}