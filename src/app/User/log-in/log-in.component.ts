import { Component, OnInit } from '@angular/core';
import {User} from 'src/app/Moldelo/User';
import {Response} from 'src/app/Moldelo/Response';
import { FormControl } from '@angular/forms';
import { UserServiceService } from '../Service/user-service.service';
import { Router } from '@angular/router';
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
  }
  
  LogIn(){
    this.user.email=this.email.value;
    this.user.password=this.password.value;
    this.service.Login(this.user)
    .subscribe(data=>{
      this.response=data;
      if(this.response.success){
        alert(this.response.error);
        sessionStorage.setItem("email",this.response.response.email);
        sessionStorage.setItem("nombre",this.response.response.name);
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

