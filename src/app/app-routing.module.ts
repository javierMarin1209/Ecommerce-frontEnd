import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './User/log-in/log-in.component';
import { AddClientComponent } from './User/add-client/add-client.component';


const routes: Routes = [
  {path:'login',component:LogInComponent},
  {path:'addClient',component:AddClientComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
