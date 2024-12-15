import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { InputWithLabel } from '@/components/Fields/InputWithLabel'
import { badgeVariants } from '@/components/ui/badge'
import { DialogDescription } from '@radix-ui/react-dialog'
import clsx from 'clsx'

export function NewTagModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          className={clsx(badgeVariants({ variant: 'outline' }), 'font-normal')}
        >
          <Plus size={12} /> Add Tag
        </Button>
      </DialogTrigger>

      <DialogContent className="gap-6">
        <DialogHeader>
          <DialogTitle>Create Tag</DialogTitle>
          <DialogDescription className="text-xs">
            Tags are used to group tasks and organize your to-do list.
          </DialogDescription>
        </DialogHeader>

        <form className="flex w-full max-w-lg flex-col gap-5">
          <InputWithLabel
            label="Name"
            type="text"
            placeholder="Describe your tag"
          />

          <InputWithLabel
            className="max-w-20"
            label="Color"
            type="color"
            placeholder="Describe your tag"
          />

          <Button type="button" className="h-10 w-full text-sm">
            Create
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
