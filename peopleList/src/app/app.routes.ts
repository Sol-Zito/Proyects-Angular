import { Routes } from '@angular/router';
import { PeopleComponent } from './people/people.component';
import { FormularioComponent } from './people/formulario/formulario.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
  { path: '', component: PeopleComponent },
  {
    path: 'personas',
    component: PeopleComponent,
    children: [
      { path: 'agregar', component: FormularioComponent },
      { path: ':id', component: FormularioComponent },
    ],
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];
