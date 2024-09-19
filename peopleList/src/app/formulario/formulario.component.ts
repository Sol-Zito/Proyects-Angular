import { Component, ElementRef, ViewChild } from '@angular/core';
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
  constructor(private peopSer: PeopleService) {}

  @ViewChild('nameUser') nameUser: ElementRef;
  @ViewChild('lastnameUser') lastnameUser: ElementRef;
  @ViewChild('jobUser') jobUser: ElementRef;

  AddPerson() {
    let person1 = new Person(
      this.nameUser.nativeElement.value,
      this.lastnameUser.nativeElement.value,
      this.jobUser.nativeElement.value
    );
    this.peopSer.addPersonToList(person1);
    console.log('se cargo persona');
  }
}
