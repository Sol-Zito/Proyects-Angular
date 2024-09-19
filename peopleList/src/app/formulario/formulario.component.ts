import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
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

  @ViewChild('nameUser') nameUser: ElementRef;
  @ViewChild('lastnameUser') lastnameUser: ElementRef;
  @ViewChild('jobUser') jobUser: ElementRef;

  AddPerson() {
    let person1 = new Person(
      this.nameUser.nativeElement.value,
      this.lastnameUser.nativeElement.value,
      this.jobUser.nativeElement.value
    );
    this.personaCreada.emit(person1);
    console.log('se cargo persona');
  }
}
