import { useQuery } from '@tanstack/react-query'
import client from '@/api/clients'
import { Tag } from '@/types/tag'

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
