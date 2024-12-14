import SignIn from '@/pages/SignIn'
import { Route, Routes } from 'react-router-dom'

const Router = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  )
}

export default Router
