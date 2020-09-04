import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestOrder } from 'src/app/Moldelo/RequestOrder';
import { Response } from 'src/app/Moldelo/Response';
import { OrderService } from 'src/app/Principal/Service/order.service';
import { Order } from 'src/app/Moldelo/Order';
import { OrderStatus } from 'src/app/Moldelo/OrderStatus';

@Component({
  selector: 'app-details-order-employe',
  templateUrl: './details-order-employe.component.html',
  styleUrls: ['./details-order-employe.component.css']
})
export class DetailsOrderEmployeComponent implements OnInit {
  displayedColumns =['productName', 'quantity', 'basePrice', 'taxPrice'];
  dataSource;
  regestry=true;
  pay=false;
  disable=false;
  name=sessionStorage.getItem("nombre");
  count=sessionStorage.getItem("Nproductos");
  request= new RequestOrder();
  response= new Response();
  order= new Order();
  responseOrder=JSON.parse(sessionStorage.selecionado);
  constructor(private router:Router,private service:OrderService) {
    this.dataSource = this.responseOrder.productXorders;
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
    if(this.responseOrder.state=="Registrada"){
      this.regestry=true;
    }else{
      this.regestry=false;
    }
    if(this.responseOrder.state=="Pagada"){
      this.pay=true;
    }else{
      this.pay=false;
    }
   }

  ngOnInit() {
    if(sessionStorage.getItem("nombre")==null){
      this.router.navigate(["login"]);
    }
  }
  Eliminar(){
    this.request.orderId=this.responseOrder.orderId;
    this.service.Eliminar(this.request)
    .subscribe(data=>{
      this.response=data;
      if(this.response.success){
        alert(this.response.error);
        this.router.navigate(["allOrdersEmploye"]);
      }else{
        alert(this.response.error);
      }
    });
  }

  Entregar(){
    this.disable=true;
    this.request.userXorders=sessionStorage.getItem("email");
    this.request.orderId=this.responseOrder.orderId;
    this.service.entregar(this.request)
      .subscribe(data=>{
        this.response=data;
        if(this.response.success){
          alert(this.response.error);
          this.router.navigate(["allOrdersEmploye"]);
        }else{
          alert(this.response.error);
        }
      });
      this.disable=false;
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
