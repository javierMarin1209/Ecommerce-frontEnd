import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ClientServiceService } from 'src/app/PrincipalCliente/Service/client-service.service';
import {Response} from 'src/app/Moldelo/Response';
import { ProductXorder } from 'src/app/Moldelo/productXorder';
import { RequestOrder } from 'src/app/Moldelo/RequestOrder';

@Component({
  selector: 'app-cartshopping',
  templateUrl: './cartshopping.component.html',
  styleUrls: ['./cartshopping.component.css']
})
export class CartshoppingComponent implements OnInit {
  displayedColumns: string[] = ['productProductId','productName','basePrice','taxPrice','quantity','detalles'];
  Products: ProductXorder[];
  exist=true;
  dataSource;
  name=sessionStorage.getItem("nombre");
  count=sessionStorage.getItem("Nproductos");
  response = new Response();
  requestOrder= new RequestOrder();
  constructor(private router:Router,private service:ClientServiceService) { 
    if(sessionStorage.getItem("carritoActivo")!=null){
      this.Products= JSON.parse(sessionStorage.carritoActivo);
      this.dataSource = new MatTableDataSource<ProductXorder>(this.Products);
    }else{
    this.exist=false;
    }
    
  }
  agregar(){
    this.requestOrder.userXorders=sessionStorage.getItem("email");
    this.requestOrder.productXorders=this.Products;
    this.service.AgregarOrden(this.requestOrder)
    .subscribe(data=>{
      this.response=data;
      if(this.response.success){
        this.Products=this.response.response;
        alert("tu orden se encuentra en la sección ordenes del menu");
        sessionStorage.removeItem("carritoActivo");
        sessionStorage.removeItem("Nproductos");
        this.router.navigate(["principalClient"]);
        
      }else{
        alert(this.response.error);
      }
    });
  }
  eliminarProducto(product){
    for(var i=0;i<this.Products.length;i++){
      if(product.productProductId==this.Products[i].productProductId){
        this.Products.splice(i,1);
      }
    }
    if(this.Products.length>0){
      sessionStorage.setItem("carritoActivo",JSON.stringify(this.Products));
      sessionStorage.setItem("Nproductos",JSON.stringify(this.Products.length));
      this.dataSource = new MatTableDataSource<ProductXorder>(this.Products);
    }else{
      sessionStorage.removeItem("carritoActivo");
      sessionStorage.removeItem("Nproductos");
      this.exist=false;
    }
    this.count=sessionStorage.getItem("Nproductos");
  }
  ngOnInit() {
    if(sessionStorage.getItem("nombre")==null){
      this.router.navigate(["login"]);
    }
    
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
