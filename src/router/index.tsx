import { Navigate, Route, Routes } from 'react-router-dom'
import { PROTECTED_ROUTES, PUBLIC_ROUTES } from './routes'
import Layout from '@/pages/layout'
import { useAuth } from '@/hooks/contexts/use-auth-context'
import { useEffect } from 'react'

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuth()
  if (!user?.token) {
    return <Navigate to="/signin" />
  }
  return children
}

export const PublicRoute = ({ children }: { children: JSX.Element }) => {
  const { resetUser } = useAuth()

  useEffect(() => {
    resetUser()
  }, [resetUser])

  return children
}

const Router = () => {
  return (
    <Routes>
      {Object.values(PROTECTED_ROUTES).map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <ProtectedRoute>
              <Layout>{route.element}</Layout>
            </ProtectedRoute>
          }
        />
      ))}

      {Object.values(PUBLIC_ROUTES).map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<PublicRoute>{route.element}</PublicRoute>}
        />
      ))}

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default Router
