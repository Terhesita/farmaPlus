import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {
  respuestaProductos:any[] = [];
  vendidos:any[];

  constructor(public authService:AuthService) { 
    
  }

  ngOnInit(): void {
    this.getProductos();
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
