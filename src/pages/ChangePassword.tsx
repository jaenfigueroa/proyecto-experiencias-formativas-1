import { Box, Button, InputLabel, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import RegisterLayout from '../layouts/RegisterLayout'
import { useSnackbar } from 'notistack'
import { actualizarContrasena } from '../auth'

const ChangePassword = () => {
  const { enqueueSnackbar } = useSnackbar()

  const [formData, setFormData] = useState({
    newContrasena: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { error } = await actualizarContrasena(formData)

    if (error) {
      enqueueSnackbar('Error al cambiar la contraseña', {
        variant: 'error',
        autoHideDuration: 2000,
      })
    } else {
      enqueueSnackbar('Se actualizó correctamente la contraseña', {
        variant: 'success',
        autoHideDuration: 2000,
      })
    }
  }

  return (
    <RegisterLayout>
      <Typography variant='h3' textAlign={'center'} mb={4}>
        Cambiar contraseña
      </Typography>
      <Box
        display='flex'
        flexDirection='column'
        gap={2}
        component={'form'}
        onSubmit={handleSubmit}
      >
        <InputLabel htmlFor='newContrasena'>
          Ingresa tu nueva contraseña
        </InputLabel>
        <TextField
          name='newContrasena'
          id='newContrasena'
          variant='outlined'
          size='small'
          onChange={handleChange}
          autoComplete='email'
        />
        <Button variant='contained' type='submit'>
          Listo
        </Button>
      </Box>
    </RegisterLayout>
  )
}

export default ChangePassword
