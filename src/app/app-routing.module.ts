import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { ListDataComponent } from './list-data/list-data.component';
import { FormViewComponent } from './form-view/form-view.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  //{ path: '', redirectTo:"/login", pathMatch:'full' },
  { path:'', component:HomeComponent },
  { path:"login", component:LoginComponent },
  { path:'register', component:RegisterComponent },
  { path:'logout', component:LogoutComponent },
  { path:"listdata", component:ListDataComponent },
  { path:"listdata/edit/:id", component:FormViewComponent, data:{edit:true} },
  { path:"listdata/form", component:FormViewComponent, data:{edit:false} },
  { path:"**", component:NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
