import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoServicio } from './egreso.servicio';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrl: './egreso.component.css',
})
export class EgresoComponent implements OnInit {
  egresos: Egreso[] = [];
  @Input() ingresoTotal: number;
  constructor(private egresoSer: EgresoServicio) {}

  ngOnInit(): void {
    this.egresos = this.egresoSer.egresos;
  }

  delete(egreso: Egreso) {
    this.egresoSer.deleteItem(egreso);
  }

  calcularPorcentaje(egreso: Egreso) {
    return egreso.valor / this.ingresoTotal;
  }
}
