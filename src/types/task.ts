import { Tag } from './tag'

export type Task = {
  id: string
  description: string
  done: boolean
  tags: Tag[]
  createdAt: Date
  updatedAt: Date
  createdBy: string
}
