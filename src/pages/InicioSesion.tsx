import { Box, Button, InputLabel, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { iniciarSesion } from '../auth'
import RegisterLayout from '../layouts/RegisterLayout'
import { useSnackbar } from 'notistack'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/useAuth'

const InicioSesion = () => {
  const { enqueueSnackbar } = useSnackbar()
  const { setUser } = useAuth()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    correo: '',
    contrasena: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { error } = await iniciarSesion(formData)

    if (error) {
      enqueueSnackbar('Error al iniciar sesión', {
        variant: 'error',
        autoHideDuration: 2000,
      })
    } else {
      setUser(true)
      navigate('/')
      enqueueSnackbar('Inicio de sesión exitoso', {
        variant: 'success',
        autoHideDuration: 2000,
      })
    }
  }

  return (
    <RegisterLayout>
      <Typography variant='h2' textAlign={'center'} mb={4}>
        Iniciar sesión
      </Typography>
      <Box
        display='flex'
        flexDirection='column'
        gap={2}
        component={'form'}
        onSubmit={handleSubmit}
      >
        <InputLabel htmlFor='correo'>Correo electrónico</InputLabel>
        <TextField
          name='correo'
          id='correo'
          variant='outlined'
          size='small'
          value={formData.correo}
          onChange={handleChange}
          autoComplete='email'
        />
        <InputLabel htmlFor='contrasena'>Contraseña</InputLabel>
        <TextField
          name='contrasena'
          id='contrasena'
          variant='outlined'
          size='small'
          type='password'
          onChange={handleChange}
          autoComplete='current-password'
        />

        <Typography variant='body2'>
          <Link to='/solicitarCambioContrasena'>
            Solicitar cambiar de contraseña
          </Link>
        </Typography>

        <Button variant='contained' type='submit'>
          Iniciar sesión
        </Button>

        <Typography variant='body2' textAlign={'center'}>
          ¿Aún no tienes una cuenta? <Link to='/registrate'>Registrate</Link>
        </Typography>
      </Box>
    </RegisterLayout>
  )
}

export default InicioSesion
