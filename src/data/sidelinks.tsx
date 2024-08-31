import {
  IconLayoutDashboard,
  IconMessages,
  IconSettings,
  IconFolder
} from '@tabler/icons-react'

export interface NavLink {
  title: string
  label?: string
  href: string
  icon: JSX.Element
}

// export interface SideLink extends NavLink {
//   sub?: NavLink[]
// }

export const sidelinks = [
  {
    title: 'Home',
    label: '',
    href: '/',
    icon: <IconLayoutDashboard size={18} />,
  },
  {
    title: 'Projects',
    label: '',
    href: '/projects',
    icon: <IconFolder size={18} />,
  },
  {
    title: 'New Project',
    label: '',
    href: '/projects/new',
    icon: <IconMessages size={18} />,
  },
  {
    title: 'Settings',
    label: '',
    href: '/settings',
    icon: <IconSettings size={18} />,
  },
]
