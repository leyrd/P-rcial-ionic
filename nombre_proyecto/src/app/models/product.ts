export class Product {
    id: number; // Agrega la propiedad id
  
    presupuesto: number;
    unidad: string;
    descripcion: string;
    cantidad: number;
    valorUnitario: number;
    fechaAdquisicion: Date;
    proveedor: string;
  
    constructor(
      id: number, // Añade id al constructor
      presupuesto: number,
      unidad: string,
      descripcion: string,
      cantidad: number,
      valorUnitario: number,
      fechaAdquisicion: Date,
      proveedor: string
    ) {
      this.id = id; // Asigna el valor de id
      this.presupuesto = presupuesto;
      this.unidad = unidad;
      this.descripcion = descripcion;
      this.cantidad = cantidad;
      this.valorUnitario = valorUnitario;
      this.fechaAdquisicion = fechaAdquisicion;
      this.proveedor = proveedor;
    }
  }
  