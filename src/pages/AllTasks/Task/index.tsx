import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { DeleteTaskModal } from './DeleteTaskModal'
import { UpdateTaskModal } from './UpdateTaskModal'

export function Task() {
  const taskDescription = 'Update website content'

  return (
    <div className="flex items-center gap-2 rounded-sm border bg-white p-4">
      <Checkbox />
      <p className="grow">{taskDescription}</p>

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
