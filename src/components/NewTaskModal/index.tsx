import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Button } from '../ui/button'
import { Plus } from 'lucide-react'
import { InputWithLabel } from '../Fields/InputWithLabel'

export function NewTaskModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button" className="mr-auto">
          <Plus size={16} />
          New Task
        </Button>
      </DialogTrigger>

      <DialogContent className="gap-6">
        <DialogHeader>
          <DialogTitle>Create Task</DialogTitle>
        </DialogHeader>

        <form className="flex w-full max-w-lg flex-col gap-5">
          <InputWithLabel
            label="Description"
            type="text"
            placeholder="Describe your task"
          />

          <Button type="button" className="h-10 w-full text-sm">
            Create
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
