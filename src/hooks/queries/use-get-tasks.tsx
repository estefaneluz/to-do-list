import { useQuery } from '@tanstack/react-query'
import { Task } from '../../types/task'

const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Update website content',
    createdAt: new Date(),
    createdBy: 'Teste',
    status: 'done',
    tags: [
      { color: { name: 'red', hex: '#fff', rgb: '123' }, id: '1', name: 'Work' }
    ],
    updatedAt: new Date()
  }
]

async function getAllTasks(): Promise<Task[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockTasks), 2000)
  })
}

export function useGetTasks() {
  return useQuery({
    queryKey: ['ALL_TASKS'],
    queryFn: getAllTasks
  })
}
