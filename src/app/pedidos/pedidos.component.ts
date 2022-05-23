import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetallesPedidoService } from '../detalles-pedido.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  
  getInformacion:any[]=[]
  usuario:number

  compras:any[] = []
  info_compras:any[]
  getIdPedido:any[]=[]
  idPedido:number

  estado:number
  estado_txt:string='';
  estadoVerde = false;
  estadoRojo = false;
  estadoNaranja = false;
  estadoAzul=false;

  compraDetalle:any[]=[]
  infoDetalleCompra:any[]

  constructor(public navegar:Router, private authService:AuthService, private detallesPedido:DetallesPedidoService) { }

  ngOnInit(): void {
    this.getInformation()
    this.getCompras()
  }

  miCuenta(){
    this.navegar.navigate(["Mi-Cuenta"])
  }

  factura(){
    this.navegar.navigate(["Nueva-Factura"])
  }

  newcontrasena(){
    this.navegar.navigate(["Actualizar-contrasena"])
  }

  getInformation(){
    this.getInformacion.push(JSON.parse(localStorage.getItem('usuario')||'{}'))
    this.getInformacion.forEach(element=>{
      
      this.usuario = element["idUsuario"]
      console.log("id" + this.usuario)
    })
  }

  getCompras(){
    var json = {id: this.usuario}
    this.authService.register(json, "/getPedidos").subscribe(res => {
      this.compras.push(res)
      this.info_compras = this.compras[0]["json"]
      console.log(this.info_compras)
      
      /*this.idPedido = this.compras[0]["json"][0]["Folio"]
      console.log(this.idPedido)*/
    })
  }

  getPedidoDetalle(id:number){
    var json = {id: id}
    this.detallesPedido.transmitirFolio.emit(id)
    this.detallesPedido.emitirEvento();
  }

}
