import supabase from '../config/supabase'

export interface RegisterFormData {
  correo: string
  contrasena: string

  dni: string
  sexo: string
  nombres: string
  telefono: string
  apellidos: string
  direccion: string
  fechaNacimiento: string
}

export const registrarse = async (paypload: RegisterFormData) => {
  const { correo, contrasena, ...others } = paypload

  const { data, error } = await supabase.auth.signUp({
    email: correo,
    password: contrasena,
    options: {
      data: { ...others },
    },
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

export const recuperarUsuario = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser()
  return user
}

export const solicitarCambioContrasena = async (payload: {
  correo: string
}) => {
  const { data, error } = await supabase.auth.resetPasswordForEmail(
    payload.correo,
    {
      redirectTo:
        'https://jaenfigueroa.github.io/proyecto-experiencias-formativas-1/#cambiarContrasena',
    },
  )

  return { data, error }
}

export const actualizarContrasena = async (payload: {
  newContrasena: string
}) => {
  const { data, error } = await supabase.auth.updateUser({
    password: payload.newContrasena,
  })

  return { data, error }
}
