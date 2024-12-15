import { TaskOverviewModal } from '@/components/Task/TaskOverviewModal'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { DeleteTaskModal } from '../../../components/Task/DeleteTaskModal'
import { UpdateTaskModal } from '../../../components/Task/UpdateTaskModal'

export function Task() {
  const taskDescription = 'Update website content'

  return (
    <div className="flex cursor-pointer items-center gap-2 rounded-sm border bg-white p-4">
      <Checkbox />

      <TaskOverviewModal
        triggerClassName="grow"
        task={{
          description: taskDescription,
          tags: [],
          done: false,
          id: '1',
          createdAt: new Date(),
          updatedAt: new Date(),
          createdBy: 'Estéfane Côrtes'
        }}
      >
        <div className="flex items-center">
          {taskDescription}
          <Badge
            className="ml-2 size-max border-primary bg-primary-foreground text-primary"
            variant="outline"
          >
            Work
          </Badge>
        </div>
      </TaskOverviewModal>

      <div className=" flex items-center gap-2">
        <UpdateTaskModal
          task={{
            description: taskDescription,
            tags: [],
            done: false,
            id: '1',
            createdAt: new Date(),
            updatedAt: new Date(),
            createdBy: 'Estéfane Côrtes'
          }}
        />
        <DeleteTaskModal taskDescription={taskDescription} />
      </div>
    </div>
  )
}
