import { Component, OnInit } from '@angular/core';
import {User} from 'src/app/Moldelo/User';
import {Response} from 'src/app/Moldelo/Response';
import { FormControl } from '@angular/forms';
import { UserServiceService } from '../Service/user-service.service';
import { Router } from '@angular/router';
import { UserType } from 'src/app/Moldelo/UserType';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  email = new FormControl('');
  password = new FormControl('');
  user= new User();
  response = new Response();
  
  constructor(private service:UserServiceService, private router:Router) {
       
  }
  ngOnInit() {
    sessionStorage.clear();
    sessionStorage.clear();
  }
  
  LogIn(){
    this.user.email=this.email.value;
    this.user.password=this.password.value;
    this.service.Login(this.user)
    .subscribe(data=>{
      this.response=data;
      if(this.response.success){
        sessionStorage.setItem("email",this.response.response.email);
        sessionStorage.setItem("nombre",this.response.response.name);
        console.log(this.response.response.type);
        switch(this.response.response.type){
          case "Cliente":
            this.router.navigate(["principalClient"]);
          break;
          case UserType.Administrador:
            alert(this.response.error);
          break;
          case UserType.Empleado:
            alert(this.response.error);
          break;
        }
      }else{
        alert(this.response.error);
      }
      
    })
  }

  registrar(){
    this.router.navigate(["addClient"]);
  }
  olvido(){
    this.router.navigate(["forgotPassword"]);
  }
}

