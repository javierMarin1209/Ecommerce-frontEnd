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
    OrderDetailsClientComponent
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
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
