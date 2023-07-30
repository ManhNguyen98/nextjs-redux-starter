'use client'
import { useTheme } from 'next-themes'
import { BsMoon, BsSun } from 'react-icons/bs'

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()
  const isDarkMode = theme === 'dark'

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark'
    setTheme(newTheme)
  }
  return (
    <div className="btn btn-sm" onClick={toggleTheme}>
      {isDarkMode ? <BsMoon /> : <BsSun />}
    </div>
  )
}

export default ThemeSwitcher
