import { Component } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { Producto } from './products/product.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [ProductsComponent, FormsModule],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css',
})
export class ListProductsComponent {
  agregarProducto() {
    if (
      this.descripcionInput.trim() === '' ||
      this.precioInput == null ||
      this.precioInput <= 0
    ) {
      console.log('Debe ingresar valores validos.');
      return;
    }
    // Se agrega producto al []
    const product = new Producto(this.descripcionInput, this.precioInput);
    this.productos.push(product);
    // Se limpian valores
    this.descripcionInput = '';
    this.precioInput = 0;
  }

  productos: Producto[] = [
    new Producto('Pantalon', 30),
    new Producto('Remera', 5),
    new Producto('Bermuda', 80),
  ];

  descripcionInput: string = '';
  precioInput: number = 0;
}
