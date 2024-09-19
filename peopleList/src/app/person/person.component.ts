import { Component, Input } from '@angular/core';
import { Person } from './person.module';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css',
})
export class PersonComponent {
  @Input() indEl: number;
  @Input() person: Person;
}
