import { Button } from '@/components/ui/button'
import { PROTECTED_ROUTES } from '@/router/routes'
import clsx from 'clsx'

const Navbar = () => {
  const handleIsActive = (path: string) => {
    return window.location.pathname === path
  }

  return (
    <nav className="flex flex-col gap-2">
      {Object.values(PROTECTED_ROUTES).map((route) => {
        const isActive = handleIsActive(route.path)

        return (
          <Button
            key={route.path}
            className={clsx('justify-start font-normal', {
              'bg-accent text-primary font-normal hover:bg-accent hover:text-primary':
                isActive
            })}
            variant="ghost"
          >
            {route.icon}
            {route.name}
          </Button>
        )
      })}
    </nav>
  )
}

export default Navbar
