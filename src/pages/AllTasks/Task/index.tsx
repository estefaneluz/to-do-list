import { TaskOverviewModal } from '@/components/Task/TaskOverviewModal'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { DeleteTaskModal } from '../../../components/Task/DeleteTaskModal'
import { UpdateTaskModal } from '../../../components/Task/UpdateTaskModal'
import { type Task } from '../../../types/task'
import { TaskStatus } from '@/enum/task-status'
import { useUpdateStatus } from '@/hooks/queries/use-task'

type TaskProps = {
  data: Task
}

export function Task({ data }: TaskProps) {
  const { mutate: updateStatus, isPending: isUpdating } = useUpdateStatus()

  const handleUpdateStatus = () => {
    const status =
      data.status === TaskStatus.DONE ? TaskStatus.PENDING : TaskStatus.DONE

    updateStatus({
      id: data.id,
      status
    })
  }

  return (
    <div className="flex cursor-pointer items-center gap-2 rounded-sm border bg-white p-4">
      <Checkbox
        className="disabled:cursor-wait"
        disabled={isUpdating}
        checked={data.status === TaskStatus.DONE}
        onClick={handleUpdateStatus}
      />

      <TaskOverviewModal triggerClassName="grow" task={data}>
        <div className="flex items-center">
          {data.title}
          {data.tags.map((tag) => (
            <Badge
              key={tag.id}
              className="ml-2 size-max border-primary bg-primary-foreground text-primary"
              variant="outline"
            >
              {tag.name}
            </Badge>
          ))}
        </div>
      </TaskOverviewModal>

      <div className=" flex items-center gap-2">
        <UpdateTaskModal task={data} />
        <DeleteTaskModal task={data} />
      </div>
    </div>
  )
}
