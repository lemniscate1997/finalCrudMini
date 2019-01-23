import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { SessionStorageService } from 'ng2-webstorage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  constructor( private fb : FormBuilder, private as : AuthenticationService, private router : Router, private session : SessionStorageService ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      uid : ['', Validators.required],
      pwd : ['', Validators.required]
    });
  }

  submitted = false;
  get f() { return this.loginForm.controls; }

  onSubmit(){
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    else{
      this.as.getUser(this.loginForm.get('uid').value, this.loginForm.get('pwd').value ).subscribe((d) =>{
        if(d.length==0){
          window.alert("wrong uid or pwd");
        }
        else{
          this.session.store("user",this.loginForm.get('uid').value);
          this.router.navigate(["listdata"]);
        }
      });
    }
  }

}
