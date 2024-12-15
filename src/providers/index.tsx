import { PropsWithChildren } from 'react'
import { ReactQueryProvider } from './react-query'

export const Providers = ({ children }: PropsWithChildren) => {
  return <ReactQueryProvider> {children} </ReactQueryProvider>
}
