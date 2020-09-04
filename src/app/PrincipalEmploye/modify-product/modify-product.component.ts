import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/Principal/Service/order.service';
import { Order } from 'src/app/Moldelo/Order';
import { OrderStatus } from 'src/app/Moldelo/OrderStatus';
import { Response } from 'src/app/Moldelo/Response';
import { ProductService } from 'src/app/Principal/Service/product.service';
import { RequestProduct } from 'src/app/Moldelo/RequestProduct';
@Component({
  selector: 'app-modify-product',
  templateUrl: './modify-product.component.html',
  styleUrls: ['./modify-product.component.css']
})
export class ModifyProductComponent implements OnInit {
  state: string;
  states: string[] = ['Borrador', 'Publicado']
  name=sessionStorage.getItem("nombre");
  order= new Order();
  response= new Response();
  count:string;
  change=false;
  product = JSON.parse(sessionStorage.selecionado);
  request= new RequestProduct();
  constructor(private router:Router,private service:OrderService,private productService:ProductService) { 
    this.state=this.product.ProductStatus;
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
    Validators.maxLength(280),
  ]);

  nombre= new FormControl('', [
    Validators.maxLength(100),
  ]);
  price = new FormControl('', [
    Validators.min(0.0000001),
  ]);
  tax = new FormControl('', [
    Validators.min(0.000001),
    Validators.max(1),
  ]);
  quantity = new FormControl('', [
    Validators.min(0.000001),
  ]);

  
  Modificar(){
    if(this.nombre.valid&&this.description.valid&&this.price.valid&&this.tax.valid&&this.quantity.valid){
        if(this.nombre.value!=""&&this.nombre.value!=this.product.name){
          this.change=true;
          this.request.name=this.nombre.value;
        }
        if(this.description.value!=""&&this.description.value!=this.product.description){
          this.change=true;
          this.request.description=this.description.value;
        }
        if(this.price.value!=""&&this.price.value!=this.product.basePrice){
          this.change=true;
          this.request.basePrice=this.price.value;
        }
        if(this.tax.value!=""&&this.tax.value!=this.product.taxRate){
          this.change=true;
          this.request.taxRate=this.tax.value;
        }
        if(this.state!=this.product.productStatus&&this.state!=null){
          this.change=true;
          this.request.productStatus=this.state;
        }
        if(this.quantity.value!=""&&this.quantity!=this.product.inventoryQuantity){
          this.change=true;
          this.request.inventoryQuantity=this.quantity.value;
        }
        if(this.change){
          this.request.productId=this.product.productId;
          this.request.email=sessionStorage.getItem("email");
          this.productService.actualizarProducto(this.request)
          .subscribe(data=>{
          this.response=data;
          if(this.response.success){
            alert(this.response.error);
            this.router.navigate(["listProducts"]);
          }else{
            alert(this.response.error);
          }
        });
        }else{
          alert("No se a modificado ningun campo");
        }
    }else{
      alert("Porfavor verifique los datos ingresados");
    }
    
  }
  ngOnInit() {
    if(sessionStorage.getItem("nombre")==null){
      this.router.navigate(["login"]);
    }
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
}
