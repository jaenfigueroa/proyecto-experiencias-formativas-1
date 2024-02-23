import { Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { cerrarSesion } from '../auth'
import { useSnackbar } from 'notistack'

const Header = () => {
  const { enqueueSnackbar } = useSnackbar()

  const onLogOut = async () => {
    const { error } = await cerrarSesion()

    if (!error) {
      enqueueSnackbar('Se cerró sesión correctamente', {
        variant: 'success',
        autoHideDuration: 3000,
      })
    }
  }

  return (
    <Box display='flex' gap={1} p={1}>
      <Link to='/registrate'>
        <Button variant='outlined'>Registrate</Button>
      </Link>
      <Link to='/iniciarSesion'>
        <Button variant='outlined'>Inicia sesión</Button>
      </Link>
      <Button variant='outlined' onClick={onLogOut}>
        Cerrar sesión
      </Button>
    </Box>
  )
}

export default Header
