import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import client from '@/api/clients'
import { Tag } from '@/types/tag'
import { toast } from '../use-toast'

async function getAllTags(): Promise<Tag[]> {
  const { data } = await client.get('/tags/')

  return data
}

export function useGetTags() {
  return useQuery({
    queryKey: ['ALL_TAGS'],
    queryFn: getAllTags
  })
}

type CreateTag = {
  name: string
  hex_color: string
}

async function createTag(payload: CreateTag): Promise<Tag> {
  const { data } = await client.post<Tag>('/tags/', payload)
  return data
}

export const useCreateTag = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createTag,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ALL_TAGS'] })
      toast({
        title: 'Success!',
        description: 'You have successfully created a tag.'
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
