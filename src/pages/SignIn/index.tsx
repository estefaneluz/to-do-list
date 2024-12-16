import yup from '@/api/yup'
import { useNavigate } from 'react-router'

import { AppName } from '@/components/AppName'
import { Button } from '@/components/ui/button'
import { ControlledInput } from '@/components/Fields/ControlledInput'
import { Form } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useSignIn } from '@/hooks/queries/use-authentication'
import { useAuth } from '@/hooks/contexts/use-auth-context'

const SignIn = () => {
  const LoginUser = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required()
  })

  const form = useForm({
    resolver: yupResolver(LoginUser)
  })

  const { mutateAsync: signInMutate } = useSignIn()

  const navigate = useNavigate()
  const { signIn } = useAuth()

  const goToSignUp = () => {
    navigate('/signup')
  }

  const onSubmit = (data: yup.InferType<typeof LoginUser>) => {
    signInMutate(
      {
        payload: {
          email: data.email,
          password: data.password
        }
      },
      {
        onSuccess(data) {
          console.log(data)
          signIn(data)
          console.log('??')
        },
        onError() {
          form.setError('password', {
            message: 'Invalid email or password'
          })
        }
      }
    )
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-6 p-8">
      <AppName />

      <div className="flex flex-col items-center gap-2">
        <h2 className="text-3xl font-bold">Welcome back</h2>
        <p className="text-gray-600">Please enter your details to sign in</p>
      </div>
      <Form {...form}>
        <form
          className="flex w-full max-w-lg flex-col gap-6"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <ControlledInput
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
          />

          <ControlledInput
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
          />

          <Button type="submit" className="h-12 text-base">
            Sign In
          </Button>

          <div className="flex items-center justify-center gap-1 text-sm">
            <p>New user?</p>
            <Button
              type="button"
              className="p-0 text-sm"
              variant="link"
              onClick={goToSignUp}
            >
              Create an account
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default SignIn
