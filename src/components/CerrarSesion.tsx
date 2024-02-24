import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  ListItemIcon,
  MenuItem,
} from '@mui/material'
import { useSnackbar } from 'notistack'
import { useAuth } from '../auth/useAuth'
import { useNavigate } from 'react-router-dom'
import { cerrarSesion } from '../auth'
import Logout from '@mui/icons-material/Logout'
import { useState } from 'react'

const CerrarSesion = () => {
  const { enqueueSnackbar } = useSnackbar()
  const { setIsAuthenticated } = useAuth()
  const navigate = useNavigate()

  const onLogOut = async () => {
    const { error } = await cerrarSesion()

    if (!error) {
      setIsAuthenticated(false)
      navigate('/')
      enqueueSnackbar('Se cerró sesión correctamente', {
        variant: 'success',
        autoHideDuration: 2000,
      })
    }
  }
  /*  */
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <MenuItem onClick={handleClickOpen}>
        <ListItemIcon>
          <Logout />
        </ListItemIcon>
        Cerrar sesión
      </MenuItem>

      {/*  */}

      {/* <Button variant='outlined' onClick={handleClickOpen}>
        Abrir modal
      </Button> */}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          {'Se va a cerrar la sesión, ¿estás seguro?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Al cerrar la sesión, no recibiras recordatorios de tus citas médicas
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={onLogOut}
            autoFocus
            color='success'
            variant='outlined'
          >
            Si, estoy seguro
          </Button>
          <Button onClick={handleClose} color='error' variant='outlined'>
            No, regresar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default CerrarSesion
