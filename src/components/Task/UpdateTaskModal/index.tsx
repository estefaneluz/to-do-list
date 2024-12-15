import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Pencil } from 'lucide-react'
import { InputWithLabel } from '@/components/Fields/InputWithLabel'
import { Task } from '@/types/task'
import { Select } from '@/components/Fields/Select'

type Props = {
  task: Task
}

export function UpdateTaskModal({ task }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="px-3 text-gray-600" variant="ghost">
          <Pencil />
        </Button>
      </DialogTrigger>

      <DialogContent className="gap-6">
        <DialogHeader>
          <DialogTitle>Update Task</DialogTitle>
        </DialogHeader>

        <form className="flex w-full max-w-lg flex-col gap-5">
          <InputWithLabel
            label="Description"
            type="text"
            defaultValue={task.description}
          />

          <Select
            label="Status"
            defaultValue={{
              label: 'Pending',
              value: 'false'
            }}
            options={[
              {
                label: 'Done',
                value: 'true'
              },
              {
                label: 'Pending',
                value: 'false'
              }
            ]}
          />

          <Select
            label="Tags"
            closeMenuOnSelect={false}
            isMulti
            isClearable
            options={[
              {
                label: 'Work',
                value: 'work'
              }
            ]}
          />

          <div className="flex items-center justify-center gap-2">
            <Button
              variant="outline"
              type="button"
              className="h-10 w-full text-sm"
            >
              Cancel
            </Button>
            <Button type="button" className="h-10 w-full text-sm">
              Update
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
