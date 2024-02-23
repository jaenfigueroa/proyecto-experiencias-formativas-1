import React from 'react'
import ReactDOM from 'react-dom/client'
import ThemeModeProvider from './theme/ThemeModeProvider'
import AppRoutes from './routes/AppRoutes'
import { AuthProvider } from './auth/AuthContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeModeProvider>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </ThemeModeProvider>
  </React.StrictMode>,
)
