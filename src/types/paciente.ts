import { Usuario } from './usuario'

export interface Paciente extends Usuario {}

export type PacientePayload = Partial<Omit<Paciente, 'id' | 'created_at'>>
export type PacienteResponse = Paciente
