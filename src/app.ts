import 'express-async-errors'
import express, { Express } from 'express'
import cors from 'cors'
import { loadEnv, connectDb, disconnectDB } from './config'

loadEnv()

import { usersRouter, taskRouter, authenticationRouter } from './routers'

const app = express()
app
  .use(cors())
  .use(express.json())
  .get('/health', (_req, res) => res.send('OK!'))
  .use('/authentication', authenticationRouter)
  .use('/users', usersRouter)
  .use('/tasks', taskRouter)

export function init(): Promise<Express> {
  connectDb()
  return Promise.resolve(app)
}

export async function close(): Promise<void> {
  await disconnectDB()
}

export default app
