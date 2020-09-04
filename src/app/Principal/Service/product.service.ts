import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Response } from 'src/app/Moldelo/Response';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseProduct='http://localhost:8080/Ecommerce/product';
  constructor(private http:HttpClient) {
  }
  ConsultarPublicos(){
    return this.http.post<Response>(this.baseProduct+'/findAllPublic',null);
  }
  findAll(){
    return this.http.post<Response>(this.baseProduct+'/findAll',null);
  }
  actualizarProducto(product){
    return this.http.post<Response>(this.baseProduct+'/update',product);
  }
  crear(product){
    return this.http.post<Response>(this.baseProduct+'/create',product);
  }
}
