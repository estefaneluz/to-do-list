import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function User() {
  return (
    <div className="flex items-center gap-2 py-2">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <div className="flex flex-col gap-1 text-sm">
        <h5 className="font-semibold">Estefane Luz</h5>
        <p className="text-xs">estefanecortes@gmail.com</p>
      </div>
    </div>
  )
}
