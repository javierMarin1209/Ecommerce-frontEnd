import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './User/log-in/log-in.component';
import { AddClientComponent } from './User/add-client/add-client.component';
import { ClientComponent } from './PrincipalCliente/client/client.component';
import { ForgotPasswordComponent } from './User/forgot-password/forgot-password.component';
import { DetailsComponent } from './PrincipalCliente/details/details.component';
import { CartshoppingComponent } from './PrincipalCliente/cartshopping/cartshopping.component';
import { AllOrdersComponent } from './PrincipalCliente/all-orders/all-orders.component';
import { ChangePasswordComponent } from './PrincipalCliente/change-password/change-password.component';
const routes: Routes = [
  {path:'login',component:LogInComponent},
  {path:'addClient',component:AddClientComponent},
  {path:'principalClient',component:ClientComponent},
  {path:'forgotPassword',component:ForgotPasswordComponent},
  {path:'detailsProduct',component:DetailsComponent},
  {path:'cartShopping',component:CartshoppingComponent},
  {path:'allOrdersClient',component:AllOrdersComponent},
  {path:'ChangePasswordClient',component:ChangePasswordComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
