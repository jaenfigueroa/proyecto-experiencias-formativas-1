import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useMemo,
  useEffect,
} from 'react'
import { recuperarUsuario } from '.'

type Props = {
  children: React.ReactNode
}

interface IAppContext {
  isAuthenticated: boolean
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>
  user: string
  setUser: Dispatch<SetStateAction<string>>
}

// AuthContext
export const AuthContext = createContext<IAppContext>({} as IAppContext)

// AuthProvider
export const AuthProvider = ({ children }: Props) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [user, setUser] = useState<string>('')

  useEffect(() => {
    const response = async () => {
      const response = await recuperarUsuario()
      setIsAuthenticated(!!response)
      const user = `${response?.user_metadata.nombres} ${response?.user_metadata.apellidos}`
      setUser(user)
    }
    response()
  }, [isAuthenticated])

  const sharedData: IAppContext = useMemo(
    () => ({
      isAuthenticated,
      setIsAuthenticated,
      user,
      setUser,
    }),
    [isAuthenticated, setIsAuthenticated, user, setUser],
  )

  return (
    <AuthContext.Provider value={sharedData}>{children}</AuthContext.Provider>
  )
}
