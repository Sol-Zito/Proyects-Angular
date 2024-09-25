import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PeopleService } from '../../personaService.service';
import { Person } from '../person/person.module';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  constructor(private peopSer: PeopleService) {
    this.peopSer.saludar.subscribe((indice: number) =>
      alert('El indice es: ' + (indice + 1))
    );
  }
  nameUser: string = '';
  lastnameUser: string = '';
  jobUser: string = '';

  AddPerson() {
    if (this.nameUser !== '' && this.lastnameUser !== '') {
      let person1 = new Person(this.nameUser, this.lastnameUser, this.jobUser);
      this.peopSer.addPersonToList(person1);
      alert('Se agrego a: ' + this.nameUser);
      this.nameUser = '';
      this.lastnameUser = '';
      this.jobUser = '';
    }
  }
}
