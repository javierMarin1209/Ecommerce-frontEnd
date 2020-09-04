import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import { OrderService } from 'src/app/Principal/Service/order.service';
import { Order } from 'src/app/Moldelo/Order';
import { OrderStatus } from 'src/app/Moldelo/OrderStatus';
import { Response } from 'src/app/Moldelo/Response';
import {MatTableDataSource} from '@angular/material/table';
import { RequestOrder } from 'src/app/Moldelo/RequestOrder';
@Component({
  selector: 'app-all-orders-employe',
  templateUrl: './all-orders-employe.component.html',
  styleUrls: ['./all-orders-employe.component.css']
})
export class AllOrdersEmployeComponent implements OnInit {
  displayedColumns: string[] = ['orderId','state','totalBasePrice','totalTaxPrice','totalPrice','discount','detalles'];
  name=sessionStorage.getItem("nombre");
  order= new Order();
  orders:Order[];
  response= new Response();
  requestOrder= new RequestOrder();
  count;
  dataSource;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private router:Router,private Orderservice:OrderService) { 
    this.order.state=OrderStatus.Pagada;
    this.Orderservice.countAllByStatus(this.order)
    .subscribe(data=>{
      this.response=data;
      if(this.response.success){
        if(this.response.response>0){
          this.count=this.response.response;
        }
      }
    });
    this.Orderservice.findAll()
    .subscribe(data=>{
      this.response=data;
      if(this.response.success){
        this.orders=this.response.response;
        this.dataSource = new MatTableDataSource<Order>(this.orders);
        this.dataSource.paginator = this.paginator;
      }else{
        alert(this.response.error);
      }
    });
  }
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
    seleccionarOrden(order){
    this.requestOrder.orderId=order.orderId;
    this.Orderservice.BuscarOrden(this.requestOrder)
    .subscribe(data=>{
      this.response=data;
      if(this.response.success){
        sessionStorage.setItem("selecionado",JSON.stringify(this.response.response));
        this.router.navigate(["detailsOrder"]);
      }else{
        alert(this.response.error);
      }
    });
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
  
}
