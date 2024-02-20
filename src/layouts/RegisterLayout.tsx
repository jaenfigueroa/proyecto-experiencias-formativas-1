import { PropsWithChildren } from 'react'
import Logo from '../components/Logo'
import AmbulanciaUrgente from '../components/AmbulanciaUrgente'

const RegisterLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Logo />
      {children}
      <AmbulanciaUrgente />
    </>
  )
}

export default RegisterLayout
