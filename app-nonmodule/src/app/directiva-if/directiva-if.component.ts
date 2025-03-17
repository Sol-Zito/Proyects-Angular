import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva-if',
  standalone: true,
  imports: [],
  templateUrl: './directiva-if.component.html',
  styleUrl: './directiva-if.component.css',
})
export class DirectivaIfComponent {
  tareas: string[] = ['Aprender tejo', 'Buscar ropa', 'Caminar 100 pasos'];
  agregarTarea(arg0: string) {
    try {
      this.tareas = [...this.tareas, arg0];
      console.log(this.tareas);
    } catch (e) {
      throw new Error('Method not implemented.');
    }
  }

  isAutenticado: boolean = false;
  alternarAutenticacion(): void {
    this.isAutenticado = !this.isAutenticado;
  }
}
