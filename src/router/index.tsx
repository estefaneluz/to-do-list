import SignIn from '@/pages/SignIn'
import SignUp from '@/pages/SignUp'
import { Route, Routes } from 'react-router-dom'
import { PROTECTED_ROUTES } from './routes'
import Layout from '@/pages/layout'

const Router = () => {
  return (
    <Routes>
      {Object.values(PROTECTED_ROUTES).map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<Layout>{route.element}</Layout>}
        />
      ))}
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  )
}

export default Router
