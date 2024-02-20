import { fakerES as faker } from '@faker-js/faker'
import { cargos, especialidades, estados_cita, tiposCitaMedica } from './others'
import { Paciente } from '../types/paciente'
import { Doctor } from '../types/doctor'
import { Sucursal } from '../types/sucursal'
import { CitaMedica } from '../types/citaMedica'

export const pacienteExample: Omit<Paciente, 'id' | 'created_at'> = {
  dni: faker.number.int({ min: 20000000, max: 90000000 }),
  sexo: faker.person.sex(),
  nombres: faker.person.firstName(),
  apellidos: faker.person.lastName(),
  nacimiento: faker.date.birthdate({ min: 18, max: 65, mode: 'age' }),
  email: faker.internet.email(),
  telefono: faker.phone.number(),
  direccion: faker.location.streetAddress(true),
  // contrasena: faker.internet.password(),
}

export const doctorExample: Omit<Doctor, 'id' | 'created_at'> = {
  ...pacienteExample,
  centro_medico: faker.number.int({ min: 1, max: 2 }).toString(),
  especialidad: faker.helpers.arrayElement(especialidades),
  cargo: faker.helpers.arrayElement(cargos),
  // titulo_medico: string[]
  // premios_honores: string[]
  // sociedades: string[]
}

export const sucursalExample: Omit<Sucursal, 'id' | 'created_at'> = {
  nombre: 'CENTRO MEDICO DE LA COLINA',
  direccion: faker.location.streetAddress(true),
  telefono: faker.phone.number(),
  ubicacion_mapa: faker.location.nearbyGPSCoordinate(),
}

export const citaMedicaExample: Omit<CitaMedica, 'id' | 'created_at'> = {
  paciente: faker.number.int({ min: 1, max: 2 }).toString(),
  doctor: faker.number.int({ min: 1, max: 2 }).toString(),
  fecha: faker.date.birthdate({ min: 2024, max: 2027, mode: 'year' }),
  especialidad: faker.helpers.arrayElement(especialidades),
  estado: faker.helpers.arrayElement(estados_cita),
  sucursal: faker.number.int({ min: 1, max: 2 }).toString(),
  tipo: faker.helpers.arrayElement(tiposCitaMedica),
  // archivos_adjuntos: string[]
}
