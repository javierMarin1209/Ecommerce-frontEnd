import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/Principal/Service/order.service';
import { Order } from 'src/app/Moldelo/Order';
import { OrderStatus } from 'src/app/Moldelo/OrderStatus';
import { Response } from 'src/app/Moldelo/Response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name=sessionStorage.getItem("nombre");
  order= new Order();
  response= new Response();
  count;
  constructor(private router:Router,private service:OrderService) { 
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

  ngOnInit() {
    if(sessionStorage.getItem("nombre")==null){
      this.router.navigate(["login"]);
    }
  }
  irUpdate(){
    this.router.navigate(["listProducts"]);
  }
  irProductos(){
    this.router.navigate(["createProduct"]);
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
