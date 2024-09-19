import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FormcalComponent } from './formcal/formcal.component';
import { ResultadoComponent } from "./resultado/resultado.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, FormcalComponent, ResultadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Calculadora Basica';
  total: number = 0;

  resultado(resultado: number) {
    this.total = resultado;
    throw new Error('Method not implemented.');
  }
}
