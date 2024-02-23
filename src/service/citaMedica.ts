import supabase from '../config/supabase'
import DBService from '../db/DBService'
import { CitaMedicaPayload, CitaMedicaResponse } from '../types/citaMedica'

export default class CitaMedicaService implements DBService {
  async getOne(id: string): Promise<CitaMedicaResponse> {
    const { data: citasMedicas, error } = await supabase
      .from('cita_medica')
      .select('*')
      .eq('id', id)

    if (error) {
      console.log(error)
    }

    if (!citasMedicas || citasMedicas.length === 0) {
      throw new Error(
        'No se encontró ningúna cita medica con el ID proporcionado',
      )
    }

    const citaMedica = citasMedicas[0] as CitaMedicaResponse
    return citaMedica
  }

  async getMany(
    offset: number = 0,
    limit: number = 0,
  ): Promise<CitaMedicaResponse[]> {
    const { data: citasMedicas, error } = await supabase
      .from('cita_medica')
      .select('*')
      .range(offset, limit + offset - 1)

    if (error) {
      console.log(error)
    }

    return citasMedicas as CitaMedicaResponse[]
  }

  async createOne(payload: CitaMedicaPayload): Promise<CitaMedicaResponse> {
    const { data: citasMedicas, error } = await supabase
      .from('cita_medica')
      .insert([{ ...payload }])
      .select('*')

    if (error) {
      console.log(error)
    }

    if (!citasMedicas || citasMedicas.length === 0) {
      throw new Error(
        'No se encontró ningúna cita medica con el ID proporcionado',
      )
    }

    return citasMedicas[0] as CitaMedicaResponse
  }

  async deleteOne(id: string): Promise<void> {
    const { error } = await supabase.from('cita_medica').delete().eq('id', id)

    if (error) {
      console.log(error)
    }
  }

  async updateOne(
    id: string,
    payload: CitaMedicaPayload,
  ): Promise<CitaMedicaResponse> {
    const { data: citasMedicas, error } = await supabase
      .from('cita_medica')
      .update({ ...payload })
      .eq('id', id)
      .select('*')

    if (error) {
      console.log(error)
    }

    if (!citasMedicas || citasMedicas.length === 0) {
      throw new Error(
        'No se encontró ningúna cita medica con el ID proporcionado',
      )
    }

    const citaMedica = citasMedicas[0] as CitaMedicaResponse
    return citaMedica
  }
}
