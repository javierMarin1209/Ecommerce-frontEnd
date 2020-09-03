import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Response } from 'src/app/Moldelo/Response';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  constructor(private http:HttpClient) {
   }
   base='http://localhost:8080/Ecommerce/user';

   Login(user){
    return this.http.post<Response>(this.base+'/logIn', user);
  }
  Registry(user){
    return this.http.post<Response>(this.base+'/create', user);
  }
  ForgotPassword(user){
    return this.http.post<Response>(this.base+'/forgotPassword', user);
  }
  ConfirmPassword(user){
    return this.http.post<Response>(this.base+'/confirmPassword', user);
  }
  ChangePassword(user){
    return this.http.post<Response>(this.base+'/changePassword', user);
  }
}
