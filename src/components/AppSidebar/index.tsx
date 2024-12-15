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

export function AppSidebar() {
  return (
    <Sidebar className="top-[var(--header-height)]">
      <SidebarHeader>
        <User />
      </SidebarHeader>
      <SidebarContent className="my-2">
        <Navbar />
      </SidebarContent>
      <SidebarFooter>
        <Button variant="outline" className="w-full">
          <LogOut size={16} />
          Logout
        </Button>
      </SidebarFooter>
    </Sidebar>
  )
}
