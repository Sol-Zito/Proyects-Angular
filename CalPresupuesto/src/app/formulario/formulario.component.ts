import { Component } from '@angular/core';
import { IngresoServicio } from '../ingreso/ingreso.servicio';
import { EgresoServicio } from '../egreso/egreso.servicio';
import { Egreso } from '../egreso/egreso.model';
import { Ingreso } from '../ingreso/ingreso.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
})
export class FormularioComponent {
  descripcion: string = '';
  valor: number = 0;

  agregar_tipo: string = 'ingresoOperacion';

  tipoOperacion(evento: any) {
    this.agregar_tipo = evento.target.value;
    console.log(evento.target.value);

    // throw new Error('Method not implemented.');
  }

  constructor(
    private Ingresos: IngresoServicio,
    private Egresos: EgresoServicio
  ) {}

  addElementToArr() {
    if (this.descripcion != '' && this.valor > 0) {
      if (this.agregar_tipo == 'ingresoOperacion') {
        this.Ingresos.ingresos.push(new Ingreso(this.descripcion, this.valor));
      } else {
        this.Egresos.egresos.push(new Egreso(this.descripcion, this.valor));
      }
      this.descripcion = '';
      this.valor = 0;
    }
  }
}
