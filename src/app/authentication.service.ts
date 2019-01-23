import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './users';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor( private http:HttpClient ) { }

  url:string = "http://localhost:3000/users";

  getUser(uid:string, pwd:string): Observable <IUser[]>{
    return this.http.get<IUser[]>(`${this.url}?uid=${uid}&pwd=${pwd}`);
  }

  addUser(item) : Observable<void>{
    return this.http.post<void>(this.url, item);
  }
}
