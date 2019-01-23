import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'ng2-webstorage';
import { Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor( private session : SessionStorageService, private router:Router ) {
    if(this.session.retrieve('user')=="null"){
      window.alert("login first!!!!")
      this.router.navigate(["login"]);
    }
    else{
      this.session.clear();
      this.router.navigate([""]);
    }
  }

  ngOnInit() {
  }

}
