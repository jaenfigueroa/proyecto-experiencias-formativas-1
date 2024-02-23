import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Dashboard from '../pages/Dashboard'
import { v4 as uuid } from 'uuid'
import Registro from '../pages/Registro'
import InicioSesion from '../pages/InicioSesion'
import { SnackbarProvider } from 'notistack'
import ChangePassword from '../pages/ChangePassword'
import { useAuth } from '../auth/useAuth'
import SolicitarCambioContrasena from '../pages/SolicitarCambioContrasena'

const routesPublic = [
  {
    path: '/registrate',
    element: <Registro />,
  },
  {
    path: '/iniciarSesion',
    element: <InicioSesion />,
  },
  {
    path: '/solicitarCambioContrasena',
    element: <SolicitarCambioContrasena />,
  },
]

const routesPrivate = [
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/cambiarContrasena',
    element: <ChangePassword />,
  },
]

const AppRoutes = () => {
  const { user } = useAuth()

  return (
    <SnackbarProvider maxSnack={3}>
      <HashRouter>
        <Routes>
          {user
            ? routesPrivate.map((route) => (
                <Route path={route.path} element={route.element} key={uuid()} />
              ))
            : routesPublic.map((route) => (
                <Route path={route.path} element={route.element} key={uuid()} />
              ))}
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </HashRouter>
    </SnackbarProvider>
  )
}

export default AppRoutes
