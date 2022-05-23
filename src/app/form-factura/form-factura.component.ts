import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-form-factura',
  templateUrl: './form-factura.component.html',
  styleUrls: ['./form-factura.component.css']
})
export class FormFacturaComponent implements OnInit {

  datos:any[]=[]
  id_usu:number

  facturaForm = new FormGroup({
    rfc: new FormControl(),
    direc_1: new FormControl(),
    direc_2: new FormControl(),
    razon_s: new FormControl(),
    cp: new FormControl(),
    ciudad: new FormControl(),
    estado: new FormControl(),
    lada: new FormControl(),
    tel: new FormControl(),
    nombre: new FormControl(),
    correo: new FormControl()
  })

  constructor(public navegar:Router, private authService:AuthService) { }

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

  factura():void{
    console.log(this.facturaForm.value['rfc']),
    console.log(this.facturaForm.value['direc_1']),
    console.log(this.facturaForm.value['direc_2']),
    console.log(this.facturaForm.value['razon_s']),
    console.log(this.facturaForm.value['cp']),
    console.log(this.facturaForm.value['ciudad']),
    console.log(this.facturaForm.value['estado']),
    console.log(this.facturaForm.value['lada']),
    console.log(this.facturaForm.value['tel']),
    console.log(this.facturaForm.value['nombre']),
    console.log(this.facturaForm.value['correo'])

    let new_fac = {
      RFC:this.facturaForm.value['rfc'],
      DIRECCION_1:this.facturaForm.value['direc_1'],
      DIRECCION_2:this.facturaForm.value['direc_2'],
      Razon_Social:this.facturaForm.value['razon_s'],
      CP:this.facturaForm.value['cp'],
      CIUDAD:this.facturaForm.value['ciudad'],
      Estado:this.facturaForm.value['estado'],
      LADA:this.facturaForm.value['lada'],
      TELEFONO:this.facturaForm.value['tel'],
      NOMBRE:this.facturaForm.value['nombre'],
      CORREO:this.facturaForm.value['correo'],
      ID_USUARIO: this.id_usu
    }

    this.authService.register(new_fac, "/AgregarFacturas").subscribe(
      res => { 
        console.log(res)
        this.navegar.navigate(["Mi-Cuenta"])

      },
     error => {console.log(error)})
  }

  cancelar(){
    this.navegar.navigate(["Mi-Cuenta"])
  }

}
