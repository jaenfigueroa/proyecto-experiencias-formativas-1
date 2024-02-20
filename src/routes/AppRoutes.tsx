import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Dashboard from '../pages/Dashboard'
import { v4 as uuid } from 'uuid'
import Register from '../pages/Register'
import Login from '../pages/Login'

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
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
    <HashRouter>
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.element} key={uuid()} />
        ))}
      </Routes>
    </HashRouter>
  )
}

export default AppRoutes
