// components/ThemeToggle.
'use client';  
import { useDarkMode } from '@/app/hooks/useDarkMode'
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle() {
  const { isDark, toggleDark } = useDarkMode()

  return (
    <button
      onClick={toggleDark}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-gray-800" />
      )}
    </button>
  )
}
