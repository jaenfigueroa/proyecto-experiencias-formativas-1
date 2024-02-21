import React from 'react'
import ReactDOM from 'react-dom/client'
import ThemeModeProvider from './theme/ThemeModeProvider'
import AppRoutes from './routes/AppRoutes'

// Ejemplo de uso de DB
// import DB from './db/index.ts'
// import { pacienteExample } from './examples/index.tsx'
// const paciente = await DB.paciente.createOne(pacienteExample)
// console.log(paciente)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeModeProvider>
      <AppRoutes />
    </ThemeModeProvider>
  </React.StrictMode>,
)
