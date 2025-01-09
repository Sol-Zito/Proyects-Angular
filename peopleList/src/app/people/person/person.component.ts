import { Component, Input } from '@angular/core';
import { Person } from './person.module';
import { PeopleService } from '../../personaService.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css',
})
export class PersonComponent {
  constructor(private perSer: PeopleService) {}

  @Input() indEl: number;
  @Input() person: Person;

  saludo() {
    this.perSer.saludar.emit(this.person.name);
  }
}
