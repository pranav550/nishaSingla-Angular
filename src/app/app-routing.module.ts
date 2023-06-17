import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { UsersComponent } from './components/users/users.component';
import { ParentComponent } from './components/parent/parent.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { SingleUserComponent } from './components/single-user/single-user.component';
import { AddressComponent } from './components/address/address.component';
import { CompanyComponent } from './components/company/company.component';
import { AboutComponent } from './components/about/about.component';
import { LocationComponent } from './components/location/location.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { AuthGuard } from './guards/Auth.guard';
import { LoginComponent } from './components/login/login.component';
import { AdminGuard } from './guards/Admin.guard';
import { AddUserComponent } from './components/add-user/add-user.component';
import { unSavedChangesGuard } from './guards/un-saved-changes.guard';

const routes: Routes = [
  { path: '', redirectTo: 'dataBinding', pathMatch: 'full' },
  { path: 'dataBinding', component: DataBindingComponent },
  {
    path: 'about', component: AboutComponent, children: [
      { path: 'location', outlet: 'map', component: LocationComponent },
      { path: 'feedback', outlet: 'feeds', component: FeedbackComponent },
    ]
  },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  {
    path: 'singleUser/:id', component: SingleUserComponent, canActivate: [AuthGuard], canActivateChild: [AdminGuard],
    children: [
      // { path: '', redirectTo: 'address', pathMatch: 'full' },
      { path: 'address', component: AddressComponent },
      { path: 'company', component: CompanyComponent }
    ]
  },
  { path: 'parent', component: ParentComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'addUser', component: AddUserComponent, canDeactivate: [unSavedChangesGuard] },

  { path: '**', redirectTo: 'dataBinding' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
