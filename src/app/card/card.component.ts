import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(public navegar:Router) { }

  ngOnInit(): void {
  }

  compra(){
    this.navegar.navigate(["Compra"])
  }
}
