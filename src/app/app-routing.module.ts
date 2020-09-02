import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './User/log-in/log-in.component';
import { AddClientComponent } from './User/add-client/add-client.component';
import { ClientComponent } from './Principal/client/client.component';
import { ForgotPasswordComponent } from './User/forgot-password/forgot-password.component';


const routes: Routes = [
  {path:'login',component:LogInComponent},
  {path:'addClient',component:AddClientComponent},
  {path:'principalClient',component:ClientComponent},
  {path:'forgotPassword',component:ForgotPasswordComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
