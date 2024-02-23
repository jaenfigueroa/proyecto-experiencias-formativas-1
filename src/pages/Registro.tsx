import { Box, Button, InputLabel, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { registrarse } from '../auth'
import RegisterLayout from '../layouts/RegisterLayout'
import { useSnackbar } from 'notistack'

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
    console.log(formData)
    const { data, error } = await registrarse(formData)
    console.log(data)

    if (error) {
      enqueueSnackbar(
        'Ocrrio un error al enviar el correo de verificación, intenta de nuevo.',
        { variant: 'error', autoHideDuration: 3000 },
      )
    } else {
      enqueueSnackbar(
        'Te hemos enviado un enlace de verificación a tu correo electrónico',
        { variant: 'success', autoHideDuration: 3000 },
      )
    }
  }

  return (
    <RegisterLayout>
      <Typography variant='h1' textAlign={'center'}>
        Registrate
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
          Registrate
        </Button>
      </Box>
    </RegisterLayout>
  )
}

export default Registro
