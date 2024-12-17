import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/AppSidebar'
import { Header } from '@/components/Header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <SidebarProvider>
        <AppSidebar />
        <main className="h-content w-full bg-gray-100">
          <SidebarTrigger />
          <div className="bg-gray-100 px-6  py-4">{children}</div>
        </main>
      </SidebarProvider>
    </div>
  )
}
