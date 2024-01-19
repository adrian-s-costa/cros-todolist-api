import { getAll, create, getTaskById, update, remove } from '../controllers'
import { validateBody } from '../middlewares'
import { authenticateToken } from '../middlewares/authentication-middleware'
import { taskCreateSchema, taskUpdateSchema } from '../schemas'
import { Router } from 'express'

const taskRouter = Router()

taskRouter
  .all('/*', authenticateToken)
  .post('/create', validateBody(taskCreateSchema), create)
  .get('/get-all', getAll)
  .get('/get/:taskId', getTaskById)
  .put('/update/:taskId', validateBody(taskUpdateSchema), update)
  .delete('/delete/:taskId', remove)

export { taskRouter }
