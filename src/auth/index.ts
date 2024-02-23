import supabase from '../config/supabase'

export const registrarse = async (paypload: {
  correo: string
  contrasena: string
}) => {
  const { data, error } = await supabase.auth.signUp({
    email: paypload.correo,
    password: paypload.contrasena,
  })

  return { data, error }
}

export const iniciarSesion = async (paypload: {
  correo: string
  contrasena: string
}) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: paypload.correo,
    password: paypload.contrasena,
  })
  return { data, error }
}

export const cerrarSesion = async () => {
  const { error } = await supabase.auth.signOut()

  return { error }
}
