import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { UserService } from 'src/app/Principal/Service/user.service';
import {Response} from 'src/app/Moldelo/Response';
import { User } from 'src/app/Moldelo/User';
import { Blockuser } from 'src/app/Moldelo/BlockUser';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {
  displayedColumns: string[] = ['email','name','Status','Bloquear','Desbloquear'];
  users: User[];
  dataSource;
  name=sessionStorage.getItem("nombre");
  response = new Response();
  block= new Blockuser();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private router:Router,private service:UserService) { 
    this.block.admin=sessionStorage.getItem("email");
    this.service.FindAll()
    .subscribe(data=>{
      this.response=data;
      if(this.response.success){
        this.users=this.response.response;
        this.dataSource = new MatTableDataSource<User>(this.users);
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
  irHome(){
    this.router.navigate(["HomeAdmin"]);
  }
  irPassword(){
    this.router.navigate(["ChangePasswordAdmin"]);
  }
  BlockUser(user){
    this.block.status=false;
    this.block.user=user.email;
    this.sendblock(this.block);
    this.router.navigate(["HomeAdmin"]);

  }
  UnBlockuser(user){
    this.block.status=true;
    this.block.user=user.email;
    this.sendblock(this.block);
    this.router.navigate(["HomeAdmin"]);
  }
  sendblock(blockUser){
    blockUser.admin=sessionStorage.getItem("email");
    this.service.block(blockUser)
    .subscribe(data=>{
      this.response=data;
      alert(this.response.error); 
      this.findUser();
    });
  }
  findUser(){
    
    this.service.FindAll()
    .subscribe(data=>{
      this.response=data;
      if(this.response.success){
        this.users=this.response.response;
        this.dataSource = new MatTableDataSource<User>(this.users);
        this.dataSource.paginator = this.paginator;
      }else{
        alert(this.response.error);
      }
    });
  }
}
