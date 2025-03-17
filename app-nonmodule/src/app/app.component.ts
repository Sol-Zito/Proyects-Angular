import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponentComponent } from './new-component/new-component.component';
import { DirectivaIfComponent } from './directiva-if/directiva-if.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { PadreComponent } from './padre/padre.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NewComponentComponent,
    DirectivaIfComponent,
    ListProductsComponent,
    PadreComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  titleApp = 'app-nonmodule';
}
