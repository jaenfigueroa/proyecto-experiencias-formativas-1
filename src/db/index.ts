import DoctorService from '../service/doctorService'
import PacienteService from '../service/pacienteService'
import SucursalService from '../service/sucursalService'
import CitaMedicaService from '../service/citaMedica'

const DB = {
  paciente: new PacienteService(),
  doctor: new DoctorService(),
  sucursal: new SucursalService(),
  citaMedica: new CitaMedicaService(),
}

export default DB
