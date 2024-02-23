import { Box, Button, Paper } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { cerrarSesion } from '../auth'
import { useSnackbar } from 'notistack'
import { useAuth } from '../auth/useAuth'
import logo from '/logo-small.png'

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
        autoHideDuration: 2000,
      })
    }
  }
  const { user } = useAuth()

  return (
    <Paper elevation={1} style={{ zIndex: 2 }}>
      <Box display='flex' gap={1} p={2} justifyContent={'space-between'}>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <img
            src={logo}
            alt='logo de centro médico'
            style={{ width: '100px' }}
          />
        </Link>

        <Box display='flex' gap={2}>
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
      </Box>
    </Paper>
  )
}

export default Header
