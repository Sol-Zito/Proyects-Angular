import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formcal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formcal.component.html',
  styleUrl: './formcal.component.css',
})
export class FormcalComponent {
  @Output() resultado = new EventEmitter<number>();

  operandoA: number = 0;
  operandoB: number = 0;
  opcionSeleccionado: string = '';
  total: number = 0;

  getTotal() {
    if (this.operandoA !== 0 && this.operandoB !== 0) {
      switch (this.opcionSeleccionado) {
        case 'suma':
          this.total = this.operandoA + this.operandoB;
          break;
        case 'resta':
          this.total = this.operandoA - this.operandoB;
          break;
        case 'division':
          this.total = this.operandoA / this.operandoB;
          break;
        case 'multiplicacion':
          this.total = this.operandoA * this.operandoB;
          break;
        default:
          break;
      }
      console.log(this.opcionSeleccionado);
    }
    this.resultado.emit(this.total);
  }
}
