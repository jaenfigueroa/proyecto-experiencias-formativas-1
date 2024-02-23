import { PropsWithChildren } from 'react'
// import Logo from '../components/Logo'
// import AmbulanciaUrgente from '../components/AmbulanciaUrgente'
import Header from '../components/Header'

const RegisterLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      {/* <Logo /> */}
      <Header />
      {children}
      {/* <AmbulanciaUrgente /> */}
    </>
  )
}

export default RegisterLayout
