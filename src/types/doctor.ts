import { Usuario } from './usuario'

export interface Doctor extends Usuario {
  centro_medico: string
  cargo: string
  especialidad: string
  titulo_medico?: string[]
  premios_honores?: string[]
  sociedades?: string[]
}

export type DoctorPayload = Partial<Omit<Doctor, 'id' | 'created_at'>>
export type DoctorResponse = Doctor
