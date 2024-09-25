import { Component, OnInit } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { IngresoServicio } from './ingreso.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrl: './ingreso.component.css',
})
export class IngresoComponent implements OnInit {
  ingresos: Ingreso[] = [];

  constructor(private ingresosServ: IngresoServicio) {}

  ngOnInit(): void {
    this.ingresos = this.ingresosServ.ingresos;
  }

  deleteItem(_t5: Ingreso) {
    this.ingresosServ.delete(_t5);
    throw new Error('Method not implemented.');
  }
}
