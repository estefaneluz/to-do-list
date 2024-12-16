import { Tag } from './tag'

export type Task = {
  id: number
  title: string
  status: 'pending' | 'done'
  tags: Tag[]
  createdAt: Date
  updatedAt: Date
  createdBy: string
}

export type TaskList = {
  total_items: number
  total_pages: number
  current_page: number
  page_size: number
  results: Task[]
}
