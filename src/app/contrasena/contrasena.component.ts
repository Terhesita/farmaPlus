import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contrasena',
  templateUrl: './contrasena.component.html',
  styleUrls: ['./contrasena.component.css']
})
export class ContrasenaComponent implements OnInit {

  getInformacion:any[]=[]
  usuario:number
  contrasena:String

  alertMsg : String;
  contrasenaDif: boolean=false;

  anterior_nueva: boolean=false;
  mismaContrasena: String
  
  datos_nulo: boolean = false;
  no_datos: String
  
  contraForm = new FormGroup({
    actualContra: new FormControl(),
    confirmarContra: new FormControl(),
    nuevaContra: new FormControl()
  })

  constructor(public navegar:Router, private authService:AuthService) {
   }

  ngOnInit(): void {
    this.getInformacion.push(JSON.parse(localStorage.getItem('usuario')||'{}'))
    this.getInformacion.forEach(element=>{
      this.usuario = element["idUsuario"]
      
      
      console.log(this.usuario)
    })
  }

  btnCancelar(){
    this.navegar.navigate(["Mi-Cuenta"])
  }

  cambiarContra():void{
    console.log(this.contraForm.value['actualContra'])
    console.log(this.contraForm.value['nuevaContra'])
    console.log(this.contraForm.value['confirmarContra'])

    var contra_des = localStorage.getItem('Contra_des')
    console.log( contra_des)


    if(this.contraForm.value['actualContra'] != contra_des){
      this.anterior_nueva = true;
      this.mismaContrasena= "No es correcta tu contraseña actual "
      console.log(this.contraForm.value['actualContra'])
    }
    else if(this.contraForm.value['nuevaContra'] == null && this.contraForm.value['confirmarContra'] == null){
      console.log("faltan datos")
      this.datos_nulo = true;
      this.no_datos = "Faltan datos"
    }
    else{
      if(this.contraForm.value['nuevaContra'] == this.contraForm.value['confirmarContra']){
        let newPassword={
          id: this.usuario,
          contrasena: this.contraForm.value['confirmarContra']
        }
  
        console.log(newPassword)
  
        this.authService.register(newPassword, "/ActualizarContrasena").subscribe( 
          res => {
            console.log(res)
            Swal.fire({
              title:'Cambiaste de contraseña',
              icon:'success',
              confirmButtonText:'Aceptar',
              confirmButtonColor:'#3085d6'
            }).then((result)=>{
              if(result.isConfirmed){
      
              }
            })
            this.navegar.navigate(['Mi-Cuenta']);
          }, 
          error => {console.log(error)})
          console.log("cambie la contra")
      }
      else{
        this.contrasenaDif = true;
        this.alertMsg = "La contraseña no coincide"
      }
    }


  }

}
