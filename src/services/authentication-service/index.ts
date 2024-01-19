import { validatePassword } from '../../utils/hash'
import jwt from 'jsonwebtoken'
import userRepository from '../../repositories/user-repository'
import { invalidCredentialsError } from './errors'
import { exclude } from '../../utils/prisma-utils'
import sessionRepository from '../../repositories/session-repository'
import { GetUserOrFailResult, SignInParams, SignInResult } from './protocols'

async function signIn(params: SignInParams): Promise<SignInResult> {
  const { email, name, password } = params
  const user = await getUserOrFail(email)
  const isEqual = await validatePassword(password, user.password)
  if (!isEqual) throw invalidCredentialsError()
  const token = await createSession(user.id)

  return {
    user: exclude(user, 'password'),
    token,
  }
}

async function getUserOrFail(email: string): Promise<GetUserOrFailResult> {
  const user = await userRepository.findByEmail(email, {
    id: true,
    email: true,
    name: true,
    password: true,
  })
  if (!user) throw invalidCredentialsError()

  return user
}

async function createSession(userId: number) {
  const jwtSecret = process.env.JWT_SECRET

  if (!jwtSecret) {
    throw new Error('JWT_SECRET not defined in environment variables')
  }

  const options = {
    expiresIn: '1h',
  }

  const token = jwt.sign({ userId }, jwtSecret, options)
  await sessionRepository.create({
    token,
    userId,
  })

  return token
}

const authenticationService = {
  signIn,
}

export default authenticationService
export * from './errors'
export * from './protocols'
