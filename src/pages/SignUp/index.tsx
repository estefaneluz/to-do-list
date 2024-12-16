import yup from '@/api/yup'
import { useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useSignUp } from '@/hooks/queries/use-authentication'

import { ControlledInput } from '@/components/Fields/ControlledInput'
import { AppName } from '@/components/AppName'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { AxiosError } from 'axios'
import { useToast } from '@/hooks/use-toast'

const SignUp = () => {
  const RegisterUser = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    password_confirmation: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords must match')
      .required()
  })

  const form = useForm({
    resolver: yupResolver(RegisterUser)
  })

  const { mutate: signUp } = useSignUp()
  const navigate = useNavigate()
  const { toast } = useToast()

  const goToSignIn = () => {
    navigate('/signin')
  }

  const onSubmit = (data: yup.InferType<typeof RegisterUser>) => {
    signUp(
      {
        payload: {
          name: data.name,
          email: data.email,
          password: data.password
        }
      },
      {
        onSuccess() {
          toast({
            title: 'Success!',
            description: 'You have successfully registered.'
          })

          goToSignIn()
        },
        onError(error) {
          if (error instanceof AxiosError) {
            Object.entries(error.response?.data).forEach(([key, value]) => {
              form.setError(key as 'email' | 'password' | 'name', {
                message: value as string
              })
            })
          }
        }
      }
    )
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-6 p-8">
      <AppName />

      <div className="flex flex-col items-center gap-2">
        <h2 className="text-3xl font-bold">Sign Up</h2>
        <p className="text-gray-600">Please enter your details to sign up</p>
      </div>
      <Form {...form}>
        <form
          className="flex w-full max-w-lg flex-col gap-6"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <ControlledInput
            label="Name"
            name="name"
            type="text"
            placeholder="Enter your name"
            control={form.control}
          />

          <ControlledInput
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            control={form.control}
          />

          <ControlledInput
            label="Password"
            name="password"
            type="password"
            placeholder="Create your password"
            control={form.control}
          />

          <ControlledInput
            label="Confirm Password"
            name="password_confirmation"
            type="password"
            placeholder="Confirm your password"
            control={form.control}
          />

          <Button type="submit" className="h-12 text-base">
            Sign Up
          </Button>

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
      </Form>
    </div>
  )
}

export default SignUp
