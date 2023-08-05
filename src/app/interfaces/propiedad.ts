import { SafeResourceUrl } from "@angular/platform-browser";

export default interface Propiedad {
  id_propiedad: number,
  titulo: string,
  descripcion: string,
  ubicacion: string,
  ubicacion_maps: string,
  mts_cuadrados: number,
  cant_dormitorios?: number,
  cant_banios?: number,
  precio_dolares?: number,
  precio_pesos?: number,
  cochera?: number,
  imagenes: string[]
}