interface DBService {
  getOne(id: string): Promise<unknown>
  getMany(offset: number, limit: number): Promise<unknown[]>
  createOne(payload: unknown): Promise<unknown>
  deleteOne(id: string): Promise<void>
  updateOne(id: string, payload: unknown): Promise<unknown>
}

export default DBService
