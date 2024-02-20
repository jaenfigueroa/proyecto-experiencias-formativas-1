import { Usuario } from './usuario'

export interface Paciente extends Usuario {}

export type PacientePayload = Partial<Omit<Paciente, 'id' | 'created_at'>>
export type PacienteResponse = Pick<
  Paciente,
  | 'id'
  | 'nombres'
  | 'apellidos'
  | 'dni'
  | 'direccion'
  | 'nacimiento'
  | 'telefono'
  | 'sexo'
  | 'email'
>
