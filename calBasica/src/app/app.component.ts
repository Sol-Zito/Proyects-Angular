import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Calculadora Basica';
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
    return this.total;
  }
}
