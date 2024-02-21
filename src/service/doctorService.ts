import DBService from '../db/DBService'
import supabase from '../config/supabase'
import { DoctorPayload, DoctorResponse } from '../types/doctor'

export default class DoctorService implements DBService {
  async getOne(id: string): Promise<DoctorResponse> {
    const { data: doctores, error } = await supabase
      .from('doctor')
      .select('*')
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

  async getMany(offset: number, limit: number): Promise<DoctorResponse[]> {
    const { data: doctores, error } = await supabase
      .from('doctor')
      .select('*')
      .range(offset, limit + offset - 1)

    if (error) {
      console.log(error)
    }

    return doctores as DoctorResponse[]
  }

  async createOne(payload: DoctorPayload): Promise<DoctorResponse> {
    const { data: doctores, error } = await supabase
      .from('doctor')
      .insert([{ ...payload }])
      .select('*')

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
      .select('*')

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
