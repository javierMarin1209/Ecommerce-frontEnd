import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Response } from 'src/app/Moldelo/Response';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  baseOrder='http://localhost:8080/Ecommerce/order';
  constructor(private http:HttpClient) {
  }
  AgregarOrden(RequestOrder){
    return this.http.post<Response>(this.baseOrder+'/create',RequestOrder);
  }
  BuscarPorCliente(RequestOrder){
    return this.http.post<Response>(this.baseOrder+'/findByUser',RequestOrder);
  }
  BuscarOrden(RequestOrder){
    return this.http.post<Response>(this.baseOrder+'/findOne',RequestOrder);
  }
  Pagar(RequestOrder){
    return this.http.post<Response>(this.baseOrder+'/payOrder',RequestOrder);
  }
  Eliminar(RequestOrder){
    return this.http.post<Response>(this.baseOrder+'/delete',RequestOrder);
  }
  countAllByStatus(Order){
    return this.http.post<Response>(this.baseOrder+'/countAllByStatus',Order);
  }
  findAll(){
    return this.http.post<Response>(this.baseOrder+'/findAll',null);
  }
  entregar(requestOrder){
    return this.http.post<Response>(this.baseOrder+'/delivery',requestOrder);
  }
}
