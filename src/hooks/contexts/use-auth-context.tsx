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
import { useSignOut } from '@/hooks/queries/use-authentication'

export type AuthContext = {
  user: User
  setUser: React.Dispatch<React.SetStateAction<User>>
  signIn: (data: User) => void
  signOut: () => void
  resetUser: () => void
}

export const AuthContext = createContext<AuthContext>({
  user: {} as User,
  setUser: () => {},
  signIn: () => {},
  signOut: () => {},
  resetUser: () => {}
})

export const useAuth = () => {
  return useContext(AuthContext)
}

export function useProvideAuth() {
  const [user, setUser] = useState<User>({} as User)

  const navigate = useNavigate()
  const { mutateAsync: signOutMutate } = useSignOut()

  const resetUser = useCallback(() => {
    setUser({} as User)
    localStorage.clear()
  }, [])

  const signIn = useCallback(
    (data: User) => {
      setUser(data)
      navigate('/')

      client.defaults.headers.Authorization = `Token ${data.token}`
      localStorage.setItem('user', JSON.stringify(data))
    },
    [navigate]
  )

  const signOut = () => {
    signOutMutate().finally(() => resetUser())
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') as string)
    if (user) {
      signIn(user)
    } else {
      resetUser()
    }
  }, [signIn, resetUser])

  return {
    user,
    setUser,
    signIn,
    signOut,
    resetUser
  }
}
