import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { PeopleComponent } from './people/people.component';
import { PeopleService } from './personaService.service';
import { Person } from './people/person/person.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, PeopleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [PeopleService],
})
export class AppComponent implements OnInit {
  title = 'People List';
  lista: Person[] = [];
  constructor(private personas: PeopleService) {}

  ngOnInit(): void {
    this.lista = this.personas.people;
  }
}
