import { Badge } from '@/components/ui/badge'
import { Task } from './Task'
import { Pagination } from './Pagination'
import { NewTagModal } from './NewTagModal'
import { Input } from '../../components/ui/input'
import { Button } from '../../components/ui/button'
import { useGetTasks } from '../../hooks/queries/use-get-tasks'

const AllTasks = () => {
  const { data, isLoading } = useGetTasks()

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-xl font-medium">All Tasks</h2>
        <div className="flex gap-2">
          <Badge>Work</Badge>
          <Badge className="bg-emerald-500 hover:bg-emerald-500/80">
            Personal
          </Badge>

          <NewTagModal />
        </div>
      </div>
      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="Search tasks..."
          className="bg-white py-5"
        />
        <Button type="submit" className="h-auto">
          Search
        </Button>
      </div>
      <div className="flex flex-col gap-4">
        {isLoading ? (
          <h1> Loading... </h1>
        ) : (
          <>{data?.map((task) => <Task key={task.id} data={task} />)}</>
        )}
        <div className="flex items-center justify-between gap-4 text-xs text-gray-600">
          <p className="min-w-max">Showing 1-10 of 24 tasks</p>
          <Pagination pageCount={3} page={1} onPageChange={() => {}} />
        </div>
      </div>
    </div>
  )
}

export default AllTasks
