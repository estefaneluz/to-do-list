import client from '@/api/clients'
import { User } from '@/types/user'
import {
  useContext,
  createContext,
  useState,
  useEffect,
  useCallback
} from 'react'
import { useNavigate } from 'react-router'

type AuthContext = {
  user: User
  setUser: React.Dispatch<React.SetStateAction<User>>
  signIn: (data: User) => void
  signOut: () => void
}

type AuthProvider = { children: React.ReactNode }

const AuthContext = createContext<AuthContext>({
  user: {} as User,
  setUser: () => {},
  signIn: () => {},
  signOut: () => {}
})

export function AuthProvider({ children }: AuthProvider) {
  const auth = useProvideAuth()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}

function useProvideAuth() {
  const [user, setUser] = useState<User>({} as User)

  const navigate = useNavigate()

  const signIn = useCallback(
    (data: User) => {
      setUser(data)
      navigate('/')

      client.defaults.headers.Authorization = `Token ${data.token}`
      localStorage.setItem('user', JSON.stringify(data))
    },
    [navigate]
  )

  const signOut = useCallback(() => {
    setUser({} as User)
    localStorage.clear()
  }, [])

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') as string)
    if (user) {
      signIn(user)
    } else {
      signOut()
    }
  }, [signIn, signOut])

  return {
    user,
    setUser,
    signIn,
    signOut
  }
}
