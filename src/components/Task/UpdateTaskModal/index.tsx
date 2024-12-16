import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Pencil } from 'lucide-react'
import { Task } from '@/types/task'
import { TaskStatus } from '@/enum/task-status'
import { Form } from '@/components/ui/form'
import yup from '@/api/yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useUpdateTask } from '@/hooks/queries/use-task'
import { ControlledInput } from '@/components/Fields/ControlledInput'
import { useGetTags } from '@/hooks/queries/use-get-tags'
import ControlledSelect from '@/components/Fields/ControlledSelect'
import { useEffect, useState } from 'react'

type Props = {
  task: Task
}

export function UpdateTaskModal({ task }: Props) {
  const [open, setOpen] = useState(false)

  const UpdateTask = yup.object({
    title: yup.string().required(),
    status: yup
      .object({
        value: yup.string().required(),
        label: yup.string().required()
      })
      .required(),
    tags: yup.array()
  })

  const { mutate: updateTask, isPending: isUpdating } = useUpdateTask()
  const { data: tags, isLoading: tagsLoading } = useGetTags()

  const tags_options =
    tags?.map((tag) => ({
      label: tag.name,
      value: tag.id
    })) ?? []

  const status_options = Object.values(TaskStatus).map((status) => ({
    label: status,
    value: status
  }))

  const defaultValues = {
    title: task.title,
    status:
      status_options.find((status) => status.value === task.status) ??
      status_options[0],
    tags:
      task.tags.map((tag) => ({
        label: tag.name,
        value: tag.id
      })) ?? []
  }

  const form = useForm({
    resolver: yupResolver(UpdateTask),
    defaultValues
  })

  const onSubmit = (data: yup.InferType<typeof UpdateTask>) => {
    updateTask(
      {
        id: task.id,
        title: data.title,
        status: data.status?.value as TaskStatus,
        tags: data?.tags?.map((tag) => tag.value) ?? []
      },
      {
        onSuccess: () => {
          setOpen(false)
        }
      }
    )
  }

  useEffect(() => {
    if (!open) {
      form.reset()
    }
  }, [form, open])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="px-3 text-gray-600" variant="ghost">
          <Pencil />
        </Button>
      </DialogTrigger>

      <DialogContent className="gap-6">
        <DialogHeader>
          <DialogTitle>Update Task</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            className="flex w-full max-w-lg flex-col gap-5"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <ControlledInput
              label="Title"
              name="title"
              type="text"
              defaultValue={task.title}
              control={form.control}
            />

            <ControlledSelect
              label="Status"
              name="status"
              defaultValue={status_options.find(
                (option) => option.value === task.status
              )}
              options={status_options}
              control={form.control}
            />

            <ControlledSelect
              label="Tags"
              name="tags"
              closeMenuOnSelect={false}
              isMulti
              isClearable
              isLoading={tagsLoading}
              options={tags_options}
              control={form.control}
            />

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
                disabled={isUpdating}
                type="submit"
                className="h-10 w-full text-sm"
              >
                Update
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
