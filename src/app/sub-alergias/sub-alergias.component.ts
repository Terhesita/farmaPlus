import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sub-alergias',
  templateUrl: './sub-alergias.component.html',
  styleUrls: ['./sub-alergias.component.css']
})
export class SubAlergiasComponent implements OnInit {
  cuenta:boolean=false
  cuentaIniciada = false;
  sinCuenta = false;

  respuesta:any [] = [];
  productos:any [];

  page:number
  item:number=15

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
  detalle_fav:any[]
  clave_fav:String

  constructor(private authService:AuthService, private navegar:Router) { }

  ngOnInit(): void {
    this.getProductos();
    this.getFavoritos();
    this.getCuenta()
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
      id: 1001,
      num_prod:25
    }

    this.authService.categoria(datos,"/Alergia").subscribe(res=>{
      this.respuesta.push(res)
      this.productos = this.respuesta[0]["Mensaje"];

      console.log(this.productos)
      console.log(this.respuesta)
    }, error =>{
      alert('Error')
    });
  }

  getProductoDetalle(clave: String){
    var json = {clave:clave}

    this.authService.register(json, "/lookProductos").subscribe( res => {
      this.caracteristicas.push(res)
      this.info_producto= this.caracteristicas[0]["producto"]
      this.info_producto.forEach( e =>{
          this.catProducto= "Alegías",
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
      this.favoritosProd.push(res)
      this.detalle_fav = this.favoritosProd[0]["0"]["Clave"];
      
    })
  }
}
