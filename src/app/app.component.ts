import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showBeforeLogin:any = true;
  showAfterLogin:any = false;
  constructor( public router: Router) {
    this.changeOfRoutes();

    }
    changeOfRoutes(){
    if(this.router.url === '/' || this.router.url === '/login' || this.router.url === '/register'){
      this.showAfterLogin = true;
      console.log("after login home page");
    }
    else{
      this.showAfterLogin = false;
      console.log("after login not home page");
    }
  }
}
