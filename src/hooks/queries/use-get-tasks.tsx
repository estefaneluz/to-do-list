import { useQuery } from '@tanstack/react-query'
import { TaskList } from '../../types/task'
import client from '@/api/clients'

type Filters = {
  search?: string
  tags?: number[]
  page: number
}

async function getAllTasks(params: Filters): Promise<TaskList> {
  const { data } = await client.get('/tasks/', {
    params
  })

  return data
}

export function useGetTasks({ search, tags, page }: Filters) {
  return useQuery({
    queryKey: ['ALL_TASKS'],
    queryFn: () => getAllTasks({ search, tags, page }),
    enabled: !!page
  })
}
