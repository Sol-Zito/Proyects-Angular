import { LoggingService } from './loggingService.service';
import { Person } from './person/person.module';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  people: Person[] = [
    new Person('Juan', 'Perez', 'Maestro'),
    new Person('Laura', 'Juarez', 'Cafetero'),
    new Person('Karla', 'Lara', 'Martillero'),
  ];

  constructor(private message: LoggingService) {}

  addPersonToList(person: Person) {
    this.message.sendMessage('Se cargo persona: ' + person.name);
    this.people.push(person);
  }
}
