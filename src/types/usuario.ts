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
  // contrasena: string
  created_at: Date
}
