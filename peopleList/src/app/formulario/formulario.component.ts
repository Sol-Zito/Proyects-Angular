import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Person } from '../person/person.module';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  @Output() personaCreada = new EventEmitter<Person>();

  nameUser: string = '';
  lastnameUser: string = '';
  jobUser: string = '';

  AddPerson() {
    let person1 = new Person(this.nameUser, this.lastnameUser, this.jobUser);
    this.personaCreada.emit(person1);
    console.log('se cargo persona');
  }
}
