import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropiedadesService {
  private data = [
    {
      id_propiedad: 7,
      titulo: "Apartamento luminoso con vistas panorámicas",
      descripcion: "Moderno apartamento con amplios ventanales y vistas panorámicas de la ciudad. Disfruta de la luz natural y la comodidad en este elegante espacio.",
      ubicacion: "Av 10 entre 79 y 77 Nro 1234",
      mts_cuadrados: 300,
      cant_dormitorios: 2,
      cant_banios: 2,
      precio: 300000,
      imagenes: ['assets/img-propiedades/hero-bg-small.jpg', 'assets/img-propiedades/hero-bg-medium.jpg']
    },
    {
      id_propiedad: 9,
      titulo: "Departamento con terraza en la azotea",
      descripcion: "Moderno departamento con una terraza en la azotea que ofrece vistas panorámicas de la ciudad. Disfruta de momentos especiales al aire libre en este espacio único.",
      ubicacion: "Calle 34 entre 91 y 93 Nro 4223",
      mts_cuadrados: 220,
      cant_dormitorios: 3,
      cant_banios: 2,
      precio: 400000,
      imagenes: ['assets/imgs/bg-1.jpg', 'assets/img/hero-bg-big.jpg']
    },
    {
      id_propiedad: 8,
      titulo: "Apartamento luminoso con vistas panorámicas",
      descripcion: "Moderno apartamento con amplios ventanales y vistas panorámicas de la ciudad. Disfruta de la luz natural y la comodidad en este elegante espacio.",
      ubicacion: "Calle 76 entre 55 y 57 Nro 6677",
      mts_cuadrados: 270,
      cant_dormitorios: 2,
      cant_banios: 2,
      precio: 300000,
      imagenes: ['assets/img-propiedades/hero-bg-small.jpg', 'assets/img-propiedades/hero-bg-medium.jpg']
    },
  ]
  constructor() { }

  public getData(): any[]{
    return this.data;
  }
}
