import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader
} from '@/components/ui/sidebar'
import { User } from './User'
import Navbar from './Navbar'
import { Button } from '../ui/button'

export function AppSidebar() {
  return (
    <Sidebar className="top-[--sidebar-top]">
      <SidebarHeader>
        <User />
      </SidebarHeader>
      <SidebarContent className="my-2">
        <Navbar />
      </SidebarContent>
      <SidebarFooter>
        <Button className="w-full">Logout</Button>
      </SidebarFooter>
    </Sidebar>
  )
}
