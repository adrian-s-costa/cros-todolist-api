import { Prisma } from '@prisma/client'
import { prisma } from '../../config'

async function create(userData: any) {
  try {
    const { name, email, password } = userData

    const createdUser = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    })

    return createdUser
  } catch (error) {
    throw new Error('Erro ao criar usuário. Verifique os dados fornecidos.')
  }
}

async function findByEmail(email: string, select?: Prisma.UserSelect) {
  const params: Prisma.UserFindUniqueArgs = {
    where: {
      email,
    },
  }

  if (select) {
    params.select = select
  }

  return await prisma.user.findUnique(params)
}

async function retrieve() {
  return await prisma.user.findMany()
}

const userRepository = {
  create,
  retrieve,
  findByEmail,
}

export default userRepository
