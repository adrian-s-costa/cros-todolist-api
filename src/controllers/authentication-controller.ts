import authenticationService from '../services/authentication-service'
import { Request, Response } from 'express'
import httpStatus from 'http-status'

export async function singInPost(req: Request, res: Response) {
  const { email, name, password } = req.body

  try {
    const result = await authenticationService.signIn({ email, name, password })
    return res.status(httpStatus.OK).send(result)
  } catch (error) {
    return res.status(httpStatus.UNAUTHORIZED).send({})
  }
}
