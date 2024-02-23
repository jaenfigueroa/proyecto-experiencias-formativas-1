import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Dashboard from '../pages/Dashboard'
import { v4 as uuid } from 'uuid'
import Registro from '../pages/Registro'
import InicioSesion from '../pages/InicioSesion'
import { SnackbarProvider } from 'notistack'

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/registrate',
    element: <Registro />,
  },
  {
    path: '/iniciarSesion',
    element: <InicioSesion />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

const AppRoutes = () => {
  return (
    <SnackbarProvider maxSnack={3}>
      <HashRouter>
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} element={route.element} key={uuid()} />
          ))}
        </Routes>
      </HashRouter>
    </SnackbarProvider>
  )
}

export default AppRoutes
