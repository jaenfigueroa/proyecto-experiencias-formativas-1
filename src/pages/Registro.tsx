import { Box, Button, InputLabel, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { registrarse } from '../auth'
import RegisterLayout from '../layouts/RegisterLayout'
import { useSnackbar } from 'notistack'
import { Link } from 'react-router-dom'

const Registro = () => {
  const { enqueueSnackbar } = useSnackbar()

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
    const { error } = await registrarse(formData)

    if (error) {
      enqueueSnackbar(
        'Ocrrio un error al enviar el correo de verificación, intenta de nuevo.',
        { variant: 'error', autoHideDuration: 2000 },
      )
    } else {
      enqueueSnackbar(
        'Te hemos enviado un enlace de verificación a tu correo electrónico',
        { variant: 'success', autoHideDuration: 2000 },
      )
    }
  }

  return (
    <RegisterLayout>
      <Typography variant='h2' textAlign={'center'} mb={4}>
        Registrate
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
          value={formData.contrasena}
          onChange={handleChange}
          autoComplete='current-password'
        />

        <Button variant='contained' type='submit'>
          Registrate
        </Button>

        <Typography variant='body2' textAlign={'center'}>
          ¿Ya tienes una cuenta? <Link to='/iniciarSesion'>Inicia sesión</Link>
        </Typography>
      </Box>
    </RegisterLayout>
  )
}

export default Registro
