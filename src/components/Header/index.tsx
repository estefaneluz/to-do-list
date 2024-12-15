import { AppName } from '../AppName'
import { Input } from '../ui/input'
import { NewTaskModal } from '../Task/NewTaskModal'

export function Header() {
  return (
    <header className="relative z-20 flex min-h-header items-center justify-between gap-4 border-b  p-4">
      <AppName size="small" />
      <Input type="text" placeholder="Search tasks..." />

      <NewTaskModal />
    </header>
  )
}
