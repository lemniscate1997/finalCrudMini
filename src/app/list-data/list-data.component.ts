import { Component, OnInit } from '@angular/core';
import { IStudent } from '../student';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { SessionStorageService } from 'ng2-webstorage';

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.css']
})
export class ListDataComponent implements OnInit {

  students:IStudent[];

  constructor( private data:DataService, private router:Router, private session:SessionStorageService ) {
    if(this.session.retrieve("user")==null){
      window.alert("login first!!!!")
      this.router.navigate(["login"]);
    }
  }

  ngOnInit() {
    this.data.getStudents().subscribe((studs) => { this.students = studs });
  }

  deleteStudent(stud:IStudent):void{
    if(window.confirm(`Are you want to delete student with id ${stud.id} ??`)){
      this.data.deleteStudent(stud.id).subscribe((listStudent)=>{this.students=this.students.filter((x)=>x!==stud);});
      console.log(stud);
    }
  }

  newStud(){
    //localStorage.removeItem('edit');
    //localStorage.setItem('edit','false');
    this.router.navigate(['listdata/form']);
  }

  filter1:any;
  key: string = 'id';
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
  p: number = 1;
  page: number = 3;
  
}
