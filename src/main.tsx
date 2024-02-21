import React from 'react'
import ReactDOM from 'react-dom/client'
import ThemeModeProvider from './theme/ThemeModeProvider'
import AppRoutes from './routes/AppRoutes'
import { showNotification } from './utils/showNotification'

// Ejemplo de uso de DB
// import DB from './db/index.ts'
// import { doctorExample } from './examples/index.tsx'
// const paciente = await DB.doctor.createOne(doctorExample)
// console.log(paciente)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeModeProvider>
      <AppRoutes />
      <button onClick={() => showNotification('Hola')}>Notify me!</button>
    </ThemeModeProvider>
  </React.StrictMode>,
)
