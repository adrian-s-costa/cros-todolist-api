import bcrypt from 'bcrypt'

export async function hashFunction(string: string | Buffer) {
  const hashedPassword = await bcrypt.hash(string, 12)
  return hashedPassword
}

export async function validatePassword(
  inputPassword: string,
  dbPassword: string,
) {
  const isPasswordValid = await bcrypt.compare(inputPassword, dbPassword)
  return isPasswordValid
}
