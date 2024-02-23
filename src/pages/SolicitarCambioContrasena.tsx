import { Box, Button, InputLabel, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import RegisterLayout from '../layouts/RegisterLayout'
import { useSnackbar } from 'notistack'
import { solicitarCambioContrasena } from '../auth'

const SolicitarCambioContrasena = () => {
  const { enqueueSnackbar } = useSnackbar()

  const [formData, setFormData] = useState({
    correo: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { error } = await solicitarCambioContrasena(formData)

    if (error) {
      enqueueSnackbar('Error al solicitar cambio de contraseña', {
        variant: 'error',
        autoHideDuration: 2000,
      })
    } else {
      enqueueSnackbar(
        'Te enviamos un correo para que puedas cambiar tu contraseña',
        {
          variant: 'success',
          autoHideDuration: 2000,
        },
      )
    }
  }

  return (
    <RegisterLayout>
      <Typography variant='h2' textAlign={'center'} mb={4}>
        Solicitar cambio de contraseña
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
        <Button variant='contained' type='submit'>
          Enviar correo
        </Button>
      </Box>
    </RegisterLayout>
  )
}

export default SolicitarCambioContrasena
