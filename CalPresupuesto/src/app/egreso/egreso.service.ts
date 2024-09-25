import { Egreso } from './egreso.model';

export class EgresoServicio {
  egresos: Egreso[] = [new Egreso('Renta Depto', 900), new Egreso('Ropa', 200)];

  deleteItem(egreso: Egreso) {
    const ele: number = this.egresos.indexOf(egreso);
    this.egresos.splice(ele, 1);
  }
}
