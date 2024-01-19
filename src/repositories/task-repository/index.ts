import { Task } from '@prisma/client'
import { prisma } from '../../config'
import { TaskCreate, TaskUpdate } from '../../services'

async function create(data: TaskCreate) {
  return await prisma.task.create({
    data: {
      title: data.title,
      description: data.description ? data.description : undefined,
      parentId: data.parentId ? data.parentId : undefined,
      userId: data.userId,
    },
  })
}

async function getById(taskId: number, userId: number): Promise<Task | null> {
  return await prisma.task.findUnique({
    where: {
      id: taskId,
      userId: userId,
    },
  })
}

async function getMany(userId: number, filter?: string | undefined): Promise<Task[]> {
  return await prisma.task.findMany({
    where: {
      userId,
      isConcluded:
        filter === 'true' ? true : filter === 'false' ? false : undefined,
    },
  })
}

async function update(taskId: number, taskBody: TaskUpdate, userId: number): Promise<Task> {
  return await prisma.task.update({
    data: taskBody,
    where: {
      id: taskId,
      userId,
    },
  })
}

async function remove(taskId: number, userId: number) {
  return await prisma.task.delete({
    where: {
      id: taskId,
      userId,
    },
  })
  
}

const taskRepository = {
  create,
  update,
  getMany,
  getById,
  remove,
}

export default taskRepository
