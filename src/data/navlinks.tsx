export interface TopNavLink {
  title: string
  href: string
  isActive: boolean
}

export const Navlinks: TopNavLink[] = [
  {
    title: 'Overview',
    href: '/dashboard',
    isActive: true,
  },
  {
    title: 'Projects',
    href: '/projects',
    isActive: false,
  },
  {
    title: 'Create Project',
    href: '/projects/new',
    isActive: false,
  },
  {
    title: 'Settings',
    href: '/settings',
    isActive: false,
  },
]
