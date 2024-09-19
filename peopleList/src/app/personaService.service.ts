import { Person } from './person/person.module';

export class PeopleService {
  people: Person[] = [
    new Person('Juan', 'Perez', 'Maestro'),
    new Person('Laura', 'Juarez', 'Cafetero'),
    new Person('Karla', 'Lara', 'Martillero'),
  ];

  addPersonToList(person: Person) {
    this.people.push(person);
  }
}
