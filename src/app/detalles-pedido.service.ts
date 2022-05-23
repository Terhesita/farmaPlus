import { EventEmitter, Injectable, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetallesPedidoService {

  private refresh$= new Subject<void>();

  @Output()transmitirFolio : EventEmitter<any>= new EventEmitter()

  $Emitter = new EventEmitter();

  emitirEvento(){
    this.$Emitter.emit();
  }

  get refres$(){
    return this.refresh$
  }

  constructor() { }
}
