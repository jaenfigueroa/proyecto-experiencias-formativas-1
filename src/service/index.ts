/* eslint-disable */
export interface DB_Table_Service {
  getOne(id: string): Promise<any>
  getAll(): Promise<any[]>
  createOne(payload: any): Promise<any>
  deleteOne(id: string): Promise<void>
  updateOne(id: string, payload: any): Promise<any>
}