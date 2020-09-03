import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Response } from 'src/app/Moldelo/Response';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
  baseProduct='http://localhost:8080/Ecommerce/product';
  baseOrder='http://localhost:8080/Ecommerce/order';
  constructor(private http:HttpClient) {
  }
  ConsultarPublicos(){
    return this.http.post<Response>(this.baseProduct+'/findAllPublic',null);
  }
  AgregarOrden(RequestOrder){
    return this.http.post<Response>(this.baseOrder+'/create',RequestOrder);
  }
}
