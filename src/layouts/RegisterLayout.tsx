import { PropsWithChildren } from 'react'
// import Logo from '../components/Logo'
// import AmbulanciaUrgente from '../components/AmbulanciaUrgente'
import Header from '../components/Header'
import { Box, Paper } from '@mui/material'

const RegisterLayout = ({ children }: PropsWithChildren) => {
  return (
    <Box minHeight={'100vh'} display={'flex'} flexDirection={'column'}>
      {/* <Logo /> */}
      <Header />

      <Paper
        elevation={3}
        sx={{
          width: '100%',
          maxWidth: '450px',
          margin: 'auto',
          padding: '16px',
          borderRadius: '8px',
        }}
      >
        <Box p={4}>{children}</Box>
      </Paper>
      {/* <AmbulanciaUrgente /> */}
    </Box>
  )
}

export default RegisterLayout
