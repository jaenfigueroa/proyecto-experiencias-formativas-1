import { Button, Input, Typography } from '@mui/material'
import RegisterLayout from '../layouts/RegisterLayout'

const Login = () => {
  return (
    <RegisterLayout>
      <Input placeholder='DNI' />
      <Input placeholder='Contraseña' />
      <Button variant='contained'>Iniciar sesión</Button>
      <Typography>¿No tienes una cuenta? Registrate</Typography>
    </RegisterLayout>
  )
}

export default Login
