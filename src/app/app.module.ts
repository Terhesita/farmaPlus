import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BabysComponent } from './babys/babys.component';
import { HomeComponent } from './home/home.component';
import { BabysSpComponent } from './babys/babys-sp/babys-sp.component';
import { CartComponent } from './cart/cart.component';
import { CardComponent } from './card/card.component';
import { AddressComponent } from './address/address.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { LoginComponent } from './login/login.component';
import { FavoriteComponent } from './favorite/favorite.component';
/* */
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PoliticasComponent } from './politicas/politicas.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { FacturaComponent } from './factura/factura.component';
import { FormFacturaComponent } from './form-factura/form-factura.component';
import { RecetaComponent } from './receta/receta.component';
import { TerminosComponent } from './terminos/terminos.component';
import { PedidosComponent } from './pedidos/pedidos.component';
/*Paginacion */
import {NgxPaginationModule} from 'ngx-pagination';

/*Chat */
import { FacebookModule } from 'ngx-facebook';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
/*Alertas */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MedicamentosComponent } from './medicamentos/medicamentos.component';
import { CuidadoPComponent } from './cuidado-p/cuidado-p.component';
import { AparatosComponent } from './aparatos/aparatos.component';
import { CuracionComponent } from './curacion/curacion.component';
import { InstrumentalComponent } from './instrumental/instrumental.component';
import { SSexualComponent } from './s-sexual/s-sexual.component';
import { VitaminasComponent } from './vitaminas/vitaminas.component';
import { SubAlergiasComponent } from './sub-alergias/sub-alergias.component';
import { SubAntibioticoComponent } from './sub-antibiotico/sub-antibiotico.component';
import { SubAntimicoticoComponent } from './sub-antimicotico/sub-antimicotico.component';
import { SubAntiviralesComponent } from './sub-antivirales/sub-antivirales.component';
import { SubParasitosComponent } from './sub-parasitos/sub-parasitos.component';
import { SubDentalComponent } from './sub-dental/sub-dental.component';
import { SubInflamacionComponent } from './sub-inflamacion/sub-inflamacion.component';
import { SubEstomacalComponent } from './sub-estomacal/sub-estomacal.component';
import { SubRelajanteComponent } from './sub-relajante/sub-relajante.component';
import { SubRespiratorioComponent } from './sub-respiratorio/sub-respiratorio.component';
import { SubVigilanciaComponent } from './sub-vigilancia/sub-vigilancia.component';
import { SubRepelenteComponent } from './sub-repelente/sub-repelente.component';
import { SubGlucosaComponent } from './sub-glucosa/sub-glucosa.component';
import { SubPresionComponent } from './sub-presion/sub-presion.component';
import { SubARespiratorioComponent } from './sub-arespiratorio/sub-arespiratorio.component';
import { SubTemperaturaComponent } from './sub-temperatura/sub-temperatura.component';
import { SubCosmeticosComponent } from './sub-cosmeticos/sub-cosmeticos.component';
import { SubCPielComponent } from './sub-cpiel/sub-cpiel.component';
import { SubHIntimaComponent } from './sub-hintima/sub-hintima.component';
import { SubJabonesComponent } from './sub-jabones/sub-jabones.component';
import { SubOtrosComponent } from './sub-otros/sub-otros.component';
import { SubPanuelosComponent } from './sub-panuelos/sub-panuelos.component';
import { SubAlcoholComponent } from './sub-alcohol/sub-alcohol.component';
import { SubAlgodonComponent } from './sub-algodon/sub-algodon.component';
import { ContrasenaComponent } from './contrasena/contrasena.component';
import { InicioComponent } from './inicio/inicio.component';
import { DetallesPedidoComponent } from './detalles-pedido/detalles-pedido.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import {AccordionModule} from 'primeng/accordion';
import { OtrosComponent } from './otros/otros.component';     //accordion and accordion tab          
/*Spinner */
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [
    AppComponent,
    BabysComponent,
    HomeComponent,
    BabysSpComponent,
    CartComponent,
    CardComponent,
    AddressComponent,
    UserAccountComponent,
    LoginComponent,
    FavoriteComponent,
    PoliticasComponent,
    PreguntasComponent,
    FacturaComponent,
    FormFacturaComponent,
    RecetaComponent,
    TerminosComponent,
    PedidosComponent,
    InicioSesionComponent,
    MedicamentosComponent,
    CuidadoPComponent,
    AparatosComponent,
    CuracionComponent,
    InstrumentalComponent,
    SSexualComponent,
    VitaminasComponent,
    SubAlergiasComponent,
    SubAntibioticoComponent,
    SubAntimicoticoComponent,
    SubAntiviralesComponent,
    SubParasitosComponent,
    SubDentalComponent,
    SubInflamacionComponent,
    SubEstomacalComponent,
    SubRelajanteComponent,
    SubRespiratorioComponent,
    SubVigilanciaComponent,
    SubRepelenteComponent,
    SubGlucosaComponent,
    SubPresionComponent,
    SubARespiratorioComponent,
    SubTemperaturaComponent,
    SubCosmeticosComponent,
    SubCPielComponent,
    SubHIntimaComponent,
    SubJabonesComponent,
    SubOtrosComponent,
    SubPanuelosComponent,
    SubAlcoholComponent,
    SubAlgodonComponent,
    ContrasenaComponent,
    InicioComponent,
    DetallesPedidoComponent,
    CarruselComponent,
    OtrosComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FacebookModule.forRoot(),
    NgbModule,
    NgxPaginationModule,
    AccordionModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
