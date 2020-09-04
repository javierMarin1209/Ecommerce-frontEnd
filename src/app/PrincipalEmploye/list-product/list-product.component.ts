import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Moldelo/Product';
import { ProductService } from 'src/app/Principal/Service/product.service';
import { OrderService } from 'src/app/Principal/Service/order.service';
import { Order } from 'src/app/Moldelo/Order';
import { OrderStatus } from 'src/app/Moldelo/OrderStatus';
import { Response } from 'src/app/Moldelo/Response';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  name=sessionStorage.getItem("nombre");
  order= new Order();
  response= new Response();
  count;
  displayedColumns: string[] = ['productId','name','basePrice','inventoryQuantity','detalles'];
  Products: Product[];
  dataSource;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private router:Router,private service:OrderService,private ProductService:ProductService) {
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
    this.ProductService.findAll()
    .subscribe(data=>{
      this.response=data;
      if(this.response.success){
        this.Products=this.response.response;
        this.dataSource = new MatTableDataSource<Product>(this.Products);
        this.dataSource.paginator = this.paginator;
      }else{
        alert(this.response.error);
      }
    });
   }
   seleccionarProduct(element){
    sessionStorage.setItem("selecionado",JSON.stringify(element));
    this.router.navigate(["modifyProduct"]);
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
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
