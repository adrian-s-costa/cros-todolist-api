import { Router } from 'express'
import { usersPost } from '../controllers'
import { validateBody } from '../middlewares'
import { signInSchema } from '../schemas'

const usersRouter = Router()

usersRouter.post('/create', validateBody(signInSchema), usersPost)

export { usersRouter }
