import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Trash } from 'lucide-react'
import { DialogDescription } from '@radix-ui/react-dialog'
import { Task } from '@/types/task'
import { useDeleteTask } from '@/hooks/queries/use-task'
import { useState } from 'react'

type Props = {
  task: Task
}

export function DeleteTaskModal({ task }: Props) {
  const [open, setOpen] = useState(false)
  const { mutate: deleteTask, isPending: isDeleting } = useDeleteTask()

  const handleDelete = () => {
    deleteTask(
      { id: task.id },
      {
        onSuccess: () => {
          setOpen(false)
        }
      }
    )
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="px-3 text-gray-600 hover:text-red-600"
          variant="ghost"
        >
          <Trash />
        </Button>
      </DialogTrigger>

      <DialogContent className="gap-6">
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription className="text-sm">
            Are you sure you want to delete the{' '}
            <strong>&quot;{task.title}&quot;</strong> task? This action cannot
            be reversed.
          </DialogDescription>
        </DialogHeader>

        <div className="flex items-center justify-center gap-2">
          <DialogClose asChild>
            <Button
              variant="outline"
              type="button"
              className="h-10 w-full text-sm"
            >
              Cancel
            </Button>
          </DialogClose>
          <Button
            disabled={isDeleting}
            onClick={handleDelete}
            variant="destructive"
            type="button"
            className="h-10 w-full text-sm"
          >
            Delete
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
