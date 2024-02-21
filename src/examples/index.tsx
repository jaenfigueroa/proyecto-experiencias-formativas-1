import { fakerES as faker } from '@faker-js/faker'
import { cargos, especialidades, estados_cita, tiposCitaMedica } from './others'
import { Paciente } from '../types/paciente'
import { Doctor } from '../types/doctor'
import { Sucursal } from '../types/sucursal'
import { CitaMedica } from '../types/citaMedica'

type Template<T> = Omit<T, 'id' | 'created_at'>

const sex = faker.person.sex() as 'male' | 'female'
const nombres = faker.person.firstName(sex)
const apellidos = faker.person.lastName()
const email = faker.internet.exampleEmail({
  firstName: nombres,
  lastName: apellidos,
})

export const pacienteExample: Template<Paciente> = {
  dni: faker.number.int({ min: 20000000, max: 90000000 }),
  sexo: sex,
  nombres: nombres,
  apellidos: apellidos,
  nacimiento: faker.date.birthdate({ min: 18, max: 65, mode: 'age' }),
  email: email,
  telefono: faker.phone.number(),
  direccion: faker.location.streetAddress(true),
  ubicacion_mapa: faker.location.nearbyGPSCoordinate(),
}

export const doctorExample: Template<Doctor> = {
  ...pacienteExample,
  centro_medico: faker.number.int({ min: 1, max: 2 }).toString(),
  especialidad: faker.helpers.arrayElement(especialidades),
  cargo: faker.helpers.arrayElement(cargos),
  // titulo_medico: string[]
  // premios_honores: string[]
  // sociedades: string[]
}

export const sucursalExample: Template<Sucursal> = {
  nombre: 'CENTRO MEDICO DE LA COLINA',
  direccion: faker.location.streetAddress(true),
  telefono: faker.phone.number(),
  ubicacion_mapa: faker.location.nearbyGPSCoordinate(),
}

export const citaMedicaExample: Template<CitaMedica> = {
  paciente: faker.number.int({ min: 1, max: 2 }).toString(),
  doctor: faker.number.int({ min: 1, max: 2 }).toString(),
  fecha: faker.date.birthdate({ min: 2024, max: 2027, mode: 'year' }),
  especialidad: faker.helpers.arrayElement(especialidades),
  estado: faker.helpers.arrayElement(estados_cita),
  sucursal: faker.number.int({ min: 1, max: 2 }).toString(),
  tipo: faker.helpers.arrayElement(tiposCitaMedica),
  // archivos_adjuntos: string[]
}
