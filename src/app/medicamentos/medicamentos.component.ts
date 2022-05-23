import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { DetallesPedidoService } from '../detalles-pedido.service';
import { AuthService } from '../services/auth.service';
export interface vistaProducto{nombre:String;precio:number;imagen:String;clave:String}

@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.component.html',
  styleUrls: ['./medicamentos.component.css']
})
export class MedicamentosComponent implements OnInit {
  cuenta:boolean=false
  cuentaIniciada = false;
  sinCuenta = false;
  
  respuesta:any [] = [];
  productos:any []=[];

  page:number

  item:number=15

  valor1:number=25
  valor2:number=30
  valor3:number=40
  valor4:number=70

  /*Producto emitir */
  caracteristicas:any[] = []
  info_producto: any[]
  catProducto:String
  nomProducto:String
  desProducto:String
  precioProducto:number
  imgProducto:String

  cambioPaginacion(){
    /*alert(this.item)*/
  }

  /*Favoritos */
  id:String | null =localStorage.getItem('idUsuario')
  favoritosProd:any[]=[]
  detalle_fav:vistaProducto[]=[]
  clave_fav:String
  
  constructor(private authService: AuthService, private detallesPedido:DetallesPedidoService, private navegar:Router) {
   }

  ngOnInit(): void {
    this.getProductos();
    this.caracteristicas.includes
    this.getCuenta();
  }

  getCuenta(){
    if( this.id != '')
    {
      this.cuentaIniciada= true;
      this.sinCuenta=false;
    }
    if(!this.id)
    {
      this.sinCuenta=true;
      this.cuentaIniciada= false;
    }
  }

  getProductos(){
    let datos={
      id: 1000,
      num_prod:25
    }

    this.authService.categoria(datos,"/ProductosMedicamentos").subscribe(res=>{
      this.respuesta.push(res)
      this.productos = this.respuesta[0]["Mensaje"];
    }, error =>{
      alert('Error')
    });

    this.getFavoritos();
  }

  getProductoDetalle(clave: String){
    var json = {clave:clave}

    this.authService.register(json, "/lookProductos").subscribe(res => {
      this.caracteristicas.push(res)
      this.info_producto= this.caracteristicas[0]["producto"]
      this.info_producto.forEach( e =>{
          this.catProducto= "Medicamentos",
          this.nomProducto= e["Nombre"],
          this.desProducto= e["Descripcion"],
          this.precioProducto= e["PrecioV"],
          this.imgProducto= e["Url_imagen"]

          localStorage.setItem('CategoriaProd', this.catProducto.toString())
          localStorage.setItem('NombreProd', e["Nombre"])
          localStorage.setItem('DescripcionProd', e["Descripcion"])
          localStorage.setItem('PrecioProd', this.precioProducto.toString())
          localStorage.setItem('ImageProd', this.imgProducto.toString())
          localStorage.setItem('laboratorioProd', e["Laboratorio"])
          localStorage.setItem('DosisProd', e["Dosis"])
          localStorage.setItem('PresentProd', e["Presentacion"])
          localStorage.setItem('cantidadPord', e["Cantidad"])
          localStorage.setItem('claveProd', e["Clave"])

          this.navegar.navigate(["Producto"]);
      })
    })
  }

  getFavoritos(){
    let dato={
      id_usuario_producto: this.id
    }
    this.authService.register(dato, "/getfavoritos").subscribe(res => {
      console.log(res)
      this.favoritosProd.push(res)

      this.favoritosProd.forEach(element => {
        for (let index = 0; index < this.favoritosProd[0].length; index++) {
          this.detalle_fav.push({clave:element[index]["Clave"],nombre:element[index]["Nombre"],imagen:element[index]["Url_imagen"],precio:element[index]["PrecioV"]});
          console.log(this.productos[0])
          if (this.productos.includes(this.detalle_fav[index])) {
        console.log("si se tiene")
          } else {
            console.log("error")
          }
        }
      })
      console.log(this.favoritosProd)
      
    })
  }

}
