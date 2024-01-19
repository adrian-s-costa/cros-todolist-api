import { singInPost } from '../controllers'
import { validateBody } from '../middlewares'
import { loginSchema } from '../schemas'
import { Router } from 'express'

const authenticationRouter = Router()

authenticationRouter.post('/sign-in', validateBody(loginSchema), singInPost)

export { authenticationRouter }
