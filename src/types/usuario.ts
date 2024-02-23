export interface Usuario {
  id: string
  dni: number
  nombres: string
  apellidos: string
  sexo: string
  nacimiento: Date
  email: string
  telefono: string
  direccion: string
  ubicacion_mapa: [latitud: number, longitud: number]
  created_at: Date
}
