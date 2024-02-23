import { Button, Typography } from '@mui/material'
import HomeLayout from '../layouts/HomeLayout'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <HomeLayout ambulanciaUrgente>
      <>
        <Typography variant='h2'>404</Typography>
        <Typography variant='subtitle1'>Ups, esta pagina no existe</Typography>
        <Link to='/'>
          <Button variant='contained'>Volver al inicio</Button>
        </Link>
      </>
    </HomeLayout>
  )
}

export default NotFound
