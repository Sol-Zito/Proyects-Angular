import { Component } from '@angular/core';
import { HijoComponent } from './hijo/hijo.component';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css',
})
export class PadreComponent {
  recibido!: string;
  recibirMensaje($event: string) {
    this.recibido = $event;
    throw new Error('Method not implemented.');
  }
  mensajePadre: string = 'Mensaje del Padre';
}
