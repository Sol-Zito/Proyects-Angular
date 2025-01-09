import { Component, OnInit } from '@angular/core';
import { PersonComponent } from './person/person.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PeopleService } from '../personaService.service';
import { Person } from './person/person.module';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [
    RouterOutlet,
    PersonComponent,
    FormularioComponent,
    FormsModule,
    NgFor,
  ],
  templateUrl: './people.component.html',
  styleUrl: './people.component.css',
  providers: [PeopleService],
})
export class PeopleComponent implements OnInit {
  list: Person[] = [];

  constructor(private perSer: PeopleService, private router: Router) {}

  ngOnInit(): void {
    this.list = this.perSer.people;
    console.log('se cargo');
  }
  addPerson() {
    this.router.navigate(['personas/agregar']);
  }
}
