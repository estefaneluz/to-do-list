import { AppName } from '../AppName'
import { NewTaskModal } from '../Task/NewTaskModal'

export function Header() {
  return (
    <header className="relative z-20 flex min-h-header items-center justify-between gap-4 border-b bg-white p-4">
      <AppName size="small" />

      <NewTaskModal />
    </header>
  )
}
