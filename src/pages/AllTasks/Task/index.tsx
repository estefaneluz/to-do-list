import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Pencil, Trash } from 'lucide-react'

export function Task() {
  return (
    <div className="flex items-center gap-2 rounded-sm border bg-white p-4">
      <Checkbox />
      <p className="grow">Update website content</p>

      <Badge className="mr-2">Work</Badge>

      <div className=" flex items-center gap-1">
        <Button className="px-3 text-gray-600" variant="ghost">
          <Pencil />
        </Button>
        <Button className="px-3 text-gray-600" variant="ghost">
          <Trash />
        </Button>
      </div>
    </div>
  )
}
