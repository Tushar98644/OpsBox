import {
    IconLayoutDashboard,
    IconMessages,
    IconSettings,
    IconFolder
  } from '@tabler/icons-react'

  export interface TopNavLink {
    title: string
    href: string
    isActive: boolean
  }
  
  export const Navlinks : TopNavLink[] = [
    {
      title: 'Overview',
      href: 'dashboard/overview',
      isActive: true,
    },
    {
      title: 'Customers',
      href: 'dashboard/customers',
      isActive: false,
    },
    {
      title: 'Products',
      href: 'dashboard/products',
      isActive: false,
    },
    {
      title: 'Settings',
      href: 'dashboard/settings',
      isActive: false,
    },
  ]
  