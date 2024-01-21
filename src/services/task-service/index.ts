import taskRepository from '../../repositories/task-repository'
import { Task } from '@prisma/client'
import { TaskCreate, TaskUpdate } from './protocols'
import { notFoundError } from '../../errors'
import { ApplicationError } from '../../protocols'

export async function create(task: TaskCreate): Promise<Task> {
  return await taskRepository.create(task)
}

export async function getMany(
  userId: number,
  filter?: string,
): Promise<Task[]> {
  return await taskRepository.getMany(userId, filter)
}

export async function getById(
  taskId: number,
  userId: number,
): Promise<Task | ApplicationError> {
  const taskById = await taskRepository.getById(taskId, userId)
  if (!taskById) throw notFoundError('Task could not be found')
  return taskById
}

export async function update(taskId: number, userId: number, task: TaskUpdate) {
  const updatedTask = await taskRepository.update(taskId, task, userId)
  if (!updatedTask) throw notFoundError('Task could not be found')
  return updatedTask
}

export async function remove(taskId: number, userId: number) {
  const removedTask = await taskRepository.remove(taskId, userId)
  if (!removedTask) throw notFoundError('Task could not be found')
  return removedTask
}

const taskService = {
  create,
  getMany,
  getById,
  update,
  remove,
}

export default taskService
export * from './protocols'
