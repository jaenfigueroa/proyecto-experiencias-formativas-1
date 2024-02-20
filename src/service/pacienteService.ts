import { DB_Table_Service } from '.'
import { supabase } from '../config/supabase'
import { PacientePayload, PacienteResponse } from '../types/paciente'

export const SELECTED_ROWS_PACIENT =
  'id, nombres, apellidos, dni, direccion, nacimiento, telefono, sexo, email'

export default class PacienteService implements DB_Table_Service {
  async getOne(id: string): Promise<PacienteResponse | null> {
    const { data: pacientes, error } = await supabase
      .from('paciente')
      .select(SELECTED_ROWS_PACIENT)
      .eq('id', id)

    if (error) {
      console.log(error)
    }

    if (!pacientes || pacientes.length === 0) {
      throw new Error('No se encontró ningún paciente con el ID proporcionado')
    }

    const paciente = pacientes[0] as PacienteResponse
    return paciente
  }

  async getAll(): Promise<PacienteResponse[]> {
    const { data: pacientes, error } = await supabase
      .from('paciente')
      .select(SELECTED_ROWS_PACIENT)

    if (error) {
      console.log(error)
    }

    return pacientes as PacienteResponse[]
  }

  async createOne(payload: PacientePayload): Promise<PacienteResponse> {
    const { data: pacientes, error } = await supabase
      .from('paciente')
      .insert([{ ...payload }])
      .select(SELECTED_ROWS_PACIENT)

    if (error) {
      console.log(error)
    }

    if (!pacientes || pacientes.length === 0) {
      throw new Error('No se encontró ningún paciente con el ID proporcionado')
    }

    return pacientes[0] as PacienteResponse
  }

  async deleteOne(id: string): Promise<void> {
    const { error } = await supabase.from('paciente').delete().eq('id', id)

    if (error) {
      console.log(error)
    }
  }

  async updateOne(
    id: string,
    payload: PacientePayload,
  ): Promise<PacienteResponse> {
    const { data: pacientes, error } = await supabase
      .from('paciente')
      .update({ ...payload })
      .eq('id', id)
      .select(SELECTED_ROWS_PACIENT)

    if (error) {
      console.log(error)
    }

    if (!pacientes || pacientes.length === 0) {
      throw new Error('No se encontró ningún paciente con el ID proporcionado')
    }

    const paciente = pacientes[0] as PacienteResponse
    return paciente
  }
}
