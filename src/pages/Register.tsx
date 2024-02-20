import { Button, Input, Select, Typography } from '@mui/material'
import RegisterLayout from '../layouts/RegisterLayout'

const Register = () => {
  return (
    <RegisterLayout>
      <Input placeholder='Numero de DNI' />
      <Input placeholder='Nombres' />
      <Input placeholder='Apellido paterno' />
      <Input placeholder='Apellido materno' />
      <Select placeholder='Selecciona tu sexo' />
      <Input placeholder='Contraseña' />
      <Typography>Fecha de nacimiento</Typography>
      <Input placeholder='Dia' />
      <Select placeholder='Mes' />
      <Input placeholder='Año' />
      <Input placeholder='Correo electronico' />
      <Input placeholder='Celular' />
      <Input placeholder='Dirección de domicilio' />
      <Button variant='contained'>Registrar</Button>
      <Typography>¿Ya tienes una cuenta? Inicia sesión</Typography>
    </RegisterLayout>
  )
}

export default Register
