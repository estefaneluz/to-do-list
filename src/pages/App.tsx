import { AuthProvider } from '@/hooks/contexts/use-auth-context'
import Router from '@/router'

const App = () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  )
}

export default App
