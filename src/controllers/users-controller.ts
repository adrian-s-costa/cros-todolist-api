import userService from '../services/users-service'
import { Request, Response } from 'express'
import httpStatus from 'http-status'

export async function usersPost(req: Request, res: Response) {
  const userBody = req.body
  try {
    const user = await userService.createUser(userBody)
    return res.status(httpStatus.CREATED).json({
      id: user.id,
      name: user.name,
      email: user.email,
    })
  } catch (error: any) {
    if (error.name === 'DuplicatedEmailError') {
      return res.status(httpStatus.CONFLICT).send(error)
    }
    return res.status(httpStatus.BAD_REQUEST).send(error)
  }
}

export async function usersGet(req: Request, res: Response) {
  try {
    const users = await userService.getUsers()
    return res.status(httpStatus.OK).json(users)
  } catch (error: any) {
    if (error.name === 'DuplicatedEmailError') {
      return res.status(httpStatus.CONFLICT).send(error)
    }
    return res.status(httpStatus.BAD_REQUEST).send(error)
  }
}
