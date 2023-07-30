export default interface Propiedad {
  id_propiedad: number,
  titulo: string,
  descripcion: string,
  ubicacion: string,
  mts_cuadrados: number,
  cant_dormitorios?: number,
  cant_banios?: number,
  precio: number,
  cochera?: number,
  imagenes: string[]
}