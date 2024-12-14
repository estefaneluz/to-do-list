import { Kanban } from 'lucide-react'

export function AppName() {
  return (
    <h1 className="flex items-center justify-center gap-2 text-3xl font-bold">
      <Kanban size={42} />
      To-Do List
    </h1>
  )
}
