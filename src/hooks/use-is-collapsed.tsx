'use client'
import { useEffect, useState } from 'react'

export const useIsCollapsed = () => {
  const [isCollapsed, setIsCollapsed] = useState(() => {
    const storedValue = localStorage.getItem('collapsed-sidebar')
    return storedValue ? JSON.parse(storedValue) : false
  })

  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth < 768 ? false : isCollapsed)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isCollapsed])

  useEffect(() => {
    localStorage.setItem('collapsed-sidebar', JSON.stringify(isCollapsed))
  }, [isCollapsed])

  return [isCollapsed, setIsCollapsed] as const
}