import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { DeleteTaskModal } from './DeleteTaskModal'
import { UpdateTaskModal } from './UpdateTaskModal'
import { TaskOverviewModal } from '@/components/Task/TaskOverviewModal'
import { Button } from '@/components/ui/button'

export function Task() {
  const taskDescription = 'Update website content'

  return (
    <div className="flex items-center gap-2 rounded-sm border bg-white p-4">
      <Checkbox />

      <TaskOverviewModal
        triggerClassName="grow"
        asChild
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
        <Button
          className="justify-start px-2 text-base font-normal text-accent-foreground"
          variant="link"
        >
          {taskDescription}
        </Button>
      </TaskOverviewModal>

      <Badge className="mr-2">Work</Badge>

      <div className=" flex items-center gap-1">
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
