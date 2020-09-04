import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/Principal/Service/order.service';
import { Order } from 'src/app/Moldelo/Order';
import { OrderStatus } from 'src/app/Moldelo/OrderStatus';
import { Response } from 'src/app/Moldelo/Response';
import { RequestProduct } from 'src/app/Moldelo/RequestProduct';
import { ProductService } from 'src/app/Principal/Service/product.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  state: string;
  states: string[] = ['Borrador', 'Publicado']
  name=sessionStorage.getItem("nombre");
  order= new Order();
  response= new Response();
  count;
  change=false;
  request= new RequestProduct();
  constructor(private router:Router,private service:OrderService,private productService:ProductService) { 
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
  description = new FormControl('', [
    Validators.required,
    Validators.maxLength(280),
  ]);

  nombre= new FormControl('', [
    Validators.required,
    Validators.maxLength(100),
  ]);
  price = new FormControl('', [
    Validators.required,
    Validators.min(0.0000001),
  ]);
  tax = new FormControl('', [
    Validators.required,
    Validators.min(0.000001),
    Validators.max(1),
  ]);
  quantity = new FormControl('', [
    Validators.required,
    Validators.min(0.000001),
  ]);


  ngOnInit() {
    if(sessionStorage.getItem("nombre")==null){
      this.router.navigate(["login"]);
    }
  }
  irUpdate(){
    this.router.navigate(["listProducts"]);
  }
  irProductos(){
    
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
  Crear(){
    if(this.nombre.valid&&this.description.valid&&this.price.valid&&this.tax.valid&&this.quantity.valid){
      this.request.name=this.nombre.value;
      this.request.description=this.description.value;
      this.request.basePrice=this.price.value;
      this.request.taxRate=this.tax.value;
      this.request.productStatus=this.state;
      this.request.inventoryQuantity=this.quantity.value;
          this.request.email=sessionStorage.getItem("email");
          this.productService.crear(this.request)
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
      alert("Porfavor verifique los datos ingresados");
    }
    
  }
}
