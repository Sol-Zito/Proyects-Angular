import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css',
})
export class HijoComponent {
  // }
  // actualizarTxt(event: Event) {
  //   const replica = event.target as HTMLInputElement;
  //   this.txtReplica = replica.value;
  //   throw new Error('Method not implemented.');
  // }

  @Input() mensaje!: string;

  @Output() mensajeAPadre = new EventEmitter<string>();
  cambiarMsjAPadre() {
    this.mensajeAPadre.emit('arg0');
  }
  // nombre = '';
  // private titulo = 'Soy un hijo';
  // //private nombre: string = 'Legolas';
  // txtReplica: string = '';
  // saludo: string = 'Saludo inicial';

  // get mostrarTitulo() {
  //   return this.titulo;
  // }

  // obtenerNombre() {
  //   this.nombre = 'legolas';
  //   alert(this.nombre);
  // }

  // actualizarTxt(event: Event) {
  //   const replica = event.target as HTMLInputElement;
  //   this.txtReplica = replica.value;
  //   throw new Error('Method not implemented.');
  // }
}
