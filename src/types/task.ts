import { TaskStatus } from '@/enum/task-status'
import { Tag } from './tag'

export type Task = {
  id: number
  title: string
  status: TaskStatus
  tags: Tag[]
  created_at: Date
  updated_at: Date
  created_by: string
}

export type TaskList = {
  total_items: number
  total_pages: number
  current_page: number
  page_size: number
  results: Task[]
}
