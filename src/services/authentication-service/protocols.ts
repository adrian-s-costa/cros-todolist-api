import { User } from '@prisma/client'

type SignInParams = Pick<User, 'email' | 'name' | 'password'>

type SignInResult = {
  user: Pick<User, 'id' | 'email'>
  token: string
}

type GetUserOrFailResult = Pick<User, 'id' | 'email' | 'password'>

export { SignInParams, SignInResult, GetUserOrFailResult }
