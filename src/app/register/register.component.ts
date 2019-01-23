import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthenticationService } from '../authentication.service';
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;
  constructor( private router:Router, private as:AuthenticationService ,private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['',[Validators.required, Validators.maxLength(15)]],
      uid: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
      pwd: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15), Validators.pattern("^[A-Za-z0-9_-]{8,15}$")]],
      cpwd: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mob: ['', [Validators.required, Validators.pattern("^[6789]{1}[0-9]{9}$")]]
    });
  }

  submitted = false;
  get f() { return this.registerForm.controls; }

  onSubmit(){
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    else{
      
      let data = this.registerForm.value;
      delete data['cpwd'];
      this.as.addUser( data ).subscribe((d) =>{
        this.router.navigate([""]);
      });
      
    }
  }

}
