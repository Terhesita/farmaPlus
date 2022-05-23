import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  loginForm= new FormGroup({
    Nombre: new FormControl(),
    Apellidos: new FormControl(),
    ApellidoM: new FormControl(),
    Correo: new FormControl(),
    Password: new FormControl(),
    Telefono: new FormControl(),
    Fecha_nac: new FormControl(),
    Genero: new FormControl()
  });

  constructor(private fb:FormBuilder, private authService:AuthService) { }

  ngOnInit(): void {
  }

  onLogin():void{
    /*console.log("prueba consola");*/
    console.log(this.loginForm.value['Nombre']);
    console.log(this.loginForm.value['Apellidos']);
    console.log(this.loginForm.value['Correo']);
    console.log(this.loginForm.value['Password']);
    console.log(this.loginForm.value['Telefono']);
    console.log(this.loginForm.value['Genero']);
    console.log(this.loginForm.value['Fecha_nac']);
    
    let datos = {
      Nombre: this.loginForm.value['Nombre'],
      Apellidos: this.loginForm.value['Apellidos'],
      Correo: this.loginForm.value['Correo'],
      Password: this.loginForm.value['Password'],
      Telefono: this.loginForm.value['Telefono'],
      Genero: this.loginForm.value['Genero'],
      Fecha_nac: this.loginForm.value['Fecha_nac']
    }
    this.authService.register(datos,'/registro').subscribe(res => {console.log(res)},error => {console.log(error)})

    if(this.loginForm.invalid){
      return Object.values(this.loginForm.controls).forEach(control => {
        control.markAllAsTouched();
      })
    }
    else{
      console.log('No valido')
    }
  }
  
}
