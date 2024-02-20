export interface CitaMedica {
  id: string
  paciente: string
  doctor: string
  fecha: Date
  especialidad: string
  estado: string
  sucursal: string
  archivos_adjuntos?: string[]
  created_at: Date
}

export type CitaMedicaPayload = Partial<Omit<CitaMedica, 'id' | 'created_at'>>
export type CitaMedicaResponse = CitaMedica
