export type RegisterUser = {
  name: string
  email: string
  password: string
}

export type LoginUser = {
  email: string
  password: string
}

export type User = {
  token: string
  name: string
  email: string
}
