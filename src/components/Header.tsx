import { Box, Button, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { cerrarSesion } from '../auth'
import { useSnackbar } from 'notistack'
import { useAuth } from '../auth/useAuth'

const Header = () => {
  const { enqueueSnackbar } = useSnackbar()
  const { setUser } = useAuth()
  const navigate = useNavigate()

  const onLogOut = async () => {
    const { error } = await cerrarSesion()

    if (!error) {
      setUser(false)
      navigate('/')
      enqueueSnackbar('Se cerró sesión correctamente', {
        variant: 'success',
        autoHideDuration: 3000,
      })
    }
  }

  const { user } = useAuth()

  return (
    <Box display='flex' gap={1} p={1}>
      <Link to='/'>
        <Typography variant='h6'>HaiDoc</Typography>
      </Link>

      {user ? (
        <Button variant='outlined' onClick={onLogOut}>
          Cerrar sesión
        </Button>
      ) : (
        <>
          <Link to='/iniciarSesion'>
            <Button variant='outlined'>Iniciar sesión</Button>
          </Link>
          <Link to='/registrate'>
            <Button variant='outlined'>Registrate</Button>
          </Link>
        </>
      )}
    </Box>
  )
}

export default Header
