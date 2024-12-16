import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { badgeVariants } from '@/components/ui/badge'
import { DialogDescription } from '@radix-ui/react-dialog'
import clsx from 'clsx'
import { Form } from '@/components/ui/form'
import { ControlledInput } from '@/components/Fields/ControlledInput'
import { useCreateTag } from '@/hooks/queries/use-get-tags'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import yup from '@/api/yup'
import { useEffect, useState } from 'react'
import { AxiosError } from 'axios'

export function NewTagModal() {
  const [open, setOpen] = useState(false)

  const NewTag = yup.object({
    name: yup.string().required(),
    hex_color: yup.string().required()
  })

  const form = useForm({
    resolver: yupResolver(NewTag)
  })

  const { mutate: createTag, isPending: isCreating } = useCreateTag()

  useEffect(() => {
    if (!open) form.reset()
  }, [form, open])

  const onSubmit = (data: yup.InferType<typeof NewTag>) => {
    createTag(data, {
      onSuccess() {
        setOpen(false)
      },
      onError(error) {
        if (error instanceof AxiosError) {
          Object.entries(error.response?.data).forEach(([key, value]) => {
            form.setError(key as 'name' | 'hex_color', {
              message: value as string
            })
          })
        }
      }
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          className={clsx(
            badgeVariants({ variant: 'outline' }),
            'ml-auto font-normal'
          )}
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

        <Form {...form}>
          <form
            className="flex w-full max-w-lg flex-col gap-5"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <ControlledInput
              label="Name"
              name="name"
              type="text"
              placeholder="Describe your tag"
              control={form.control}
            />

            <ControlledInput
              className="max-w-20"
              name="hex_color"
              label="Color"
              type="color"
              placeholder="Describe your tag"
              control={form.control}
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
