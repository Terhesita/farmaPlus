import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public navegar:Router) { }

  ngOnInit(): void {
  }

  tarjeta(){
    this.navegar.navigate(["Nueva-Tarjeta"])
  }

  domicilio(){
    this.navegar.navigate(["Domicilio"])
  }


}
