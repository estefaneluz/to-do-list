import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { TaskStatus } from '@/enum/task-status'
import { Task } from '@/types/task'
import clsx from 'clsx'

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
          <DialogTitle>{task.title}</DialogTitle>
        </DialogHeader>

        <div className="flex items-center gap-4 text-sm">
          <p className="w-20 text-gray-600">Created By</p>
          <p>{task.created_by}</p>
        </div>

        <div className="flex items-center gap-4 text-sm">
          <p className="w-20 text-gray-600">Status</p>
          <div className="flex items-center gap-2">
            <div
              className={clsx('size-2 rounded-full', {
                'bg-orange-600': task.status === TaskStatus.PENDING,
                'bg-green-600': task.status === TaskStatus.DONE
              })}
            ></div>
            <p>{task.status}</p>
          </div>
        </div>

        {task.tags.length > 0 && (
          <div className="flex items-center gap-4 text-sm">
            <p className="w-20 text-gray-600">Tags</p>

            <div className="flex items-center gap-2">
              {task.tags.map((tag) => (
                <Badge
                  key={tag.id}
                  variant="outline"
                  style={{ borderColor: tag.hex_color, color: tag.hex_color }}
                >
                  {tag.name}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
