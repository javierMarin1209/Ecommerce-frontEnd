import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/User/Service/user-service.service';
import {FormControl, Validators} from '@angular/forms';
import {User} from 'src/app/Moldelo/User';
import { Response } from 'src/app/Moldelo/Response';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  name=sessionStorage.getItem("nombre");
  count=sessionStorage.getItem("Nproductos");
  user= new User();
  response = new Response();
  constructor( private router:Router,private service:UserServiceService) { }

  ngOnInit() {
  }

  password = new FormControl('', [
    Validators.required,
    Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}')
  ]);
  newPassword = new FormControl('', [
    Validators.required,
  ]);
  verifyPassword(){
    if(this.password.value==this.newPassword.value){
      return false;
    }else{
      return true;
    }
  }
  cambiar(){
    if(this.password.valid&&this.name&&this.newPassword&&this.verifyPassword){
      this.user.email=sessionStorage.getItem("email");
      this.user.password=this.password.value;
      this.service.ChangePassword(this.user)
    .subscribe(data=>{
      this.response=data;
      if(this.response.success){
        alert(this.response.error);
        this.router.navigate(["principalClient"]);
      }else{
        alert(this.response.error);
      }
    })
    }else{
      alert("porfavor verifique los datos ingresados");
    }
  }
  salir(){
    this.router.navigate(["login"]);
  }
  seleccionarProduct(product ){
    sessionStorage.setItem("selecionado",JSON.stringify(product));
    this.router.navigate(["detailsProduct"]);
  }
  irCarrito(){
    this.router.navigate(["cartShopping"]);
  }
  irHome(){
    this.router.navigate(["principalClient"]);
  }
  irOrdenes(){
    this.router.navigate(["allOrdersClient"]);
  }
  irPassword(){
    this.router.navigate(["ChangePasswordClient"]);
  }
}
