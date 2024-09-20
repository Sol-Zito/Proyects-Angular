import { Component, Input } from '@angular/core';
import { Person } from './person.module';
import { PeopleService } from '../personaService.service';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css',
})
export class PersonComponent {
  constructor(private perSer: PeopleService) {}

  @Input() indEl: number;
  @Input() person: Person;

  saludo() {
    this.perSer.saludar.emit(this.indEl);
    throw new Error('Method not implemented.');
  }
}
