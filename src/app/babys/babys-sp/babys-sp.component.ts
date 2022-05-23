import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { DetallesPedidoService } from 'src/app/detalles-pedido.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-babys-sp',
  templateUrl: './babys-sp.component.html',
  styleUrls: ['./babys-sp.component.css']
})

export class BabysSpComponent implements OnInit {

  caracteristicas:any[] = []
  info_producto: any[]

  nombreProducto:string | null=localStorage.getItem('NombreProd');
  descripProducto:String | null= localStorage.getItem('DescripcionProd');
  preciosProducto:String | null= localStorage.getItem('PrecioProd');
  imageProducto:String | null= localStorage.getItem('ImageProd');
  catProducto:String | null= localStorage.getItem('CategoriaProd');
  labProducto:String | null= localStorage.getItem('laboratorioProd');
  dosProducto:String | null= localStorage.getItem('DosisProd');
  presProducto:String | null= localStorage.getItem('PresentProd');
  cantProducto:String | null= localStorage.getItem('cantidadPord');
  clavProducto:String | null= localStorage.getItem('claveProd');

  constructor(private detallesProducto:DetallesPedidoService, private authService:AuthService, private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
    this.getInfoProducto()

    this.spinner.show();
    setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
    }, 5000);
  }

  getInfoProducto(){
    /*this.detallesProducto.transmitirFolio.subscribe(producto => {
      console.log(producto)
      this.caracteristicas.push(producto)
      this.caracteristicas.forEach( e => {
        nomProductoGlobal = e["nomProducto"],
        desProductoGlobal = e["desProducto"],
        precProductoGlobal = e["precioProducto"],
        imgProductoGlobal = e["imgProducto"],
        cateProductoGlobal= e["categoria"]
      })
    })*/
    /*var nombre = localStorage.getItem('NombreProd')
    this.nombreProducto = nombre*/
  }

}
