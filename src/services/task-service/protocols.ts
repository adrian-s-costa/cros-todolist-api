import { Task } from '@prisma/client'

export type TaskCreate = Pick<
  Task,
  'title' | Partial<'description'> | Partial<'parentId'> | 'userId'
>
export type TaskUpdate = Pick<
  Task,
  Partial<'title'> | Partial<'description'> | Partial<'isConcluded'>
>
