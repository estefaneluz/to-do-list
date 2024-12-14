import { InputWithLabel } from '@/components/Fields/InputWithLabel'
import { Button } from '@/components/ui/button'
import { Kanban } from 'lucide-react'

const SignIn = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-6 p-8">
      <h1 className="flex items-center justify-center gap-2 text-3xl font-bold">
        <Kanban size={42} />
        To-Do List
      </h1>

      <div className="flex flex-col items-center gap-2">
        <h2 className="text-3xl font-bold">Welcome back</h2>
        <p className="text-gray-600">Please enter your details to sign in</p>
      </div>

      <form className="flex w-full max-w-lg flex-col gap-6">
        <InputWithLabel
          label="Email"
          type="email"
          placeholder="Enter your email"
        />

        <InputWithLabel
          label="Password"
          type="password"
          placeholder="Enter your password"
        />

        <Button className="h-12 text-base">Sign In</Button>

        <div className="flex items-center justify-center gap-1 text-sm">
          <p>New user?</p>
          <Button className="p-0 text-sm" variant="link">
            Create an account
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignIn
