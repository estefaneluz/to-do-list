import client from '@/api/clients'
import { Task } from '@/types/task'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from '../use-toast'
import { TaskStatus } from '@/enum/task-status'

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

type UpdateStatus = {
  id: number
  status: TaskStatus
}

async function updateStatus({ id, status }: UpdateStatus): Promise<Task> {
  const { data } = await client.patch(`/tasks/${id}/`, {
    status
  })
  return data
}

export const useUpdateStatus = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: updateStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ALL_TASKS'] })
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

type UpdateTask = {
  id: number
  title: string
  status: TaskStatus
  tags: number[]
}

async function updateTask(payload: UpdateTask): Promise<Task> {
  const { data } = await client.put(
    `/tasks/${payload.id}/update_task/`,
    payload
  )
  return data
}

export const useUpdateTask = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: updateTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ALL_TASKS'] })
      toast({
        title: 'Success!',
        description: 'You have successfully updated a task.'
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

type DeleteTask = {
  id: number
}

async function deleteTask({ id }: DeleteTask): Promise<Task> {
  const { data } = await client.delete(`/tasks/${id}/`)
  return data
}

export const useDeleteTask = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ALL_TASKS'] })
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
