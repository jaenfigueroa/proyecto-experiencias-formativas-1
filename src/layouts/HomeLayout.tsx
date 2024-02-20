import { PropsWithChildren } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import AmbulanciaUrgente from '../components/AmbulanciaUrgente'
import Box from '@mui/material/Box'

interface HomeLayoutProps {
  ambulanciaUrgente?: boolean
  title?: string
}

const HomeLayout = ({
  children,
  ambulanciaUrgente = false,
  title,
}: PropsWithChildren<HomeLayoutProps>) => {
  return (
    <>
      <Header />
      {title && <Box>{title}</Box>}
      {children}
      {ambulanciaUrgente ? <AmbulanciaUrgente /> : <Navbar />}
    </>
  )
}

export default HomeLayout
