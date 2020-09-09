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
import { OrderDetailsClientComponent } from './PrincipalCliente/order-details-client/order-details-client.component';
import { HomeComponent } from './PrincipalEmploye/home/home.component';
import { CreateProductComponent } from './PrincipalEmploye/create-product/create-product.component';
import { ListProductComponent } from './PrincipalEmploye/list-product/list-product.component';
import { ModifyProductComponent } from './PrincipalEmploye/modify-product/modify-product.component';
import { AllOrdersEmployeComponent } from './PrincipalEmploye/all-orders-employe/all-orders-employe.component';
import { DetailsOrderEmployeComponent } from './PrincipalEmploye/details-order-employe/details-order-employe.component';
import { ChangePasswordEmployeComponent } from './PrincipalEmploye/change-password-employe/change-password-employe.component';
import { HomeAdminComponent } from './PrincipalAdmin/home-admin/home-admin.component';
import { ChangePasswordAdminComponent } from './PrincipalAdmin/change-password-admin/change-password-admin.component';
import { CreateUserComponent } from './PrincipalAdmin/create-user/create-user.component';
const routes: Routes = [
  {path:'login',component:LogInComponent},
  {path:'addClient',component:AddClientComponent},
  {path:'principalClient',component:ClientComponent},
  {path:'forgotPassword',component:ForgotPasswordComponent},
  {path:'detailsProduct',component:DetailsComponent},
  {path:'cartShopping',component:CartshoppingComponent},
  {path:'allOrdersClient',component:AllOrdersComponent},
  {path:'ChangePasswordClient',component:ChangePasswordComponent},
  {path:'orderDetailsClient',component:OrderDetailsClientComponent},
  {path:'homeEmploye',component:HomeComponent},
  {path:'createProduct',component:CreateProductComponent},
  {path:'listProducts',component:ListProductComponent},
  {path:'modifyProduct',component:ModifyProductComponent},
  {path:'allOrdersEmploye',component:AllOrdersEmployeComponent},
  {path:'detailsOrder',component:DetailsOrderEmployeComponent},
  {path:'ChangePasswordEmploye',component:ChangePasswordEmployeComponent},
  {path:'HomeAdmin',component:HomeAdminComponent},
  {path:'ChangePasswordAdmin',component:ChangePasswordAdminComponent},
  {path:'CreateUser',component:CreateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
