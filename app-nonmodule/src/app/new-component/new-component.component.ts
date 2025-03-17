import { Component } from '@angular/core';

@Component({
  selector: 'app-new-component',
  standalone: true,
  imports: [],
  templateUrl: './new-component.component.html',
  styleUrl: './new-component.component.css',
})
export class NewComponentComponent {
  title = 'New componente';
  usuario = {
    name: 'Juan',
    lastname: 'Gonzales',
    age: 55,
  };
}
