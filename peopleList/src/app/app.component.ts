import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Person } from './person/person.module';
import { PersonComponent } from './person/person.component';
import { NgFor } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    PersonComponent,
    NgFor,
    FormularioComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'People List';

  list: Person[] = [
    new Person('Jose', 'Retamoso', 'Albañil'),
    new Person('Jairo', 'Retamoso', 'Albañil'),
  ];

  personaAgregada(person: Person) {
    this.list.push(person);
    throw new Error('Method not implemented.');
  }
}
