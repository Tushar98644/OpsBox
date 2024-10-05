'use client'
import { useEffect, useState } from 'react'

export const useIsCollapsed = () => {
  const [isCollapsed, setIsCollapsed] = useState(() => {
    const storedValue = localStorage.getItem('collapsed-sidebar')
    return storedValue ? JSON.parse(storedValue) : false
  })

  useEffect(() => {
    const handleResize = () => {
      // Collapse the sidebar if window width is less than 768px, else retain the current state from localStorage
      if (window.innerWidth < 768) {
        setIsCollapsed(true)
      } else {
        const storedValue = localStorage.getItem('collapsed-sidebar')
        setIsCollapsed(storedValue ? JSON.parse(storedValue) : false)
      }
    }

    handleResize();

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    // Update localStorage whenever isCollapsed changes
    localStorage.setItem('collapsed-sidebar', JSON.stringify(isCollapsed))
  }, [isCollapsed])

  return [isCollapsed, setIsCollapsed] as const
}