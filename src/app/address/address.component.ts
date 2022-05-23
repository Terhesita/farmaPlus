import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  datos:any[]=[]
  id_usu:number

  addressForm= new FormGroup({
    calle: new FormControl(),
    num_ex: new FormControl(),
    num_in: new FormControl(),
    cp: new FormControl(),
    tel: new FormControl(),
    dependencia: new FormControl(),
    detalles: new FormControl()
  });

  constructor(public navegar:Router, private fb:FormBuilder, private authService:AuthService) { 
  }

  ngOnInit(): void {
    this.getdatos();
  }

  getdatos(){
    this.datos.push(JSON.parse(localStorage.getItem('usuario')||'{}'));
    console.log(localStorage)
    this.datos.forEach(element=>{
      this.id_usu = element["idUsuario"]
      console.log(this.id_usu)
    })
  }

  registro():void{
    console.log(this.addressForm.value['calle']),
    console.log(this.addressForm.value['num_ex']),
    console.log(this.addressForm.value['num_in']),
    console.log(this.addressForm.value['cp']),
    console.log(this.addressForm.value['tel']),
    console.log(this.addressForm.value['dependencia']),
    console.log(this.addressForm.value['detalles'])

    let new_address = {
      calle: this.addressForm.value['calle'],
      num_ex:this.addressForm.value['num_ex'],
      num_in:this.addressForm.value['num_in'],
      cp:this.addressForm.value['cp'],
      telefono:this.addressForm.value['tel'],
      tipo_domicilio:this.addressForm.value['dependencia'],
      indicaciones: this.addressForm.value['detalles'],
      id_usuario: this.id_usu
    }

    this.authService.register(new_address,"/addDireccion").subscribe( 
      res => { 
        console.log(res) 
        this.navegar.navigate(["Mi-Cuenta"])
      }, error => {console.log(error)}
      
      )
  }

  compra(){
    this.navegar.navigate(["Mi-Cuenta"])
  }

}
