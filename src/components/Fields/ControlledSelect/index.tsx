import {
  ControllerRenderProps,
  FieldValues,
  Path,
  PathValue,
  UseControllerProps
} from 'react-hook-form'
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import { Props as SelectProps } from 'react-select'
import { Select } from '../Select'
import { Option } from '@/types/option'

type ControlledInputProps<T extends FieldValues> = UseControllerProps<T> &
  SelectProps & {
    options: Option[]
    containerClass?: string
    label?: string
    isClearable?: boolean
    children?: JSX.Element
    truncate?: boolean
  }

function ControlledSelect<T extends FieldValues>({
  control,
  name,
  defaultValue = '' as PathValue<T, Path<T>>,
  rules,
  shouldUnregister,
  containerClass,
  className,
  options,
  ...props
}: ControlledInputProps<T>) {
  const value = (field: ControllerRenderProps<T, Path<T>>) =>
    field.value?.value || (props.isMulti && field.value) ? field.value : null

  return (
    <FormField
      control={control}
      name={name}
      defaultValue={defaultValue}
      rules={rules}
      shouldUnregister={shouldUnregister}
      render={({ field }) => (
        <FormItem className={containerClass}>
          <FormControl>
            <Select
              className={className}
              options={options}
              defaultValue={defaultValue}
              value={value(field)}
              onChange={(value) => field.onChange(value)}
              {...props}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default ControlledSelect
