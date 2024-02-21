import DBService from '../db/DBService'
import supabase from '../config/supabase'
import { SucursalPayload, SucursalResponse } from '../types/sucursal'

export default class SucursalService implements DBService {
  async getOne(id: string): Promise<SucursalResponse> {
    const { data: sucursales, error } = await supabase
      .from('sucursal')
      .select('*')
      .eq('id', id)

    if (error) {
      console.log(error)
    }

    if (!sucursales || sucursales.length === 0) {
      throw new Error('No se encontró ningún sucursal con el ID proporcionado')
    }

    const sucursal = sucursales[0] as SucursalResponse
    return sucursal
  }

  async getMany(offset: number, limit: number): Promise<SucursalResponse[]> {
    const { data: sucursals, error } = await supabase
      .from('sucursal')
      .select('*')
      .range(offset, limit + offset - 1)

    if (error) {
      console.log(error)
    }

    return sucursals as SucursalResponse[]
  }

  async createOne(payload: SucursalPayload): Promise<SucursalResponse> {
    const { data: sucursals, error } = await supabase
      .from('sucursal')
      .insert([{ ...payload }])
      .select('*')

    if (error) {
      console.log(error)
    }

    if (!sucursals || sucursals.length === 0) {
      throw new Error('No se encontró ningún sucursal con el ID proporcionado')
    }

    return sucursals[0] as SucursalResponse
  }

  async deleteOne(id: string): Promise<void> {
    const { error } = await supabase.from('sucursal').delete().eq('id', id)

    if (error) {
      console.log(error)
    }
  }

  async updateOne(
    id: string,
    payload: SucursalPayload,
  ): Promise<SucursalResponse> {
    const { data: sucursals, error } = await supabase
      .from('sucursal')
      .update({ ...payload })
      .eq('id', id)
      .select('*')

    if (error) {
      console.log(error)
    }

    if (!sucursals || sucursals.length === 0) {
      throw new Error('No se encontró ningún sucursal con el ID proporcionado')
    }

    const sucursal = sucursals[0] as SucursalResponse
    return sucursal
  }
}
