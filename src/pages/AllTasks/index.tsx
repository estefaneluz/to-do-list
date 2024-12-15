import { Badge } from '@/components/ui/badge'
import { Task } from './Task'
import { Pagination } from './Pagination'
import { NewTagModal } from './NewTagModal'

const AllTasks = () => {
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
      <div className="flex flex-col gap-4">
        <Task />
        <Task />

        <div className="flex items-center justify-between gap-4 text-xs text-gray-600">
          <p className="min-w-max">Showing 1-10 of 24 tasks</p>
          <Pagination pageCount={3} page={1} onPageChange={() => {}} />
        </div>
      </div>
    </div>
  )
}

export default AllTasks
