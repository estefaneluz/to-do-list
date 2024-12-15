import { Plus } from 'lucide-react'
import { AppName } from '../AppName'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

export function Header() {
  return (
    <header className="relative z-20 flex min-h-header items-center gap-4 border-b  p-4">
      <AppName size="small" />
      <Input type="text" placeholder="Search tasks..." />

      <Button className="mr-auto">
        <Plus size={16} />
        New Task
      </Button>
    </header>
  )
}
