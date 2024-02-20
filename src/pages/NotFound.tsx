import { Button, Typography } from '@mui/material'
import HomeLayout from '../layouts/HomeLayout'

const NotFound = () => {
  return (
    <HomeLayout ambulanciaUrgente>
      <>
        <Typography variant='h2'>404</Typography>
        <Typography variant='subtitle1'>Ups, esta pagina no existe</Typography>
        <Button variant='contained'>VOlver al inicio</Button>
      </>
    </HomeLayout>
  )
}

export default NotFound
