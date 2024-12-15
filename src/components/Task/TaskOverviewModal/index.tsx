import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Task } from '@/types/task'
import { Badge } from '@/components/ui/badge'
import { DeleteTaskModal } from '../DeleteTaskModal'
import { UpdateTaskModal } from '../UpdateTaskModal'

type Props = {
  triggerClassName?: string
  children: React.ReactNode
  asChild?: boolean
  task: Task
}

export function TaskOverviewModal({
  children,
  asChild,
  task,
  triggerClassName
}: Props) {
  return (
    <Dialog>
      <DialogTrigger className={triggerClassName} asChild={asChild}>
        {children}
      </DialogTrigger>

      <DialogContent className="gap-4">
        <DialogHeader className="mb-2">
          <DialogTitle>{task.description}</DialogTitle>
        </DialogHeader>

        <div className="flex items-center gap-4 text-sm">
          <p className="w-20 text-gray-600">Created By</p>
          <p>{task.createdBy}</p>
        </div>

        <div className="flex items-center gap-4 text-sm">
          <p className="w-20 text-gray-600">Status</p>
          <div className="flex items-center gap-2">
            <div className="size-2 rounded-full bg-orange-600"></div>
            <p>Pending</p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm">
          <p className="w-20 text-gray-600">Tags</p>

          <div className="flex items-center gap-2">
            <Badge className="max-w-max">Work</Badge>
            <Badge className="max-w-max bg-emerald-500 hover:bg-emerald-500/80">
              Personal
            </Badge>
          </div>
        </div>
        {/* <hr /> */}

        <div className="ml-auto flex items-center gap-2">
          <UpdateTaskModal task={task} />
          <DeleteTaskModal taskDescription={task.description} />
        </div>
      </DialogContent>
    </Dialog>
  )
}
