export type Module = 'all-tasks' | 'tags' | 'settings'
import AllTasks from '@/pages/AllTasks'
import { ListCheck, Settings, Tag } from 'lucide-react'

type Route = {
  path: string
  name: string
  icon: JSX.Element
  element: JSX.Element
  childrens?: Route[]
}

export type Routes = {
  [module in Module]: Route
}

const iconProps = {
  size: 16
}

export const PROTECTED_ROUTES = {
  'all-tasks': {
    path: '/',
    name: 'All Tasks',
    icon: <ListCheck {...iconProps} />,
    element: <AllTasks />
  },
  tags: {
    path: '/tags',
    name: 'Tags',
    icon: <Tag {...iconProps} />,
    element: <></>
  },
  settings: {
    path: '/settings',
    name: 'Settings',
    icon: <Settings {...iconProps} />,
    element: <></>
  }
} as Routes