import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/Principal/Service/order.service';
import { Order } from 'src/app/Moldelo/Order';
import { OrderStatus } from 'src/app/Moldelo/OrderStatus';
import { Response } from 'src/app/Moldelo/Response';
import {User} from 'src/app/Moldelo/User';
import { UserService } from 'src/app/Principal/Service/user.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-change-password-employe',
  templateUrl: './change-password-employe.component.html',
  styleUrls: ['./change-password-employe.component.css']
})
export class ChangePasswordEmployeComponent implements OnInit {
  name=sessionStorage.getItem("nombre");
  order= new Order();
  response= new Response();
  count;
  user= new User();
  constructor(private router:Router,private service:OrderService,private userService:UserService) { 
    this.order.state=OrderStatus.Pagada;
    this.service.countAllByStatus(this.order)
    .subscribe(data=>{
      this.response=data;
      if(this.response.success){
        if(this.response.response>0){
          this.count=this.response.response;
        }
      }
    });
  }
    ngOnInit() {
      if(sessionStorage.getItem("nombre")==null){
        this.router.navigate(["login"]);
      }
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
        this.userService.ChangePassword(this.user)
      .subscribe(data=>{
        this.response=data;
        if(this.response.success){
          alert(this.response.error);
          this.router.navigate(["homeEmploye"]);
        }else{
          alert(this.response.error);
        }
      });
      }else{
        alert("porfavor verifique los datos ingresados");
      }
    }
    irOrdenes(){
      this.router.navigate(["allOrdersEmploye"]);
    }
    irHome(){
      this.router.navigate(["homeEmploye"]);
    }
    salir(){
      this.router.navigate(["login"]);
    }
    irCambio(){
      this.router.navigate(["ChangePasswordEmploye"]);
    }
}
