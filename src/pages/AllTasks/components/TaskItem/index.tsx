import { TaskOverviewModal } from '@/pages/AllTasks/components/Task/TaskOverviewModal'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { DeleteTaskModal } from '@/pages/AllTasks/components/Task/DeleteTaskModal'
import { UpdateTaskModal } from '@/pages/AllTasks/components/Task/UpdateTaskModal'
import { TaskStatus } from '@/enum/task-status'
import { useUpdateStatus } from '@/hooks/queries/use-task'
import { Task } from '@/types/task'

type TaskItemProps = {
  data: Task
}

export function TaskItem({ data }: TaskItemProps) {
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
        <div className="flex items-center">{data.title}</div>
      </TaskOverviewModal>

      {data.tags.map((tag) => (
        <Badge
          key={tag.id}
          style={{ borderColor: tag.hex_color, color: tag.hex_color }}
          className="ml-2 size-max bg-primary-foreground text-primary"
          variant="outline"
        >
          {tag.name}
        </Badge>
      ))}

      <div className=" flex items-center gap-2">
        <UpdateTaskModal task={data} />
        <DeleteTaskModal task={data} />
      </div>
    </div>
  )
}
