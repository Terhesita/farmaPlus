import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { AparatosComponent } from './aparatos/aparatos.component';
import { BabysSpComponent } from './babys/babys-sp/babys-sp.component';


import { BabysComponent } from './babys/babys.component';
import { CardComponent } from './card/card.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { CartComponent } from './cart/cart.component';
import { ContrasenaComponent } from './contrasena/contrasena.component';
import { CuidadoPComponent } from './cuidado-p/cuidado-p.component';
import { CuracionComponent } from './curacion/curacion.component';
import { DetallesPedidoComponent } from './detalles-pedido/detalles-pedido.component';
import { FacturaComponent } from './factura/factura.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { FormFacturaComponent } from './form-factura/form-factura.component';
import { HomeComponent } from './home/home.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { InicioComponent } from './inicio/inicio.component';
import { InstrumentalComponent } from './instrumental/instrumental.component';
import { LoginComponent } from './login/login.component';
import { MedicamentosComponent } from './medicamentos/medicamentos.component';
import { OtrosComponent } from './otros/otros.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { PoliticasComponent } from './politicas/politicas.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { RecetaComponent } from './receta/receta.component';
import { SSexualComponent } from './s-sexual/s-sexual.component';
import { SubAlcoholComponent } from './sub-alcohol/sub-alcohol.component';
import { SubAlergiasComponent } from './sub-alergias/sub-alergias.component';
import { SubAlgodonComponent } from './sub-algodon/sub-algodon.component';
import { SubAntibioticoComponent } from './sub-antibiotico/sub-antibiotico.component';
import { SubAntimicoticoComponent } from './sub-antimicotico/sub-antimicotico.component';
import { SubAntiviralesComponent } from './sub-antivirales/sub-antivirales.component';
import { SubARespiratorioComponent } from './sub-arespiratorio/sub-arespiratorio.component';
import { SubCosmeticosComponent } from './sub-cosmeticos/sub-cosmeticos.component';
import { SubCPielComponent } from './sub-cpiel/sub-cpiel.component';
import { SubDentalComponent } from './sub-dental/sub-dental.component';
import { SubEstomacalComponent } from './sub-estomacal/sub-estomacal.component';
import { SubGlucosaComponent } from './sub-glucosa/sub-glucosa.component';
import { SubHIntimaComponent } from './sub-hintima/sub-hintima.component';
import { SubInflamacionComponent } from './sub-inflamacion/sub-inflamacion.component';
import { SubJabonesComponent } from './sub-jabones/sub-jabones.component';
import { SubOtrosComponent } from './sub-otros/sub-otros.component';
import { SubPanuelosComponent } from './sub-panuelos/sub-panuelos.component';
import { SubParasitosComponent } from './sub-parasitos/sub-parasitos.component';
import { SubPresionComponent } from './sub-presion/sub-presion.component';
import { SubRelajanteComponent } from './sub-relajante/sub-relajante.component';
import { SubRepelenteComponent } from './sub-repelente/sub-repelente.component';
import { SubTemperaturaComponent } from './sub-temperatura/sub-temperatura.component';
import { SubVigilanciaComponent } from './sub-vigilancia/sub-vigilancia.component';
import { TerminosComponent } from './terminos/terminos.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { VitaminasComponent } from './vitaminas/vitaminas.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'Bebes', component: BabysComponent},
  {path:'Producto', component:BabysSpComponent},
  {path:'Compra', component:CartComponent},
  {path:'Nueva-Tarjeta', component:CardComponent},
  {path:'Domicilio', component:AddressComponent},
  {path:'Mi-Cuenta', component:UserAccountComponent},
  {path:'Sesion', component:LoginComponent},
  {path:'Registro', component:InicioSesionComponent},
  {path:'Favoritos', component:FavoriteComponent},
  {path:'Politicas-privacidad', component:PoliticasComponent},
  {path:'preguntas', component:PreguntasComponent},
  {path:'Facturacion', component:FacturaComponent},
  {path:'Nueva-Factura', component:FormFacturaComponent},
  {path:'Receta', component:RecetaComponent},
  {path:'Terminos', component:TerminosComponent},
  {path:'Pedidos', component:PedidosComponent},
  {path:'Medicamentos', component:MedicamentosComponent},
  {path:'Cuidado-personal', component:CuidadoPComponent},
  {path:'Aparatos', component:AparatosComponent},
  {path:'Curacion', component:CuracionComponent},
  {path:'Instrumental', component:InstrumentalComponent},
  {path:'Salud-sexual', component:SSexualComponent},
  {path:'Vitaminas', component:VitaminasComponent},
  {path:'Alergias', component:SubAlergiasComponent},
  {path:'Antibiotico', component:SubAntibioticoComponent},
  {path:'Antimicotico', component:SubAntimicoticoComponent},
  {path:'Antivirales', component:SubAntiviralesComponent},
  {path:'Parasitos', component:SubParasitosComponent},
  {path:'Dental', component:SubDentalComponent},
  {path:'Inflamacion', component:SubInflamacionComponent},
  {path:'Estomacal', component:SubEstomacalComponent},
  {path:'Relajante', component:SubRelajanteComponent},
  {path:'Respiratorio', component:SubARespiratorioComponent},
  {path:'Vigilancia', component:SubVigilanciaComponent},
  {path:'Repelente', component:SubRepelenteComponent},/* */
  {path:'Glucosa', component:SubGlucosaComponent},
  {path:'Presion', component:SubPresionComponent},
  {path:'Aparato-Respiratorio', component:SubARespiratorioComponent},
  {path:'Temperatura', component:SubTemperaturaComponent},
  {path:'Cosmeticos', component:SubCosmeticosComponent},
  {path:'Cuidado-Piel', component:SubCPielComponent},
  {path:'Higiene-Intima', component:SubHIntimaComponent},
  {path:'Jabones', component:SubJabonesComponent},
  {path:'Otros', component:SubOtrosComponent},
  {path:'Panuelos', component:SubPanuelosComponent},
  {path:'Alcohol', component:SubAlcoholComponent},
  {path:'Algodon', component:SubAlgodonComponent},
  {path:'Actualizar-contrasena', component:ContrasenaComponent},
  {path:'Inicio-prueba', component:InicioComponent},
  {path:'Detalles-pedido', component:DetallesPedidoComponent},
  {path:'Carrusel', component:CarruselComponent},
  {path:'Otros-productos', component: OtrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
