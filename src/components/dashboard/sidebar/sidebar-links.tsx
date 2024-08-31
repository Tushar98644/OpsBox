'use client'
import { useEffect, useState } from 'react';
import { IconChevronsLeft, IconMenu2, IconX } from '@tabler/icons-react';
import { Button } from '@/components/button';
import Nav from './side-nav';
import { cn } from '@/lib/utils';
import { sidelinks } from '@/data/sidelinks';

export default function Sidebar() {
  const [navOpened, setNavOpened] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', navOpened);
  }, [navOpened]);

  return (
    <aside
      className={cn(
        `fixed left-0 right-0 top-0 z-50 w-full border-r-2 transition-[width] md:bottom-0 md:right-auto h-screen`,
        collapsed ? 'md:w-14' : 'md:w-64'
      )}
    >
      {/* Mobile Overlay */}
      {navOpened && (
        <div
          onClick={() => setNavOpened(false)}
          className='absolute inset-0 h-svh w-full bg-black opacity-50 md:hidden'
        />
      )}

      {/* Sidebar Header */}
      <div className='z-50 flex justify-between px-4 py-3 shadow-sm md:px-4'>
        <div className={`flex items-center ${!collapsed ? 'gap-2' : ''}`}>
          {!collapsed && (
            <div className='flex flex-col px-8 justify-end truncate'>
              <span className='font-medium'>Slate Admin</span>
              <span className='text-xs'>Slate</span>
            </div>
          )}
        </div>

        {/* Toggle Button for Mobile */}
        <Button
          variant='ghost'
          size='icon'
          className='md:hidden'
          aria-label='Toggle Navigation'
          onClick={() => setNavOpened((prev) => !prev)}
        >
          {navOpened ? <IconX /> : <IconMenu2 />}
        </Button>
      </div>

      {/* Navigation Links */}
      <Nav
        className={cn(
          'z-40 h-full flex-1 overflow-auto transition-[max-height]',
          navOpened ? 'max-h-screen' : 'max-h-0 py-0 md:max-h-screen md:py-2'
        )}
        closeNav={() => setNavOpened(false)}
        isCollapsed={collapsed}
        links={sidelinks}
      />

      <Button
        onClick={() => setCollapsed((prev) => !prev)}
        size='icon'
        variant='outline'
        className='absolute -right-5 top-1/3 z-50 hidden rounded-full md:flex'
      >
        <IconChevronsLeft
          stroke={1.5}
          className={`h-5 w-5 transition-transform ${collapsed ? 'rotate-180' : ''}`}
        />
      </Button>
    </aside>
  );
}