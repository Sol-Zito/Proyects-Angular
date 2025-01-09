import { LoggingService } from './loggingService.service';
import { Person } from './people/person/person.module';
import { EventEmitter, Injectable } from '@angular/core';

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

  saludar = new EventEmitter<string>();

  addPersonToList(person: Person) {
    this.message.sendMessage('Se cargo persona: ' + person.name);
    this.people.push(person);
  }

  findPerson(index: number) {
    let person: Person = this.people[index];
    return person;
  }

  deletePerson(arg0: number) {
    this.people.splice(arg0, 1);
  }

  editPErson(indice: number, person: Person) {
    let persona = this.people[indice];
    persona.name = person.name;
    persona.lastname = person.lastname;
    persona.job = person.job;
  }
}
