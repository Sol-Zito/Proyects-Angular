import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Person } from './person/person.module';
import { PersonComponent } from './person/person.component';
import { NgFor } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { PeopleService } from './personaService.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    PersonComponent,
    NgFor,
    FormularioComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'People List';
  list: Person[] = [];

  constructor(private perSer: PeopleService) {}

  ngOnInit(): void {
    this.list = this.perSer.people;
    throw new Error('Method not implemented.');
  }
}
