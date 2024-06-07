import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  nuevoProducto: Product = new Product(0, 0, '', '', 0, 0, new Date(), ''); // Utiliza el constructor de Product

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  guardarProducto() {
    this.productService.addProduct(this.nuevoProducto);
    // Lógica adicional, como redireccionar a la página de consulta o mostrar un mensaje de éxito
  }
}
