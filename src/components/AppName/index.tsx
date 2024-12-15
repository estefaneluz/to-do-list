import { Kanban } from 'lucide-react'

type Props = {
  size?: 'small' | 'large'
}

export function AppName({ size = 'large' }: Props) {
  const theme = {
    small: {
      fontSize: '1.25rem',
      iconSize: 32
    },
    large: {
      fontSize: '1.875rem',
      iconSize: 42
    }
  }

  return (
    <h1 className="flex min-w-max items-center justify-center gap-2 font-bold">
      <Kanban size={theme[size].iconSize} />
      <p style={{ fontSize: theme[size].fontSize }}>To-Do List</p>
    </h1>
  )
}
