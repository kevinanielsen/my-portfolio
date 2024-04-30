'use client'

import { BiMoon, BiSun } from 'react-icons/bi'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

const RenderThemeChanger = () => {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()

  const currentTheme = theme === 'system' ? systemTheme : theme

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  if (currentTheme === 'dark') {
    return (
      <button onClick={() => setTheme('light')} className="text-2xl">
        <span className="sr-only">Switch to light theme</span>
        <BiSun size="1.25em" />
      </button>
    )
  } else {
    return (
      <button onClick={() => setTheme('dark')} className="text-2xl">
        <span className="sr-only">Switch to dark theme</span>
        <BiMoon size="1.25em" />
      </button>
    )
  }
}

export default RenderThemeChanger
