import { Box, Button, InputLabel, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { iniciarSesion } from '../auth'
import RegisterLayout from '../layouts/RegisterLayout'
import { useSnackbar } from 'notistack'

const InicioSesion = () => {
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

    const { error } = await iniciarSesion(formData)

    if (error) {
      enqueueSnackbar('Error al iniciar sesión', {
        variant: 'error',
        autoHideDuration: 3000,
      })
    } else {
      enqueueSnackbar('Inicio de sesión exitoso', {
        variant: 'success',
        autoHideDuration: 3000,
      })
    }
  }

  return (
    <RegisterLayout>
      <Typography variant='h1' textAlign={'center'}>
        Inicia sesión
      </Typography>
      <Box
        display='flex'
        flexDirection='column'
        gap={2}
        p={4}
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
          Iniciar sesión
        </Button>
      </Box>
    </RegisterLayout>
  )
}

export default InicioSesion
