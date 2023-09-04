import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { BiMoon, BiSun } from 'react-icons/bi'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  function isDark() {
    return theme === 'dark'
  }

  return (
    <button
      className="focus:outline-none"
      onClick={() => setTheme(isDark() ? 'light' : 'dark')}
      aria-label="Theme toggle"
    >
      {isDark() ? (
        <BiSun size={25} style={{ color: '#ffc300' }} />
      ) : (
        <BiMoon size={25} style={{ color: '#fff' }} />
      )}
    </button>
  )
}
