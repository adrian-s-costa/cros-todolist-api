import Joi from 'joi'
import { TaskCreate, TaskUpdate } from '../services'

export const taskCreateSchema = Joi.object<TaskCreate>({
  title: Joi.string().required(),
  description: Joi.string(),
  parentId: Joi.number(),
})

export const taskUpdateSchema = Joi.object<TaskUpdate>({
  title: Joi.string(),
  description: Joi.string(),
  isConcluded: Joi.boolean(),
})
