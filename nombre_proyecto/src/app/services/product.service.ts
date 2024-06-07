import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs'; // Importa 'of' desde 'rxjs'
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productos: Product[] = []; // Inicializar como un array vacío

  constructor(private http: HttpClient) { }

  addProduct(producto: Product) {
    this.productos.push(producto); // Añadir el producto al array productos
    // Lógica adicional, como guardar en una base de datos o enviar al servidor
  }

  eliminarProducto(producto: Product): Observable<any> {
    // Implementa aquí la lógica para eliminar el producto
    // Por ejemplo, podrías enviar una solicitud DELETE al servidor
    return this.http.delete<any>(`URL_del_servidor/${producto.id}`);
  }

  getProductos(): Observable<Product[]> {
    // Aquí puedes realizar una solicitud HTTP para obtener los productos del servidor
    // Por ahora, devolveremos un array vacío como placeholder
    return of(this.productos);
  }
}
