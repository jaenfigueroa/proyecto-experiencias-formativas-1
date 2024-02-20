import DoctorService from '../service/doctorService'
import PacienteService from '../service/pacienteService'
import SucursalService from '../service/sucursalService'
import CitaMedicaService from '../service/citaMedica'
import { DBService } from '../service'

class DBManager {
  private static instance: DBManager
  paciente: DBService
  doctor: DBService
  sucursal: DBService
  citaMedica: DBService

  private constructor() {
    this.paciente = new PacienteService()
    this.doctor = new DoctorService()
    this.sucursal = new SucursalService()
    this.citaMedica = new CitaMedicaService()
  }

  static getInstance(): DBManager {
    if (!DBManager.instance) {
      DBManager.instance = new DBManager()
    }
    return DBManager.instance
  }
}

export default DBManager.getInstance()

// Ejemplo de Uso
// DBManager.doctor.getOne('1')
