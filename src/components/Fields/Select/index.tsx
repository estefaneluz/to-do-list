import { Label } from '@/components/ui/label'
import clsx from 'clsx'
import { default as ReactSelect } from 'react-select'

type Props = {
  label?: string
} & React.ComponentProps<typeof ReactSelect>

export const Select = ({ label, ...props }: Props) => {
  return (
    <div className="grid w-full gap-1.5">
      {!!label && <Label>{label}</Label>}
      <ReactSelect
        unstyled
        classNames={{
          container: ({ isFocused }) =>
            clsx(
              'rounded-md border border-input bg-transparent px-3 text-sm shadow-sm transition-colors',
              {
                'outline-none ring-1 ring-ring': isFocused
              }
            ),
          option: () => clsx('p-2 hover:bg-secondary'),
          menu: () => clsx('-ml-2 mt-2 rounded-md border bg-white'),
          indicatorsContainer: () => clsx('text-gray-500'),
          multiValue: () =>
            clsx(
              'mr-2 flex items-center gap-2 rounded-md border border-gray-600/80 bg-primary-foreground px-2 py-1 text-gray-600'
            )
        }}
        {...props}
      />
    </div>
  )
}
