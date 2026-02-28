import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SignoutComponent } from './signout/signout.component';

const routes: Routes = [
  {path : 'signout', component : SignoutComponent},
  {path : '', component : SigninComponent}, // localhost:4200/
  {path : 'signup', component : SignupComponent} // localhost:4200/signup
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
