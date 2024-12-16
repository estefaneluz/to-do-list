import { TaskOverviewModal } from '@/components/Task/TaskOverviewModal'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { DeleteTaskModal } from '../../../components/Task/DeleteTaskModal'
import { UpdateTaskModal } from '../../../components/Task/UpdateTaskModal'
import { type Task } from '../../../types/task'

type TaskProps = {
  data: Task
}

export function Task({ data }: TaskProps) {
  return (
    <div className="flex cursor-pointer items-center gap-2 rounded-sm border bg-white p-4">
      <Checkbox />

      <TaskOverviewModal triggerClassName="grow" task={data}>
        <div className="flex items-center">
          {data.title}
          <Badge
            className="ml-2 size-max border-primary bg-primary-foreground text-primary"
            variant="outline"
          >
            Work
          </Badge>
        </div>
      </TaskOverviewModal>

      <div className=" flex items-center gap-2">
        <UpdateTaskModal task={data} />
        <DeleteTaskModal task={data} />
      </div>
    </div>
  )
}
