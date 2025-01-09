import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PeopleService } from '../../personaService.service';
import { Person } from '../person/person.module';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent implements OnInit {
  index: number;
  nameUser: string = '';
  lastnameUser: string = '';
  jobUser: string = '';
  modoEdicion: number;

  constructor(
    private peopSer: PeopleService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.peopSer.saludar.subscribe((indice: number) =>
      alert('El indice es: ' + (indice + 1))
    );
  }

  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion'];

    if (this.modoEdicion != null && this.modoEdicion == 1) {
      let person: Person = this.peopSer.findPerson(this.index);
      this.nameUser = person.name;
      this.lastnameUser = person.lastname;
      this.jobUser = person.job;
    }
  }

  onGuardarPersona() {
    if (this.nameUser !== '' && this.lastnameUser !== '') {
      let person1 = new Person(this.nameUser, this.lastnameUser, this.jobUser);
      if (this.modoEdicion != null && this.modoEdicion == 1) {
        this.peopSer.editPErson(this.index, person1);
      } else {
        this.peopSer.addPersonToList(person1);
        alert('Se agrego a: ' + this.nameUser);
      }
      this.nameUser = '';
      this.lastnameUser = '';
      this.jobUser = '';
      this.router.navigate(['personas']);
    }
  }

  deletePerson(arg0: number) {
    if (arg0) {
      this.peopSer.deletePerson(arg0);
      this.router.navigate(['personas']);
    }
  }
}
