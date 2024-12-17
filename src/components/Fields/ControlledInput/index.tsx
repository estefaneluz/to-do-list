import { InputHTMLAttributes } from 'react'
import {
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
import { InputWithLabel } from '../InputWithLabel'

type ControlledInputProps<T extends FieldValues> = UseControllerProps<T> &
  InputHTMLAttributes<HTMLInputElement> & {
    label: string
    containerClass?: string
  }

export function ControlledInput<T extends FieldValues>({
  control,
  name,
  defaultValue = '' as PathValue<T, Path<T>>,
  rules,
  shouldUnregister,
  label,
  onChange,
  containerClass,
  ...props
}: ControlledInputProps<T>) {
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
            <InputWithLabel
              label={label}
              {...field}
              {...props}
              onChange={(e) => {
                onChange && onChange(e)
                field.onChange(e)
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
