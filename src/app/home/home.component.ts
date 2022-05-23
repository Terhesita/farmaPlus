import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacebookService, InitParams } from 'ngx-facebook';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nombre:string;
  datos:any[]=[]
  cuenta:boolean=false

  cuentaIniciada = false;
  sinCuenta = false;

  respuestaProductos:any[] = [];
  vendidos:any[];

  id:number

  constructor(private fb: FacebookService, private router:Router, private authService:AuthService) { 

  }

  ngOnInit(): void {
    this.initFb();
    this.getDatos();
    this.getProductos();
  }

  private initFb(){
    const InitParams: InitParams = {xfbml: true, version: 'v12.0'};
    this.fb.init(InitParams);
  }

  getDatos(){
    
    this.datos.push(JSON.parse(localStorage.getItem('usuario')||'{}'));
        this.datos.forEach(element=>{
          this.nombre = element["Nombre"]
          this.id = element["idUsuario"]
          localStorage.setItem('idUsuario',element["idUsuario"])
          /*console.log(element["storage"].length)*/

          if( this.nombre != '')
          {
            this.cuentaIniciada= true;
            this.sinCuenta=false;
            console.log(this.nombre)
          }
          if(!this.nombre)
          {
            this.sinCuenta=true;
            this.cuentaIniciada= false;
            console.log(this.nombre)
          }
        })
        
        /*console.log(localStorage)*/
    }

  getProductos(){
    this.authService.masVenidos("/ProductosVendido").subscribe(res => {
      console.log(res)
      this.respuestaProductos.push(res)
      this.vendidos = this.respuestaProductos[0];

      console.log("push"+this.respuestaProductos)
      console.log("vendidos"+this.vendidos)
    })
  }

}
