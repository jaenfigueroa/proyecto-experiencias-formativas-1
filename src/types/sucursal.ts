export interface Sucursal {
  id: string
  nombre: string
  direccion: string
  telefono: string
  ubicacion_mapa: [latitude: number, longitude: number]
  created_at: Date
}

export type SucursalPayload = Partial<Omit<Sucursal, 'id' | 'created_at'>>
export type SucursalResponse = Sucursal
