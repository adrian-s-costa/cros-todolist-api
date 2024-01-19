import { Router } from 'express'
import { usersGet, usersPost } from '../controllers'
import { validateBody } from '../middlewares'
import { signInSchema } from '../schemas'

const usersRouter = Router()

usersRouter
  .post('/create', validateBody(signInSchema), usersPost)
  .get('/get', usersGet)

export { usersRouter }
