import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  welcomeMessage = '¡Bienvenido a nuestra aplicación!';

  constructor() { }

  ngOnInit() {
  }

  registrar() {
    // Aquí puedes agregar la lógica para registrar el producto
    console.log('Se ha hecho clic en el botón de registro');
    // Por ahora solo imprimirá un mensaje en la consola, pero aquí puedes agregar la lógica necesaria para registrar el producto.
  }

}
