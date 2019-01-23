import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStudent } from './student';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor( private http:HttpClient ) { }

  url:string = "http://localhost:3000/student";

  getStudents(): Observable <IStudent[]>{
    return this.http.get<IStudent[]>(this.url);
  }

  getStudentByID(id:number): Observable <IStudent>{
    return this.http.get<IStudent>(`${this.url}/${id}`);
  }

  deleteStudent(id:number) : Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  createStudent(item) : Observable<void>{
    return this.http.post<void>(this.url, item);
  }

  updateStudent(student:IStudent) {
    return this.http.put(`${this.url}/${student.id}`, student);
  }
}
