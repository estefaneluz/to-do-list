import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useAuth } from '@/hooks/contexts/use-auth-context'

export function User() {
  const { user } = useAuth()

  const initials = (() => {
    const name = user.name.split(' ')
    if (name.length > 1) {
      return name[0][0] + name[1][0]
    }

    return name[0][0]
  })()

  return (
    <div className="flex items-center gap-3 py-2">
      <Avatar>
        <AvatarImage src="" />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>

      <div className="flex flex-col gap-1 text-sm">
        <h5 className="max-w-40 truncate font-semibold capitalize">
          {user.name}
        </h5>
        <p className="max-w-40 truncate text-xs lowercase">{user.email}</p>
      </div>
    </div>
  )
}
