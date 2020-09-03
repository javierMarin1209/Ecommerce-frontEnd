import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { UserServiceService } from '../Service/user-service.service';
import { Router } from '@angular/router';
import {User} from 'src/app/Moldelo/User';
import { UserType } from 'src/app/Moldelo/UserType';
import { Response } from 'src/app/Moldelo/Response';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  user= new User();
  response = new Response();
  constructor(private service:UserServiceService, private router:Router) { 
  }

  ngOnInit() {
  }
  
 email = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  name = new FormControl('', [
    Validators.required
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}')
  ]);
  newPassword = new FormControl('', [
    Validators.required,
  ]);
  registrar(){
    if(this.password.valid&&this.email.valid&&this.name&&this.newPassword&&this.verifyPassword){
      this.user.email=this.email.value;
      this.user.name=this.name.value;
      this.user.type=UserType.Cliente;
      this.user.password=this.password.value;
      this.user.status=true;
      this.service.Registry(this.user)
    .subscribe(data=>{
      this.response=data;
      if(this.response.success){
        alert(this.response.error);
        sessionStorage.setItem("email",this.email.value);
        console.log(this.response.success);
        sessionStorage.setItem("nombre",this.name.value);
        
        this.router.navigate(["principalClient"]);
      }else{
        alert(this.response.error);
      }
    })
    }else{
      alert("porfavor verifique los datos ingresados");
    }
  }
  verifyPassword(){
    if(this.password.value==this.newPassword.value){
      return false;
    }else{
      return true;
    }
  }
}
