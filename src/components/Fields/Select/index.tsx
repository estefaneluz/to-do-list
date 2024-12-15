import { Label } from '@/components/ui/label'
import { default as ReactSelect } from 'react-select'

type Props = {
  label?: string
} & React.ComponentProps<typeof ReactSelect>

export const Select = ({ label, ...props }: Props) => {
  return (
    <div className="grid w-full gap-1.5">
      {!!label && <Label>{label}</Label>}
      <ReactSelect {...props} />
    </div>
  )
}
