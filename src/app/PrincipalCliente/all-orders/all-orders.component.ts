import { Component, OnInit,ViewChild } from '@angular/core';
import { RequestOrder } from 'src/app/Moldelo/RequestOrder';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ClientServiceService } from 'src/app/PrincipalCliente/Service/client-service.service';
import {Response} from 'src/app/Moldelo/Response';
import { Router } from '@angular/router';
import { ResponseOrder } from 'src/app/Moldelo/ResponseOrder';
@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {
  displayedColumns: string[] = ['OrderId','basePrice','TaxPrice','Total','status','detalles'];
  Orders: ResponseOrder[];
  requestOrder= new RequestOrder();
  dataSource;
  name=sessionStorage.getItem("nombre");
  count=sessionStorage.getItem("Nproductos");
  response = new Response();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor( private router:Router,private service:ClientServiceService) {
    this.requestOrder.userXorders=sessionStorage.getItem("email");
    this.service.BuscarPorCliente(this.requestOrder)
    .subscribe(data=>{
      this.response=data;
      if(this.response.success){
        this.Orders=this.response.response;
        this.dataSource = new MatTableDataSource<ResponseOrder>(this.Orders);
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
  ngOnInit() {
    if(sessionStorage.getItem("nombre")==null){
      this.router.navigate(["login"]);
    }
  }
  salir(){
    this.router.navigate(["login"]);
  }
  seleccionarOrden(order){
    this.requestOrder.orderId=order.orderId;
    this.service.BuscarOrden(this.requestOrder)
    .subscribe(data=>{
      this.response=data;
      if(this.response.success){
        sessionStorage.setItem("selecionado",JSON.stringify(this.response.response));
    this.router.navigate(["orderDetailsClient"]);
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
  irOrdenes(){
    this.router.navigate(["allOrdersClient"]);
  }
  irPassword(){
    this.router.navigate(["ChangePasswordClient"]);
  }
}
