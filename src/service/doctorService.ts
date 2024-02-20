import { DBService } from '.'
import { supabase } from '../config/supabase'
import { DoctorPayload, DoctorResponse } from '../types/doctor'

export const SELECTED_ROWS_DOCTOR =
  'id, nombres, apellidos, dni, direccion, nacimiento, telefono, sexo, email, centro_medico, cargo, especialidad, titulo_medico, premios_honores, sociedades'

export default class DoctorService implements DBService {
  async getOne(id: string): Promise<DoctorResponse> {
    const { data: doctores, error } = await supabase
      .from('doctor')
      .select(SELECTED_ROWS_DOCTOR)
      .eq('id', id)

    if (error) {
      console.log(error)
    }

    if (!doctores || doctores.length === 0) {
      throw new Error('No se encontró ningún doctor con el ID proporcionado')
    }

    const doctor = doctores[0] as DoctorResponse
    return doctor
  }

  async getAll(): Promise<DoctorResponse[]> {
    const { data: doctores, error } = await supabase
      .from('doctor')
      .select(SELECTED_ROWS_DOCTOR)

    if (error) {
      console.log(error)
    }

    return doctores as DoctorResponse[]
  }

  async createOne(payload: DoctorPayload): Promise<DoctorResponse> {
    const { data: doctores, error } = await supabase
      .from('doctor')
      .insert([{ ...payload }])
      .select(SELECTED_ROWS_DOCTOR)

    if (error) {
      console.log(error)
    }

    if (!doctores || doctores.length === 0) {
      throw new Error('No se encontró ningún doctor con el ID proporcionado')
    }

    return doctores[0] as DoctorResponse
  }

  async deleteOne(id: string): Promise<void> {
    const { error } = await supabase.from('doctor').delete().eq('id', id)

    if (error) {
      console.log(error)
    }
  }

  async updateOne(id: string, payload: DoctorPayload): Promise<DoctorResponse> {
    const { data: doctores, error } = await supabase
      .from('doctor')
      .update({ ...payload })
      .eq('id', id)
      .select(SELECTED_ROWS_DOCTOR)

    if (error) {
      console.log(error)
    }

    if (!doctores || doctores.length === 0) {
      throw new Error('No se encontró ningún doctor con el ID proporcionado')
    }

    const doctor = doctores[0] as DoctorResponse
    return doctor
  }
}
