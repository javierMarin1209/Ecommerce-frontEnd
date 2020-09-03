import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { ProductXorder } from 'src/app/Moldelo/productXorder';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  name=sessionStorage.getItem("nombre");
  count=sessionStorage.getItem("Nproductos");
  productXorders: ProductXorder[];
  productXorder= new ProductXorder();
  product = JSON.parse(sessionStorage.selecionado);
  constructor(private router:Router) { }

  ngOnInit() {
    if(sessionStorage.getItem("nombre")==null){
      this.router.navigate(["login"]);
    }
  }
  cantidad= new FormControl('', [
    Validators.required
  ]);
  verificarCantidad(){
    if(this.cantidad.value<=this.product.inventoryQuantity&&this.cantidad.value>0){
      return false;
    }else{
      return true;
    }
  }
  agregar(){
    if(!this.verificarCantidad()&& this.cantidad.valid){
      if(sessionStorage.getItem("carritoActivo")!=null){
        this.productXorders = JSON.parse(sessionStorage.carritoActivo);
      }else{
        this.productXorders=new Array<ProductXorder>();
      }
      console.log("vamos bien");
      this.productXorder.basePrice=this.product.basePrice.toFixed(2);
      this.productXorder.productProductId=this.product.productId;
      this.productXorder.productName=this.product.name;
      this.productXorder.quantity=this.cantidad.value;
      this.productXorder.taxPrice=this.product.taxRate.toFixed(2);
      this.productXorders.push(this.productXorder)
      sessionStorage.setItem("carritoActivo",JSON.stringify(this.productXorders));
      sessionStorage.setItem("Nproductos",JSON.stringify(this.productXorders.length));
      sessionStorage.removeItem("selecionado");
      this.router.navigate(["principalClient"]);
    }else{
    alert("Porfavor verifique la cantidad solicitadd");
    }
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
