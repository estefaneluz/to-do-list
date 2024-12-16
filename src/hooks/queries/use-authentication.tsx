import client from '@/api/clients'
import { LoginUser, RegisterUser, User } from '@/types/user'
import { useMutation } from '@tanstack/react-query'

type SignUp = {
  payload: RegisterUser
}

async function signUp({ payload }: SignUp): Promise<User> {
  const { data } = await client.post<User>('/register/', payload)
  return data
}

export const useSignUp = () => {
  return useMutation({
    mutationFn: signUp
  })
}

type SignIn = {
  payload: LoginUser
}

async function signIn({ payload }: SignIn): Promise<User> {
  const { data } = await client.post<User>('/login/', payload)
  return data
}

export const useSignIn = () => {
  return useMutation({
    mutationFn: signIn
  })
}

async function signOut(): Promise<void> {
  await client.post<User>('/logout/')
}

export const useSignOut = () => {
  return useMutation({
    mutationFn: signOut
  })
}
