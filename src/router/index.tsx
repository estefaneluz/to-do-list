import SignIn from '@/pages/SignIn'
import SignUp from '@/pages/SignUp'
import { Route, Routes } from 'react-router-dom'

const Router = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  )
}

export default Router
