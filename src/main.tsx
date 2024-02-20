import React from 'react'
import ReactDOM from 'react-dom/client'
import ThemeModeProvider from './theme/ThemeModeProvider'
import AppRoutes from './routes/AppRoutes'
// import DB from './db'
// import { doctorExample } from './examples'

// const listaDoctores = await DB.doctor.getAll()
// const doctorCreado = await DB.doctor.createOne(doctorExample)

// DBManager.getInstance().doctor.getOne('1')

// Ejemplo de uso
import DB from './db/index.ts'
const doctores = await DB.doctor.getAll()

console.log(doctores)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeModeProvider>
      <AppRoutes />
    </ThemeModeProvider>
  </React.StrictMode>,
)
