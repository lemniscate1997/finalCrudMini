import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { IStudent } from '../student';
import { Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { SessionStorageService } from 'ng2-webstorage';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.css']
})
export class FormViewComponent implements OnInit {

  edit:boolean;
  editForm:FormGroup;
  id:number;
  student:IStudent;
  constructor(private route: ActivatedRoute, private router:Router, private ds:DataService,private formBuilder: FormBuilder, private session : SessionStorageService) { 
    if(this.session.retrieve("user")==null){
      window.alert("login first!!!!")
      this.router.navigate(["login"]);
    }
    this.router.events
      .subscribe(() => {
          var root = this.router.routerState.snapshot.root;
          while (root) {
              if (root.children && root.children.length) {
                  root = root.children[0];
              } else if (root.data && root.data["edit"]) {
                  //console.log(root.data["edit"]);
                  this.edit = root.data["edit"];
                  return;
              } else {
                  return;
              }
          }
      });
  }

  ngOnInit() {
    
    //this.edit = (localStorage.getItem('edit') == 'true');
    this.editForm = this.formBuilder.group({
      id:[''],
      name: ['',[Validators.required, Validators.maxLength(15)]],
      uid: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mob: ['', [Validators.required, Validators.pattern("^[6789]{1}[0-9]{9}$")]]
    });
    if(this.edit){

      this.route.paramMap.subscribe(params => {
        this.id=Number(params.get('id'));    
      });
      this.editForm.get('uid').disable();
      this.editForm.get('email').disable();
      
      this.ds.getStudentByID(this.id).subscribe(data => {
        this.editForm.setValue(data);
      });
    }
    else{
      
    }
  }

  submitted = false;
  get f() { return this.editForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.editForm.invalid) {
      return;
    }
    else{
      if(this.edit){

        this.editForm.enable();
        //console.log(this.editForm.value);
        
        this.ds.updateStudent (this.editForm.value)     
          .subscribe(
            data => {
              this.router.navigate(['listdata']);
            },
            error => {
              alert(error);
            });
        
      }
      else{
        this.ds.createStudent(this.editForm.value).subscribe( data => {this.router.navigateByUrl('listdata');});
        //console.log(this.editForm.value);
      }
    }
  }

}
