import { Component, OnInit } from '@angular/core';
import { PersonComponent } from './person/person.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PeopleService } from '../personaService.service';
import { Person } from './person/person.module';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [PersonComponent, FormularioComponent, FormsModule, NgFor],
  templateUrl: './people.component.html',
  styleUrl: './people.component.css',
  providers: [PeopleService],
})
export class PeopleComponent implements OnInit {
  list: Person[] = [];

  constructor(private perSer: PeopleService) {}

  ngOnInit(): void {
    this.list = this.perSer.people;
    console.log('se cargo');
  }
}
