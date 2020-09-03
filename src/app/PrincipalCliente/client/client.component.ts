import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Product } from 'src/app/Moldelo/Product';
import { ClientServiceService } from 'src/app/PrincipalCliente/Service/client-service.service';
import {Response} from 'src/app/Moldelo/Response';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  displayedColumns: string[] = ['productId','name','basePrice','inventoryQuantity','detalles'];
  Products: Product[];
  dataSource;
  name=sessionStorage.getItem("nombre");
  count=sessionStorage.getItem("Nproductos");
  response = new Response();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor( private router:Router,private service:ClientServiceService) {
    this.service.ConsultarPublicos()
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
  ngOnInit() {
    if(sessionStorage.getItem("nombre")==null){
      this.router.navigate(["login"]);
    }
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  salir(){
    this.router.navigate(["login"]);
  }
  seleccionarProduct(product ){
    sessionStorage.setItem("selecionado",JSON.stringify(product));
    this.router.navigate(["detailsProduct"]);
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