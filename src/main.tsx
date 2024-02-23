import React from 'react'
import ReactDOM from 'react-dom/client'
import ThemeModeProvider from './theme/ThemeModeProvider'
import AppRoutes from './routes/AppRoutes'
// import { showNotification } from './utils/showNotification'
// import db from './db'
// import { iniciarSesion } from './auth'

// Ejemplo de uso de DB
// import DB from './db/index.ts'
// import { doctorExample } from './examples/index.tsx'
// const paciente = await DB.doctor.createOne(doctorExample)
// console.log(paciente)

// console.log(await registrarse('jaen@gotgel.org', 'averysecurepassword'))

// console.log(await iniciarSesion('jaen@gotgel.org', 'averysecurepassword'))
// console.log(await db.citaMedica.getMany(0, 10))

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeModeProvider>
      <AppRoutes />
      {/* <button onClick={() => showNotification('Hola')}>Notify me!</button> */}
    </ThemeModeProvider>
  </React.StrictMode>,
)
