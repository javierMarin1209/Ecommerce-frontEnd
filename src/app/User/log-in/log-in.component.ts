import { Component, OnInit } from '@angular/core';
import {User} from 'src/app/Moldelo/User';
import {Response} from 'src/app/Moldelo/Response';
import { FormControl } from '@angular/forms';
import { UserService } from 'src/app/Principal/Service/user.service';
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
  
  constructor(private service:UserService, private router:Router) {
       
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
        switch(this.response.response.type){
          case "Cliente":
            this.router.navigate(["principalClient"]);
          break;
          case UserType.Administrador:
          break;
          case "Empleado":
            this.router.navigate(["homeEmploye"]);
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

