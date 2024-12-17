import { AuthContext, useProvideAuth } from '@/hooks/contexts/use-auth-context'

export type AuthProvider = { children: React.ReactNode }

export function AuthProvider({ children }: AuthProvider) {
  const auth = useProvideAuth()

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}
