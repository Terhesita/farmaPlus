import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  user:User;
  alerta: any[]=[]
  informacion: any[]=[]
  informacion_detallada: any[] = []
  nombre: String;
  contra_des:String


  emailCtr = new FormControl('', [Validators.required]);

  constructor(public navegar:Router, private fb:FormBuilder,private authService:AuthService,
              private ngbAlert:NgbAlertConfig) {
    this.createForm();
   }

   correoIncorrecto = false;
   alertMsg : String;

  ngOnInit(): void {
  }

  registro(){
    this.navegar.navigate(["Registro"])
  }

  loging(){
    this.navegar.navigate(["Sesion"])
  }

  login():void{
    /*window.alert("entre a login")*/
    var status = 0
    let datos = {
      Correo: this.loginForm.value["email"],
      Password: this.loginForm.value["password"]
    }
    console.log(datos)
    this.authService.register(datos,'/login').subscribe(
      res=>{console.log(res)
      
        /*Conocer el status del ingreso a cuenta */
        this.alerta.push(res)
        console.log(this.alerta[0]["status"])

        if(this.alerta[0]["status"] == 400){
          this.correoIncorrecto = true;
          this.alertMsg = "Correo Incorrecto"
          console.log(this.correoIncorrecto + " ")
          console.log("correo incorrecto");
        }
        if(this.alerta[0]["status"] == 300){
          console.log("contraseña incorrecta");
          this.correoIncorrecto = true;
          console.log(this.correoIncorrecto + " ")
          this.alertMsg = "Contraseña Incorrecta";
        }
        if(this.alerta[0]["status"] == 200){
          
          localStorage.setItem('usuario', JSON.stringify(this.alerta[0]["json"][0]));
          Swal.fire({
            title:'Bienvenido/a',
            icon:'success',
            confirmButtonText:'Aceptar',
            confirmButtonColor:'#3085d6'
          }).then((result)=>{
            if(result.isConfirmed){
    
            }
          })
          this.navegar.navigate(['']);
          console.log(this.alerta[0]["status"])
        }

        this.alerta.forEach((item) =>{
          status = item["status"];
        
        /*Cuando ingresa a su cuenta */
        this.informacion.push(item["json"]);
        this.contra_des = item["contraDes"]
        console.log("contraseña desencrip "+ this.contra_des)
        localStorage.setItem('Contra_des', this.contra_des.toString())
        /*localStorage.setItem('Contra_des', res[item["contraDes"]])*/
        })

        this.informacion.forEach((item)=>{
          
          this.informacion_detallada = item[0]["Nombre"];
          this.nombre = item[0]["Nombre"];
          localStorage.setItem('Nombre', this.nombre.toString());
        })

        /*Guardar en el cache */
        localStorage.setItem('id', res['idUsuario']);
        localStorage.setItem('Nombre', res['Nombre']);
        localStorage.setItem('Apellidos', res['Apellidos']);
        localStorage.setItem('Correo', res['Correo']);
        localStorage.setItem('Password', res['Password']);
        localStorage.setItem('Telefono', res['Telefono']);
        localStorage.setItem('Genero', res['Genero']);
        localStorage.setItem('Fecha_nac', res['Fecha_nac']);

      }, error => {console.log(error)})



    /*console.log(this.loginForm.value)*/
    if(this.loginForm.invalid){
      return Object.values(this.loginForm.controls).forEach(control => {
        control.markAllAsTouched();
      })
    }
    else{
      this.setUser();
      console.log(this.user);
      /*window.alert("okay")*/
    }

    

    /*if(status = 200){
      Swal.fire({
        title:'Bienvenido/a',
        text:''+this.nombre,
        icon:'success',
        confirmButtonText:'Aceptar',
        confirmButtonColor:'#3085d6'
      }).then((result)=>{
        if(result.isConfirmed){

        }
        this.navegar.navigate(['']);
      })
      this.navegar.navigate(['']);
    }*/

  }


  createForm():void{
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]],
      password: ['', [Validators.required]]
    })
  }

  /* */
  setUser():void{
    this.user = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    }
  }
}
