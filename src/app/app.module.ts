import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/header/header.component';
import { UsersComponent } from './components/users/users.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { AgePipe } from './pipes/age.pipe';
import { HttpClientModule } from '@angular/common/http';
import { SingleUserComponent } from './components/single-user/single-user.component';
import { AddressComponent } from './components/address/address.component';
import { CompanyComponent } from './components/company/company.component';
import { AboutComponent } from './components/about/about.component';
import { LocationComponent } from './components/location/location.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { LoginComponent } from './components/login/login.component';
import { AddUserComponent } from './components/add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    HeaderComponent,
    UsersComponent,
    ParentComponent,
    ChildComponent,
    PipesComponent,
    AgePipe,
    SingleUserComponent,
    AddressComponent,
    CompanyComponent,
    AboutComponent,
    LocationComponent,
    FeedbackComponent,
    LoginComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AddUserComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
