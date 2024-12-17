import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader
} from '@/components/ui/sidebar'
import { User } from './User'
import Navbar from './Navbar'
import { Button } from '../ui/button'
import { LogOut } from 'lucide-react'
import { useAuth } from '@/hooks/contexts/use-auth-context'

export function AppSidebar() {
  const { signOut } = useAuth()

  return (
    <Sidebar className="min-h-full grow">
      <SidebarHeader className="mt-[var(--header-height)]">
        <User />
      </SidebarHeader>
      <SidebarContent className="my-2">
        <Navbar />
      </SidebarContent>
      <SidebarFooter>
        <Button variant="outline" className="w-full" onClick={signOut}>
          <LogOut size={16} />
          Sign Out
        </Button>
      </SidebarFooter>
    </Sidebar>
  )
}
