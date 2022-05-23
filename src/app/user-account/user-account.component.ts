import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  getInformacion:any[]=[]
  usuario:number
  nombre:String =""
  apellidos:String =""
  telefono:number
  correo:String =""
  contrasena:String=""

  tarjetas:any[] = []
  info_tarjetas:any[] 

  domicilios:any[] = []
  info_domicilios:any[]

  facturas:any[] = []
  info_facturas:any[]

  num_tarjeta:number
  num_nuevo:String

  /*Domicilio */
  calle:String =""
  num_ex:number
  num_in:number
  cp:number
  tel_direc:number
  tipo_dom:String
  indicaciones:String
  editar_direc:any[] = []

  /*Factura */
  editar_factura:any[] = []
  nombre_fac:String
  correo_fac:String
  rfc:String
  direc1_fac:String
  direc2_fac:String
  cp_fac:number
  ciudad_fac:String
  razon_social:String
  lada:number
  tel_fac:number
  estado_fac:String

  /*Editar */
  editarForm = new FormGroup({
    calle_editar: new FormControl(),
    numex_editar: new FormControl(),
    numin_editar: new FormControl(),
    cp_editar: new FormControl(),
    tel_editar: new FormControl(),
    dom_editar: new FormControl(),
    indicacion_editar: new FormControl()
  })
 
  nombrengModal:String=''

  /*Editar Factura */
  facEditarForm = new FormGroup({
    nombre_fe: new FormControl(),
    correo_fe: new FormControl(),
    rfc_fe: new FormControl(),
    direc1_fe: new FormControl(),
    direc2_fe: new FormControl(),
    cp_fe: new FormControl(),
    estado_fe: new FormControl(),
    ciudad_fe: new FormControl(),
    rsocial_fe: new FormControl(),
    lada_fe: new FormControl(),
    tel_fe: new FormControl()
  })

  /*Editar Mis datos*/
  perfilForm = new FormGroup({
    nombre_perfil: new FormControl(),
    apellido_perfil: new FormControl(),
    correo_perfil: new FormControl(),
    telefono_perfil: new FormControl()
  })



  constructor(public navegar:Router, private authService:AuthService, private http:HttpClient) {

   }

  ngOnInit(): void {
    this.getInformation()
    this.getTarjetas()
    this.getDomicilio()
    this.getFactura()

    this.getInformacion.push(JSON.parse(localStorage.getItem('usuario')||'{}'))
    this.getInformacion.forEach(element=>{
    this.listadoTarjetas()
      
    })
    
  }
  
  factura(){
    this.navegar.navigate(["Nueva-Factura"])
  }

  historial(){
    this.navegar.navigate(["Pedidos"])
  }

  tarjeta(){
    this.navegar.navigate(["Nueva-Tarjeta"])
  }

  direccion(){
    this.navegar.navigate(["Domicilio"])
  }

  newcontrasena(){
    this.navegar.navigate(["Actualizar-contrasena"])
  }

  addFactura(){
    this.navegar.navigate(["Nueva-Factura"])
  }

  addDomicilios(){
    this.navegar.navigate(["Domicilio"])
  }

  addTarjeta(){
    this.navegar.navigate(["Nueva-Tarjeta"])
  }

  getInformation(){
    this.getInformacion.push(JSON.parse(localStorage.getItem('usuario')||'{}'))
    this.getInformacion.forEach(element=>{
      this.nombre = element["Nombre"]
      this.usuario = element["idUsuario"]
      this.apellidos = element["Apellidos"]
      this.telefono = element["Telefono"]
      this.correo = element["Correo"]
      this.contrasena = element["Password"]
    })
    console.log("la contraseña es:"+ this.contrasena)
  }

  getTarjetas(){
    var json = {id:this.usuario}
    this.authService.register(json, "/getTarjeta").subscribe(res => {
        this.tarjetas.push(res)
        console.log(this.tarjetas[0]["Json"])
        this.info_tarjetas = this.tarjetas[0]["Json"]
        this.info_tarjetas.forEach(e => {
          this.num_nuevo = e["Numero_Tarjeta"].toString().substr(12,4)
        })
    })
    /*console.log("get tarjetas"+this.tarjetas[0]["Json"])*/
    console.log(this.info_tarjetas + "tarjetas")
  }

  getDomicilio(){
    var json = {id:this.usuario}
    this.authService.register(json, "/getDirecciones").subscribe(res => {
        this.domicilios.push(res)
        console.log(this.domicilios[0]["Json"])
        this.info_domicilios = this.domicilios[0]["Json"]
        console.log("largpo de domicilio"+this.info_domicilios.length)
    })
    /*console.log("get Domicilios"+this.getDomicilio)*/
  }

  getFactura(){
    var json = {id:this.usuario}
    this.authService.register(json, "/getFacturas").subscribe(res => {
        this.facturas.push(res)
        console.log("factura datos: "+this.facturas[0]["Json"])
        this.info_facturas = this.facturas[0]["Json"]
    })
    /*console.log("get Facturas"+this.getFactura)*/
  }

  actualizarDireccion(id:number){
    console.log(id)
    var json = {id:id}
    this.authService.register(json,"/getDireccionesInfo").subscribe(res => {
      this.editar_direc.push(res)
      console.log(this.editar_direc[0]["Json"][0])
      this.calle =this.editar_direc[0]["Json"][0]["calle"],
      this.num_ex = this.editar_direc[0]["Json"][0]["num_ex"],
      this.num_in = this.editar_direc[0]["Json"][0]["num_in"]
      this.cp = this.editar_direc[0]["Json"][0]["cp"],
      this.tel_direc = this.editar_direc[0]["Json"][0]["telefono"],
      this.tipo_dom = this.editar_direc[0]["Json"][0]["tipo_domicilio"],
      this.indicaciones = this.editar_direc[0]["Json"][0]["indicaciones"]
      /*this.id_direc = this.editar_direc[0]["Json"][0]["id"]*/
    })
    
  }

  actualizarFactura(id:number){
    console.log(id)
    var json = {id:id}
    this.authService.register(json,"/updateFacturasGet").subscribe(res => {
      this.editar_factura.push(res)
      console.log(this.editar_factura[0]["Mensaje"][0])
      this.nombre_fac = this.editar_factura[0]["Mensaje"][0]["NOMBRE"],
      this.rfc = this.editar_factura[0]["Mensaje"][0]["RFC"],
      this.direc1_fac = this.editar_factura[0]["Mensaje"][0]["DIRECCION_1"],
      this.direc2_fac = this.editar_factura[0]["Mensaje"][0]["DIRECCION_2"],
      this.razon_social = this.editar_factura[0]["Mensaje"][0]["Razon_Social"],
      this.ciudad_fac = this.editar_factura[0]["Mensaje"][0]["CIUDAD"],
      this.correo_fac = this.editar_factura[0]["Mensaje"][0]["CORREO"],
      this.cp_fac = this.editar_factura[0]["Mensaje"][0]["CP"],
      this.estado_fac = this.editar_factura[0]["Mensaje"][0]["Estado"],
      this.lada = this.editar_factura[0]["Mensaje"][0]["LADA"],
      this.tel_fac = this.editar_factura[0]["Mensaje"][0]["TELEFONO"]
    })
  }

  editarDomicilio():void{
    /*console.log(this.editarForm.value['calle_editar'])
    console.log(this.editarForm.value['numex_editar'])
    console.log(this.editarForm.value['numin_editar'])
    console.log(this.editarForm.value['cp_editar'])
    console.log(this.editarForm.value['tel_editar'])
    console.log(this.editarForm.value['dom_editar'])
    console.log(this.editarForm.value['indicacion_editar'])*/

    let editar_direc={
      id_direccion: this.editar_direc[0]["Json"][0]["id"],
      calle: this.editarForm.value['calle_editar'],
      num_ex: this.editarForm.value['numex_editar'],
      num_in:this.editarForm.value['numin_editar'],
      cp:this.editarForm.value['cp_editar'],
      telefono:this.editarForm.value['tel_editar'],
      tipo_domicilio:this.editarForm.value['dom_editar'],
      indicaciones:this.editarForm.value['indicacion_editar']
    }

    console.log(editar_direc)

    this.authService.register(editar_direc, "/updateDirecciones").subscribe(
      res => { 
        console.log(res)
        this.domicilios=[]
        this.info_domicilios=[]
        this.getDomicilio()
      }, error => {console.log(error)}
    )
  }

  editarFactura():void{
    /*console.log(this.facEditarForm.value['nombre_fe'])
    console.log(this.facEditarForm.value['correo_fe'])
    console.log(this.facEditarForm.value['rfc_fe'])
    console.log(this.facEditarForm.value['direc1_fe'])
    console.log(this.facEditarForm.value['direc2_fe'])
    console.log(this.facEditarForm.value['cp_fe'])
    console.log(this.facEditarForm.value['estado_fe'])
    console.log(this.facEditarForm.value['ciudad_fe'])
    console.log(this.facEditarForm.value['rsocial_fe'])
    console.log(this.facEditarForm.value['lada_fe'])
    console.log(this.facEditarForm.value['tel_fe'])*/

    let editar_fac = {
      id_factura: this.editar_factura[0]["Mensaje"][0]["id"],
      RFC: this.facEditarForm.value['rfc_fe'],
      DIRECCION_1:this.facEditarForm.value['direc1_fe'],
      DIRECCION_2:this.facEditarForm.value['direc2_fe'],
      CP:this.facEditarForm.value['cp_fe'],
      LADA:this.facEditarForm.value['lada_fe'],
      TELEFONO:this.facEditarForm.value['tel_fe'],
      NOMBRE:this.facEditarForm.value['nombre_fe'],
      CORREO:this.facEditarForm.value['correo_fe']
    }

    console.log(editar_fac)

    this.authService.register(editar_fac, "/updateFacturas").subscribe(
      res => {
      console.log(res)
      this.facturas=[]
      this.info_facturas=[]
      this.getFactura
    }, 
    error => {console.log(error)})
  }

  editarPerfil():void{
    let editar_usuario = {
      id: this.usuario,
      Nombre:this.perfilForm.value['nombre_perfil'],
      Apellidos:this.perfilForm.value['apellido_perfil'],
      Correo:this.perfilForm.value['correo_perfil'],
      Telefono:this.perfilForm.value['telefono_perfil']
    }

    this.limpiarCache()
    console.log(this.perfilForm.value['nombre_perfil'])
    console.log(this.perfilForm.value['apellido_perfil'])
    console.log(this.perfilForm.value['correo_perfil'])
    console.log(this.perfilForm.value['telefono_perfil'])

    
    console.log(editar_usuario)

    this.authService.register(editar_usuario,"/ActaulizarDatosCliente").subscribe(
      res => {
        console.log(res)

        localStorage.setItem('usuario',JSON.stringify(editar_usuario));
        this.getInformation()
        
      }, error => {console.log(error)}
    )
    
  }

  limpiarCache(){
    localStorage.clear()
    this.navegar.navigate([""])
  }

  listadoTarjetas(){

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic sk_ef05ad5a55ae453a9a5f9a5cc49cfba4'
      })
    };

    const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Authorization', 'Basic pk_8a90825ee0e24dfc8742e7fef6f7eec4')
   


    this.http.get("https://sandbox-api.openpay.mx/v1/mkfuot3ee8f3owki1fqz/customers/avanwav3fq1k5ggb6fhy/cards",{headers:headers}).subscribe(res => {
      console.log(res)
    })
  }
}
