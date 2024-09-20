import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Person } from '../person/person.module';
import { PeopleService } from '../personaService.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  // @ViewChild('nameUser') nameUser: ElementRef;
  // @ViewChild('lastnameUser') lastnameUser: ElementRef;
  // @ViewChild('jobUser') jobUser: ElementRef;

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
      console.log('se cargo persona');
    }
  }
}
