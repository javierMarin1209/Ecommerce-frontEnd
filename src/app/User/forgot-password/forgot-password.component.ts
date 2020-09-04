import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { UserService } from 'src/app/Principal/Service/user.service';
import { Router } from '@angular/router';
import {User} from 'src/app/Moldelo/User';
import { Response } from 'src/app/Moldelo/Response';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  user= new User();
  response = new Response();
  disable =false;
  constructor(private service:UserService, private router:Router) { }

  ngOnInit() {
  }
  email = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  code= new FormControl('', [
    Validators.required
  ]);
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
  Recuperar(){
    this.disable=true;
    if(this.email.valid){
      this.user.email=this.email.value;
      this.service.ForgotPassword(this.user)
      .subscribe(data=>{
        this.disable=false;
        this.response=data;
        if(this.response.success){
          alert(this.response.error);
        }else{
          alert(this.response.error);
        }
      })
    }else{
      alert("porfavor verifique el correo ingresado");
    }
  }
  Cambiar(){
    if(this.password.valid&&this.newPassword.valid&&this.code.valid&&this.email.valid){
      this.user.email=this.email.value;
      this.user.password=this.password.value;
      this.user.tmpPassword=this.code.value;
      this.service.ConfirmPassword(this.user)
      .subscribe(data=>{
        this.response=data;
        if(this.response.success){
          alert(this.response.error);
          this.router.navigate(["login"]);
        }else{
          alert(this.response.error);
        }
      })
    }else{
      alert("porfavor verifique los datos ingresados");
    }
  }

}
