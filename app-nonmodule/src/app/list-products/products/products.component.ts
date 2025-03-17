import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  productos: PropProduct[] = [
    { nombre: 'pera', precio: 40 },
    { nombre: 'manzana', precio: 60 },
    { nombre: 'limon', precio: 80 },
  ];

  agregarProducto(descrip: string, precio: number) {
    const product: PropProduct = { nombre: descrip, precio: precio };
    this.productos.push(product);
  }
}

type PropProduct = { nombre: string; precio: number };
