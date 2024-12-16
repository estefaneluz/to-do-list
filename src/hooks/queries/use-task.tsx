import client from '@/api/clients'
import { Task } from '@/types/task'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from '../use-toast'

type CreateTask = {
  title: string
}

async function createTask(payload: CreateTask): Promise<Task> {
  const { data } = await client.post<Task>('/tasks/', payload)
  return data
}

export const useCreateTask = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ALL_TASKS'] })
      toast({
        title: 'Success!',
        description: 'You have successfully created a task.'
      })
    },
    onError: () => {
      toast({
        title: 'Error!',
        description: 'Something went wrong.',
        variant: 'destructive'
      })
    }
  })
}
