import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2Webstorage } from 'ng2-webstorage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { ListDataComponent } from './list-data/list-data.component';
import { ViewDataComponent } from './view-data/view-data.component';
import { FormViewComponent } from './form-view/form-view.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    ListDataComponent,
    ViewDataComponent,
    FormViewComponent,
    RegisterComponent,
    NotfoundComponent,
    HomeComponent,
    LogoutComponent,
    ConfirmEqualValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    Ng2Webstorage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
