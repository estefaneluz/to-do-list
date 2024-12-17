import { PropsWithChildren } from 'react'
import { ReactQueryProvider } from './react-query'
import { AuthProvider } from './auth'

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ReactQueryProvider>
      <AuthProvider>{children}</AuthProvider>
    </ReactQueryProvider>
  )
}
