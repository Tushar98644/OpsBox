import { cn } from '@/lib/utils'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { IconMenu } from '@tabler/icons-react'
import Link from 'next/link'

interface TopNavProps extends React.HTMLAttributes<HTMLElement> {
  links: {
    title: string
    href: string
    isActive: boolean
  }[]
}

export const Navbar = ({ className, links, ...props }: TopNavProps) => {
  return (
    <>
      <div className='md:hidden'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size='icon' variant='outline'>
              <IconMenu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side='bottom' align='start'>
            {links.map(({ title, href, isActive }) => (
              <DropdownMenuItem key={`${title}-${href}`} asChild>
                <Link
                  href={href}
                  className={!isActive ? 'text-muted-foreground' : ''}
                >
                  {title}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <nav
        className={cn(
          'hidden ml-20 items-center space-x-4 md:flex md:space-x-8',
          className
        )}
        {...props}
      >
        {links.map(({ title, href, isActive }) => (
          <Link
            key={`${title}-${href}`}
            href={href}
            className={`text-sm font-medium transition-colors hover:text-primary ${isActive ? '' : 'text-muted-foreground'}`}
          >
            {title}
          </Link>
        ))}
      </nav>
    </>
  )
}
