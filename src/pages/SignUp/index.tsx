import { AppName } from '@/components/AppName'
import { InputWithLabel } from '@/components/Fields/InputWithLabel'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router'

const SignUp = () => {
  const navigate = useNavigate()

  const goToSignIn = () => {
    navigate('/signin')
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-6 p-8">
      <AppName />

      <div className="flex flex-col items-center gap-2">
        <h2 className="text-3xl font-bold">Sign Up</h2>
        <p className="text-gray-600">Please enter your details to sign up</p>
      </div>

      <form className="flex w-full max-w-lg flex-col gap-6">
        <InputWithLabel
          label="Name"
          type="text"
          placeholder="Enter your name"
        />

        <InputWithLabel
          label="Email"
          type="email"
          placeholder="Enter your email"
        />

        <InputWithLabel
          label="Password"
          type="password"
          placeholder="Create your password"
        />

        <InputWithLabel
          label="Confirm Password"
          type="password"
          placeholder="Confirm your password"
        />

        <Button className="h-12 text-base">Sign Up</Button>

        <div className="flex items-center justify-center gap-1 text-sm">
          <p>Already have an account?</p>
          <Button
            type="button"
            className="p-0 text-sm"
            variant="link"
            onClick={goToSignIn}
          >
            Sign In
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignUp
