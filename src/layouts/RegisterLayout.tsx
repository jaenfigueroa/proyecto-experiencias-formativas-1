import { PropsWithChildren } from 'react'
import Header from '../components/Header'
import { Box, Paper } from '@mui/material'
// import fondo from '/fondo.jpg'

const RegisterLayout = ({ children }: PropsWithChildren) => {
  return (
    <Box minHeight={'100vh'} display={'flex'} flexDirection={'column'}>
      <Header />

      {/* <img
        src={fondo}
        alt='imagen del dia'
        style={{ width: '100%', position: 'fixed', top: 0 }}
      /> */}

      <Box
        sx={{
          margin: 'auto',
          padding: '2rem',
          width: '100%',
          maxWidth: '500px',
          zIndex: 1,
        }}
      >
        <Paper
          elevation={2}
          sx={{
            borderRadius: '8px',
            padding: '2rem',
          }}
        >
          {children}
        </Paper>
      </Box>
    </Box>
  )
}

export default RegisterLayout
