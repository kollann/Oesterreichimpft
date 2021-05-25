import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";

interface Token {
  exp: number;
  user: {
    id: string,
    is_admin: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private api = 'https://oesterreichimpft.s1810456016.student.kwmhgb.at/api/auth';

  constructor(private http: HttpClient) { }

   // asynchronous
  login(email: string, password: string){
    return this.http.post(`${this.api}/login`, {
      email: email,
      password: password
    });
  }

  public setSessionStorage(token: string){
    console.log("storing token");

    const decodedToken = jwt_decode(token) as Token;
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("userId", decodedToken.user.id);
    sessionStorage.setItem("isAdmin", decodedToken.user.is_admin);
  }

  public getCurrentUserId(): number {
    return Number.parseInt(sessionStorage.getItem("userId"));
  }

  public getInfoIfAdmin(){
    return Number.parseInt(sessionStorage.getItem("isAdmin"));
  }

  logout(){
    this.http.post(`${this.api}/logout`, {});
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("isAdmin");
    console.log("logged out");  
  }

  public isLoggedIn(){
    if(sessionStorage.getItem("token")){
      let token: string = sessionStorage.getItem("token");
      const decodedToken = jwt_decode(token) as Token;
      let expirationDate: Date = new Date(0);
      expirationDate.setUTCSeconds(decodedToken.exp); 
      if(expirationDate < new Date()){
        console.log("token expired");
        sessionStorage.removeItem("token");
        return false; 
      }
      return true; 
    } else {
      return false;
    }
  }

  public isLoggedOut(){
    return !this.isLoggedIn();
  }

}
