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
  user: boolean
  setUser: Dispatch<SetStateAction<boolean>>
}

// AuthContext
export const AuthContext = createContext<IAppContext>({} as IAppContext)

// AuthProvider
export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<boolean>(false)

  useEffect(() => {
    const response = async () => {
      const response = await recuperarUsuario()
      setUser(!!response)
    }
    response()
  }, [user])

  const sharedData: IAppContext = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user, setUser],
  )

  return (
    <AuthContext.Provider value={sharedData}>{children}</AuthContext.Provider>
  )
}
