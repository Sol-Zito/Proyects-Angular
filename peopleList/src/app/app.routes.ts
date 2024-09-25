import { Routes } from '@angular/router';
import { PeopleComponent } from './people/people.component';
import { FormularioComponent } from './people/formulario/formulario.component';

export const routes: Routes = [
  { path: '', component: PeopleComponent },
  { path: 'personas', component: PeopleComponent },
  { path: 'personas/agregar', component: FormularioComponent },
  { path: 'personas/:id', component: FormularioComponent },
];
