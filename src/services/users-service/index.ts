import userRepository from '../../repositories/user-repository'
import bcrypt from 'bcrypt'
import { duplicatedEmailError } from './errors'

export async function createUser(userBody: any) {
  await validateUniqueEmailOrFail(userBody.email)
  const hashedPassword = await bcrypt.hash(userBody.password, 12)
  userBody.password = hashedPassword

  return userRepository.create(userBody)
}

export async function getUsers(): Promise<any> {
  return userRepository.retrieve()
}

async function validateUniqueEmailOrFail(email: string) {
  const userWithSameEmail = await userRepository.findByEmail(email)
  if (userWithSameEmail) {
    throw duplicatedEmailError()
  }
}

const userService = {
  createUser,
  getUsers,
}

export default userService
export * from './errors'
