import taskService from '../services/task-service'
import { Request, Response } from 'express'
import httpStatus from 'http-status'

export async function create(req: any, res: Response) {
  const taskBody = req.body
  const { userId } = req
  taskBody.userId = userId

  try {
    const taskCreated = await taskService.create(taskBody)
    return res.status(httpStatus.CREATED).json(taskCreated)
  } catch (error: any) {
    return res.status(httpStatus.BAD_REQUEST).send(error)
  }
}

export async function getAll(req: any, res: Response) {
  const { userId } = req
  const { filter } = req.query
  try {
    const tasks = await taskService.getMany(userId, filter)
    return res.status(httpStatus.OK).json(tasks)
  } catch (error: any) {
    return res.status(httpStatus.BAD_REQUEST).send(error)
  }
}

export async function getTaskById(req: any, res: Response) {
  const { taskId } = req.params
  const { userId } = req

  try {
    const task = await taskService.getById(Number(taskId), Number(userId))
    return res.status(httpStatus.OK).json(task)
  } catch (error: any) {
    return res.status(httpStatus.NOT_FOUND).send(error)
  }
}

export async function update(req: any, res: Response) {
  const { taskId } = req.params
  const { userId } = req
  const taskBody = req.body

  try {
    const response = await taskService.update(
      Number(taskId),
      Number(userId),
      taskBody,
    )
    return res.status(httpStatus.OK).json(response)
  } catch (error: any) {
    return res.status(httpStatus.NOT_FOUND).send(error)
  }
}

export async function remove(req: any, res: Response) {
  const { taskId } = req.params
  const { userId } = req

  try {
    const response = await taskService.remove(Number(taskId), userId)
    return res.status(httpStatus.OK).json(response)
  } catch (error: any) {
    return res.status(httpStatus.NOT_FOUND).send(error)
  }
}
