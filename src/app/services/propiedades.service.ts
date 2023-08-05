import { Injectable } from '@angular/core';
import Propiedad from '../interfaces/propiedad';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropiedadesService {
  private data = [
    {
      id_propiedad: 1,
      titulo: "PH a la calle",
      descripcion: "Ph de 2 dormitorios con placares, baño, cosina-comedor y cuenta con un patio con parrilla. Los servicios son luz, gas envasado, agua corriente y cloaca.",
      ubicacion: "Calle 85, entre Av 10 y 22",
      ubicacion_maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3119.076305538455!2d-58.73854781658568!3d-38.57809060536324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x958f9801b0ae7097%3A0xd4e3b6a1a224f97b!2sC.%2085%20756%2C%20B7632GWM%20Necochea%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1691199483321!5m2!1ses!2sar",
      mts_cuadrados: 300,
      cant_dormitorios: 2,
      cant_banios: 1,
      imagenes: [
        'assets/img-propiedades/1_calle_83_entre_10_y_22/presentacion.jpg', 
        'assets/img-propiedades/1_calle_83_entre_10_y_22/pasillo.jpg',
        'assets/img-propiedades/1_calle_83_entre_10_y_22/living_v1.jpg',
        'assets/img-propiedades/1_calle_83_entre_10_y_22/living_v2.jpg',
        'assets/img-propiedades/1_calle_83_entre_10_y_22/dormitorio_1.jpg',
        'assets/img-propiedades/1_calle_83_entre_10_y_22/dormitorio_2.jpg',
        'assets/img-propiedades/1_calle_83_entre_10_y_22/placard.jpg',
        'assets/img-propiedades/1_calle_83_entre_10_y_22/banio.jpg',
        'assets/img-propiedades/1_calle_83_entre_10_y_22/patio.jpg',
        'assets/img-propiedades/1_calle_83_entre_10_y_22/parrilla.jpg'
      ]
    },
    {
      id_propiedad: 2,
      titulo: "Depto interno a media cuadra del mar",
      descripcion: "Depto de un dormitorio con placard, baño, cocina-lavadero y living-comedor. Cuenta con todos los servicios.",
      ubicacion: "Calle 83, entre 2 y 4",
      ubicacion_maps: "",
      mts_cuadrados: 220,
      cant_dormitorios: 1,
      cant_banios: 1,
      precio_dolares: 38000,
      imagenes: [
        'assets/img-propiedades/2_calle_83_entre_2_y_4/1.jpg', 
        // 'assets/img-propiedades/2_calle_83_entre_2_y_4/2.jpg', 
        'assets/img-propiedades/2_calle_83_entre_2_y_4/3.jpg', 
        // 'assets/img-propiedades/2_calle_83_entre_2_y_4/4.jpg', 
        // 'assets/img-propiedades/2_calle_83_entre_2_y_4/5.jpg', 
        // 'assets/img-propiedades/2_calle_83_entre_2_y_4/6.jpg', 
        'assets/img-propiedades/2_calle_83_entre_2_y_4/7.jpg', 
        'assets/img-propiedades/2_calle_83_entre_2_y_4/8.jpg', 
        // 'assets/img-propiedades/2_calle_83_entre_2_y_4/9.jpg', 
        'assets/img-propiedades/2_calle_83_entre_2_y_4/10.jpg', 
        // 'assets/img-propiedades/2_calle_83_entre_2_y_4/11.jpg', 
        // 'assets/img-propiedades/2_calle_83_entre_2_y_4/12.jpg', 
        'assets/img-propiedades/2_calle_83_entre_2_y_4/13.jpg', 
        'assets/img-propiedades/2_calle_83_entre_2_y_4/14.jpg', 
      ]
    },
    {
      id_propiedad: 3,
      titulo: "Depto planta baja a la calle",
      descripcion: "Depto de un dormitorio, baño, living-comedor, cocina y pequeño patio. Cuenta con todos los servicios.",
      ubicacion: "Calle 87 entre 22 y 24",
      ubicacion_maps: "",
      mts_cuadrados: 270,
      cant_dormitorios: 1,
      cant_banios: 1,
      precio_dolares: 40000,
      imagenes: [
        'assets/img-propiedades/3_calle_87_entre_22_y_24/frente.jpg',
      ]
    },
    {
      id_propiedad: 4,
      titulo: "Lote de terreno",
      descripcion: "Se vende lote de terreno de 10 metros de frente por 50 de fondo",
      ubicacion: "Calle 109 entre 48 y 50",
      ubicacion_maps: "",
      mts_cuadrados: 500,
      precio_dolares: 25000,
      imagenes: [
        'assets/img-propiedades/terrenos/4_calle_109_entre_48_y_50.jpg',
      ]
    },
    {
      id_propiedad: 5,
      titulo: "Lote de terreno",
      descripcion: "Se vende lote de terreno de 10 metros de frente por 40 de fondo",
      ubicacion: "Calle 48 entre 91 y 93",
      ubicacion_maps: "",
      mts_cuadrados: 400,
      precio_dolares: 15000,
      imagenes: [
        'assets/img-propiedades/terrenos/5_terreno_1.jpg',
      ]
    },
    {
      id_propiedad: 6,
      titulo: "Lote de terreno",
      descripcion: "Se vende lote de terreno de 12 metros de frente por 20 de fondo. Cuenta con los servicios de luz, red de gas y agua corriente.",
      ubicacion: "Calle 40 entre 105 y 107",
      ubicacion_maps: "",
      mts_cuadrados: 240,
      imagenes: [
        'assets/img-propiedades/terrenos/6_terreno_2.jpg',
      ]
    },
    {
      id_propiedad: 7,
      titulo: "Lote de terreno",
      descripcion: "Se vende lote de terreno de 16.5 metros de frente por 25 de fondo.",
      ubicacion: "Calle 44 entre 105 y 107",
      ubicacion_maps: "",
      mts_cuadrados: 412.5,
      imagenes: [
        'assets/img-propiedades/terrenos/7_terreno_4.jpg',
      ]
    },
    {
      id_propiedad: 8,
      titulo: "Lote de terreno",
      descripcion: "Se vende lote de terreno de 17.5 metros de frente por 20 de fondo.",
      ubicacion: "Calle 36 entre 119 y 121",
      ubicacion_maps: "",
      mts_cuadrados: 350,
      imagenes: [
        'assets/img-propiedades/terrenos/8_terreno.jpg',
      ]
    },
    {
      id_propiedad: 9,
      titulo: "Lote de terreno",
      descripcion: "Se vende lote de terreno de 10 metros de frente por 20 de fondo.",
      ubicacion: "Calle 34 entre 79 y 81",
      ubicacion_maps: "",
      mts_cuadrados: 200,
      imagenes: [
        'assets/img-propiedades/terrenos/9_terreno.jpg',
      ]
    },
    {
      id_propiedad: 10,
      titulo: "3 lotes de terreno",
      descripcion: "Se venden 3 lotes juntos de 10 mts por 20mts cada uno.",
      ubicacion: "Calle 113 esquina 48",
      ubicacion_maps: "",
      mts_cuadrados: 600,
      precio_dolares: 35000,
      imagenes: [
        'assets/img-propiedades/terrenos/10_terreno.jpg',
      ]
    },
  ]
  constructor() { }

  public getData(): Observable<Propiedad[]>{
    return new Observable<Propiedad[]>(observer => {
      observer.next(this.data);
    });
  }

  public getProperty(id: string): Propiedad | undefined {
    return this.data.find(prop => String(prop.id_propiedad) == id);
  }

  public existsProperty(id: string): boolean {
    let res = this.data.find(prop => String(prop.id_propiedad) == id);
    return (res) ? true : false;
  }
}
