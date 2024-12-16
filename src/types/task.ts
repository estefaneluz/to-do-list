import { Tag } from './tag'

export type Task = {
  id: string
  title: string
  status: 'pending' | 'done'
  tags: Tag[]
  createdAt: Date
  updatedAt: Date
  createdBy: string
}
