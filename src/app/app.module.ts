import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input'; 
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import { LogInComponent } from './User/log-in/log-in.component'; 
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';
import { AddClientComponent } from './User/add-client/add-client.component';
import { ClientComponent } from './PrincipalCliente/client/client.component';
import { ForgotPasswordComponent } from './User/forgot-password/forgot-password.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu'; 
import {MatBadgeModule} from '@angular/material/badge'; 
import {MatTableModule} from '@angular/material/table'; 
import {MatPaginatorModule} from '@angular/material/paginator';
import { DetailsComponent } from './PrincipalCliente/details/details.component';
import { CartshoppingComponent } from './PrincipalCliente/cartshopping/cartshopping.component';
import { AllOrdersComponent } from './PrincipalCliente/all-orders/all-orders.component';
import { ChangePasswordComponent } from './PrincipalCliente/change-password/change-password.component';
import { OrderDetailsClientComponent } from './PrincipalCliente/order-details-client/order-details-client.component';
import { HomeComponent } from './PrincipalEmploye/home/home.component';
import { CreateProductComponent } from './PrincipalEmploye/create-product/create-product.component';
import { ModifyProductComponent } from './PrincipalEmploye/modify-product/modify-product.component';
import { AllOrdersEmployeComponent } from './PrincipalEmploye/all-orders-employe/all-orders-employe.component';
import { ListProductComponent } from './PrincipalEmploye/list-product/list-product.component';
import { DetailsOrderEmployeComponent } from './PrincipalEmploye/details-order-employe/details-order-employe.component'; 
import {MatRadioModule} from '@angular/material/radio';
import { ChangePasswordEmployeComponent } from './PrincipalEmploye/change-password-employe/change-password-employe.component';
import { HomeAdminComponent } from './PrincipalAdmin/home-admin/home-admin.component';
import { ChangePasswordAdminComponent } from './PrincipalAdmin/change-password-admin/change-password-admin.component';
import { CreateUserComponent } from './PrincipalAdmin/create-user/create-user.component';
@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    AddClientComponent,
    ClientComponent,
    ForgotPasswordComponent,
    DetailsComponent,
    CartshoppingComponent,
    AllOrdersComponent,
    ChangePasswordComponent,
    OrderDetailsClientComponent,
    HomeComponent,
    CreateProductComponent,
    ModifyProductComponent,
    AllOrdersEmployeComponent,
    ListProductComponent,
    DetailsOrderEmployeComponent,
    ChangePasswordEmployeComponent,
    HomeAdminComponent,
    ChangePasswordAdminComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
    MatTableModule,
    MatPaginatorModule,
    MatRadioModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
