import { DB_Table_Service } from '.'
import { supabase } from '../config/supabase'
import { CitaMedicaPayload, CitaMedicaResponse } from '../types/citaMedica'

export default class CitaMedicaService implements DB_Table_Service {
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

  async getAll(): Promise<CitaMedicaResponse[]> {
    const { data: citasMedicas, error } = await supabase
      .from('cita_medica')
      .select('*')

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
