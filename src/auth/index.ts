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

export const restablecerContrasena = async (payload: { correo: string }) => {
  const { data, error } = await supabase.auth.resetPasswordForEmail(
    payload.correo,
    {
      redirectTo: 'https://example.com/update-password',
    },
  )

  return { data, error }
}

export const recuperarUsuario = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser()
  return user
}
