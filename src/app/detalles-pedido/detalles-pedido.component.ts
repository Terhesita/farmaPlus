import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetallesPedidoService } from '../detalles-pedido.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-detalles-pedido',
  templateUrl: './detalles-pedido.component.html',
  styleUrls: ['./detalles-pedido.component.css']
})
export class DetallesPedidoComponent implements OnInit {

  getInformacion:any[]=[]
  usuario:number

  detalles:any[] = []
  info_pedidos:any[]

  constructor(public navegar:Router, private authService: AuthService, private detallesPedido: DetallesPedidoService) { }

  ngOnInit(): void {
    this.detallesPedido.transmitirFolio.subscribe(datos => {
      var json = {id: datos}
      this.authService.register(json, "/getPedidosDetalles").subscribe(res => {
        console.log(res)
        this.detalles.push(res)
        this.info_pedidos = this.detalles[0]["json"]
      })
    })
    this.getInformation()
    /*this.getPedidoDetalle()*/
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

  /*getPedidoDetalle(){
    var json = {id: this.usuario}
    this.authService.register(json, "/getPedidosDetalles").subscribe(res => {
      console.log("respuesta"+res)
      this.detalles.push(res)
      
    })
  }*/

}
