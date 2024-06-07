import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.page.html',
  styleUrls: ['./consulta.page.scss'],
})
export class ConsultaPage implements OnInit {
  productos: Product[] = []; // Inicializar como un arreglo vacío

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProductos().subscribe(
      (data: Product[]) => {
        if (data) {
          this.productos = data;
        } else {
          console.error('No se pudieron cargar los productos');
        }
      },
      (error) => {
        console.error('Error al cargar los productos:', error);
      }
    );
  }

  editarProducto(producto: Product) {
    // Implementa la lógica para editar el producto
    console.log('Editar producto:', producto);
  }

  eliminarProducto(producto: Product) {
    // Implementa la lógica para eliminar el producto
    console.log('Eliminar producto:', producto);
  }
}

