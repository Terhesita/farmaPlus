import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sub-antibiotico',
  templateUrl: './sub-antibiotico.component.html',
  styleUrls: ['./sub-antibiotico.component.css']
})
export class SubAntibioticoComponent implements OnInit {
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
      id: 1002,
      num_prod:25
    }

    this.authService.categoria(datos,"/Antibiotico").subscribe(res=>{
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

    this.authService.register(json,"/lookProductos").subscribe(res => {
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

          this.navegar.navigate(["Producto"]);
        })
    })
  }

}
