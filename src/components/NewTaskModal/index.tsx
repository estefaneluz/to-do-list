import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Button } from '../ui/button'
import { Plus } from 'lucide-react'
import { Form } from '@/components/ui/form'
import yup from '@/api/yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { ControlledInput } from '@/components/Fields/ControlledInput'
import { useForm } from 'react-hook-form'
import { useCreateTask } from '@/hooks/queries/use-task'
import { useState } from 'react'

export function NewTaskModal() {
  const [open, setOpen] = useState(false)

  const NewTask = yup.object({
    title: yup.string().required()
  })

  const form = useForm({
    resolver: yupResolver(NewTask)
  })

  const { mutate: createTask, isPending: isCreating } = useCreateTask()

  const onSubmit = (data: yup.InferType<typeof NewTask>) => {
    createTask(data, {
      onSuccess() {
        setOpen(false)
      }
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button type="button">
          <Plus size={16} />
          New Task
        </Button>
      </DialogTrigger>

      <DialogContent className="gap-6">
        <DialogHeader>
          <DialogTitle>Create Task</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            className="flex w-full max-w-lg flex-col gap-5"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <ControlledInput
              control={form.control}
              label="Title"
              name="title"
              type="text"
              placeholder="Describe your task"
            />

            <Button
              disabled={isCreating}
              type="submit"
              className="h-10 w-full text-sm"
            >
              Create
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
