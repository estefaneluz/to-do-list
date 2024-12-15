import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Trash } from 'lucide-react'
import { DialogDescription } from '@radix-ui/react-dialog'

type Props = {
  taskDescription: string
}

export function DeleteTaskModal({ taskDescription }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="px-3 text-gray-600" variant="ghost">
          <Trash />
        </Button>
      </DialogTrigger>

      <DialogContent className="gap-6">
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription className="text-sm">
            Are you sure you want to delete the{' '}
            <strong>&quot;{taskDescription}&quot;</strong> task? This action
            cannot be reversed.
          </DialogDescription>
        </DialogHeader>

        <div className="flex items-center justify-center gap-2">
          <Button
            variant="outline"
            type="button"
            className="h-10 w-full text-sm"
          >
            Cancel
          </Button>
          <Button
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
