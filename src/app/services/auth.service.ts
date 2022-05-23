import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  apiURL = environment.apiURL;

  constructor(private http:HttpClient) { }

  register(user:Object, url:string):Observable<any>{
    return this.http.post<any>(this.apiURL+url,user
    );
  }

  login(user:User):Observable<any>{
    return this.http.post(`${this.apiURL}login`,user);
  }

  categoria(user:Object, url:string):Observable<any>{
    return this.http.post<any>(this.apiURL+url,user);
  }

  masVenidos( url:string):Observable<any>{
    return this.http.get<any>(this.apiURL+url);
  }


}
