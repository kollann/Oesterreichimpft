import { Injectable } from '@angular/core';
import { Vaccinedate } from "./vaccinedate";
import { Vaccinelocation } from "./vaccinelocation";
import { Vaccinations } from "./vaccinations";
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { User } from './user';
import { UserPivot } from './UserPivot';

@Injectable()
export class OesterreichimpftService {

  private api = 'https://oesterreichimpft.s1810456016.student.kwmhgb.at/api';

  constructor(private http: HttpClient) { }

  getAllDates(): Observable<Array<Vaccinedate>> {
    // returns an Observable on which you can register to get data
    return this.http.get(`
    ${this.api}/vaccinedates`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  getAllLocations(): Observable<Array<Vaccinelocation>> {
    return this.http.get(`
   ${this.api}/vaccinelocations`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  getSingleDate(id: number): Observable<Vaccinedate> {
    return this.http.get(`${this.api}/vaccinedate/${id}`)
      .pipe(retry(3))
      .pipe(map<any, Vaccinedate>(res => {
        let startTime = new Date(res.starttime);
        let endTime = new Date(res.endtime); 

        let userTimezoneOffset = startTime.getTimezoneOffset() * 60000;
        startTime = new Date(startTime.getTime() - userTimezoneOffset);
        endTime = new Date(endTime.getTime() - userTimezoneOffset);

        return new Vaccinedate(res.id, new Date(res.day), startTime, endTime, res.maximum_attendees, res.vaccinations);
      }))
      .pipe(catchError(this.errorHandler));
  }

  getSingleLocation(id: number): Observable<Vaccinelocation> {
    return this.http.get(`
    ${this.api}/vaccinelocation/${id}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  removeDate(id: number): Observable<any> {
    return this.http.delete(`${this.api}/vaccinedate/${id}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  createDate(vaccinedate: Vaccinedate): Observable<any> {
    return this.http.post(`${this.api}/vaccinedate`, vaccinedate)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  createVaccination(vaccination: Vaccinations): Observable<any> {
    return this.http.post(`${this.api}/vaccination`, vaccination)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  updateDate(vaccinedate: Vaccinedate): Observable<any> {
    return this.http.put(`${this.api}/vaccinedate/${vaccinedate.id}`, vaccinedate);
  }

  updateVaccination(vaccination: Vaccinations): Observable<any> {
    return this.http.put(`${this.api}/vaccination/${vaccination.id}`, vaccination)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  registerToVaccination(userPivot: UserPivot): Observable<any> {
    return this.http.post(`${this.api}/vaccinationUser`, userPivot)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  getUsersByLocationAndDate(dateid: number, locid: number): Observable<User[]> {
    return this.http.get(`${this.api}/vaccineuser/${dateid}/${locid}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));  
  }

  vaccinationAdministered(vaccineuser: User): Observable<any> {
    return this.http.put(`${this.api}/vaccineuser/${vaccineuser.id}`, vaccineuser)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));  
  }

  private errorHandler(error: Error | any): Observable<any> {
    return throwError(error);
  }




}
