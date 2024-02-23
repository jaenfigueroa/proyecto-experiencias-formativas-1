import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { RegisterFormData, registrarse } from '../auth'
import { useSnackbar } from 'notistack'
import { Link } from 'react-router-dom'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon'
import RegisterLayout from '../layouts/RegisterLayout'

const Registro = () => {
  const { enqueueSnackbar } = useSnackbar()

  const [formData, setFormData] = useState<RegisterFormData>({
    correo: '',
    contrasena: '',
    dni: '',
    nombres: '',
    apellidos: '',
    sexo: '',
    fechaNacimiento: '',
    telefono: '',
    direccion: '',
  })

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const selectChange = (e: SelectChangeEvent) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dateChange = (e: any) => {
    const date = `${e.c.year}-${e.c.month}-${e.c.day}`

    setFormData({
      ...formData,
      ['fechaNacimiento']: date,
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
      <Typography variant='h3' textAlign={'center'} mb={4}>
        Registrate
      </Typography>
      <Box
        display='flex'
        flexDirection='column'
        gap={2}
        component={'form'}
        onSubmit={handleSubmit}
      >
        <InputLabel htmlFor='nombres'>Nombres</InputLabel>
        <TextField
          name='nombres'
          id='nombres'
          variant='outlined'
          size='small'
          onChange={inputChange}
          autoComplete='nombres'
        />
        <InputLabel htmlFor='apellidos'>Apellidos</InputLabel>
        <TextField
          name='apellidos'
          id='apellidos'
          variant='outlined'
          size='small'
          onChange={inputChange}
          autoComplete='apellidos'
        />

        <InputLabel htmlFor='dni'>DNI</InputLabel>
        <TextField
          name='dni'
          id='dni'
          variant='outlined'
          size='small'
          value={formData.dni}
          onChange={inputChange}
          autoComplete='dni'
        />

        <InputLabel htmlFor='sexo'>Sexo</InputLabel>
        <Select
          labelId='sexo'
          id='demo-select-small'
          value={formData.sexo}
          onChange={selectChange}
          size='small'
          autoComplete='sexo'
          name='sexo'
        >
          <MenuItem value=''>Ninguno</MenuItem>
          <MenuItem value={'male'}>Masculino</MenuItem>
          <MenuItem value={'female'}>Femenino</MenuItem>
        </Select>

        <InputLabel htmlFor='telefono'>Fecha de nacimiento</InputLabel>
        <LocalizationProvider dateAdapter={AdapterLuxon}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker onChange={dateChange} />
          </DemoContainer>
        </LocalizationProvider>
        <InputLabel htmlFor='direccion'>Dirección</InputLabel>
        <TextField
          name='direccion'
          id='direccion'
          variant='outlined'
          size='small'
          onChange={inputChange}
          autoComplete='direccion'
        />
        <InputLabel htmlFor='correo'>Correo electrónico</InputLabel>
        <TextField
          name='correo'
          id='correo'
          variant='outlined'
          size='small'
          value={formData.correo}
          onChange={inputChange}
          autoComplete='email'
        />
        <InputLabel htmlFor='telefono'>Telefono</InputLabel>
        <TextField
          name='telefono'
          id='telefono'
          variant='outlined'
          size='small'
          onChange={inputChange}
          autoComplete='telefono'
          style={{ width: '100%' }}
        />
        <InputLabel htmlFor='contrasena'>Contraseña</InputLabel>
        <TextField
          name='contrasena'
          id='contrasena'
          variant='outlined'
          size='small'
          type='password'
          value={formData.contrasena}
          onChange={inputChange}
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
