import DBService from '../db/DBService'
import supabase from '../config/supabase'
import { PacientePayload, PacienteResponse } from '../types/paciente'

export default class PacienteService implements DBService {
  async getOne(id: string): Promise<PacienteResponse | null> {
    const { data: pacientes, error } = await supabase
      .from('paciente')
      .select('*')
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

  async getMany(offset: number, limit: number): Promise<PacienteResponse[]> {
    const { data: pacientes, error } = await supabase
      .from('paciente')
      .select('*')
      .range(offset, limit + offset - 1)

    if (error) {
      console.log(error)
    }

    return pacientes as PacienteResponse[]
  }

  async createOne(payload: PacientePayload): Promise<PacienteResponse> {
    const { data: pacientes, error } = await supabase
      .from('paciente')
      .insert([{ ...payload }])
      .select('*')

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
      .select('*')

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
