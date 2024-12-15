import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

type Props = {
  label: string
} & React.ComponentProps<typeof Input>

export function InputWithLabel({ label, ...props }: Props) {
  return (
    <div className="grid w-full items-center gap-1.5">
      <Label htmlFor={props.id}>{label}</Label>
      <Input {...props} />
    </div>
  )
}
