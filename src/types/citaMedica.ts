export interface CitaMedica {
  id: string
  created_at: Date
  paciente_id: string
  doctor_id: string
  sucursal_id: string
  fecha: Date
  especialidad: string
  estado: string
  archivos_adjuntos?: string[]
  tipo: string
}

export type CitaMedicaPayload = Partial<Omit<CitaMedica, 'id' | 'created_at'>>
export type CitaMedicaResponse = CitaMedica
