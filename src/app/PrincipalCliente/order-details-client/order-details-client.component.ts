import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/Principal/Service/order.service';
import { RequestOrder } from 'src/app/Moldelo/RequestOrder';
import { Response } from 'src/app/Moldelo/Response';

@Component({
  selector: 'app-order-details-client',
  templateUrl: './order-details-client.component.html',
  styleUrls: ['./order-details-client.component.css']
})
export class OrderDetailsClientComponent implements OnInit {
  displayedColumns =['productName', 'quantity', 'basePrice', 'taxPrice'];
  dataSource;
  show=true;
  name=sessionStorage.getItem("nombre");
  count=sessionStorage.getItem("Nproductos");
  request= new RequestOrder();
  response= new Response();
  responseOrder=JSON.parse(sessionStorage.selecionado);
  constructor(private router:Router,private service:OrderService) {
    this.dataSource = this.responseOrder.productXorders;
    if(this.responseOrder.state=="Registrada"){
      this.show=true;
    }else{
      this.show=false;
    }
   }
  
  ngOnInit() {
    if(sessionStorage.getItem("nombre")==null){
      this.router.navigate(["login"]);
    }
  }
  pagar(){
  this.request.userXorders=sessionStorage.getItem("email");
  this.request.orderId=this.responseOrder.orderId;
  this.service.Pagar(this.request)
    .subscribe(data=>{
      this.response=data;
      if(this.response.success){
        alert(this.response.error);
        this.router.navigate(["allOrdersClient"]);
      }else{
        alert(this.response.error);
      }
    });
  }
  eliminar(){
    this.request.orderId=this.responseOrder.orderId;
    this.service.Eliminar(this.request)
    .subscribe(data=>{
      this.response=data;
      if(this.response.success){
        alert(this.response.error);
        this.router.navigate(["allOrdersClient"]);
      }else{
        alert(this.response.error);
      }
    });
  }
  irCarrito(){
    this.router.navigate(["cartShopping"]);
  }
  irHome(){
    this.router.navigate(["principalClient"]);
  }
  salir(){
    this.router.navigate(["login"]);
  }
  irOrdenes(){
    this.router.navigate(["allOrdersClient"]);
  }
  irPassword(){
    this.router.navigate(["ChangePasswordClient"]);
  }
}
