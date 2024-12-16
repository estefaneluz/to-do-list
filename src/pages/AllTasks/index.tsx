import { Badge } from '@/components/ui/badge'
import { Task } from './Task'
import { Pagination } from './Pagination'
import { NewTagModal } from './NewTagModal'
import { Input } from '../../components/ui/input'
import { Button } from '../../components/ui/button'
import { useGetTasks } from '../../hooks/queries/use-get-tasks'
import { useState } from 'react'
import { useGetTags } from '@/hooks/queries/use-get-tags'

const AllTasks = () => {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const [filteredTags, setFilteredTags] = useState<number[]>([])

  const {
    data: tasks,
    isLoading: tasksLoading,
    refetch: refetchTasks
  } = useGetTasks({ search, page, tags: filteredTags })

  const { data: tags } = useGetTags()

  const handlePageChange = (page: number) => {
    setPage(page)
  }

  const handleSelectTag = (tagId: number) => {
    if (filteredTags.includes(tagId)) {
      setFilteredTags(filteredTags.filter((id) => id !== tagId))
    } else {
      setFilteredTags([...filteredTags, tagId])
    }
  }

  const rangeItems = (() => {
    const pageSize = tasks?.page_size ?? 0
    const currentPage = tasks?.current_page ?? page
    const totalItems = tasks?.total_items ?? 0

    const itemsStart = (currentPage - 1) * pageSize + 1
    let itemsEnd = currentPage * pageSize
    itemsEnd = itemsEnd > totalItems ? totalItems : itemsEnd

    return `${itemsStart}-${itemsEnd}`
  })()

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-xl font-medium">All Tasks</h2>
        <div className="flex flex-wrap gap-2">
          {tags &&
            tags?.map((tag) => {
              const isSelected = filteredTags.includes(tag.id)
              return (
                <Badge
                  onClick={() => handleSelectTag(tag.id)}
                  className="cursor-pointer"
                  variant={isSelected ? 'default' : 'outline'}
                  key={tag.id}
                >
                  {tag.name}
                </Badge>
              )
            })}

          <NewTagModal />
        </div>
      </div>
      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="Search tasks..."
          className="bg-white py-5"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button onClick={() => refetchTasks()} type="button" className="h-auto">
          Search
        </Button>
      </div>
      <div className="flex flex-col gap-4">
        {tasksLoading ? (
          <h1> Loading... </h1>
        ) : tasks?.results?.length ? (
          <>
            {tasks?.results?.map((task) => <Task key={task.id} data={task} />)}

            <div className="flex items-center justify-between gap-4 text-xs text-gray-600">
              <p className="min-w-max">
                Showing {rangeItems} of {tasks?.total_items ?? 0} tasks
              </p>
              <Pagination
                pageCount={tasks?.total_pages || 1}
                page={tasks?.current_page || 1}
                onPageChange={handlePageChange}
              />
            </div>
          </>
        ) : (
          <p className="w-full text-center text-gray-600">No tasks found.</p>
        )}
      </div>
    </div>
  )
}

export default AllTasks
