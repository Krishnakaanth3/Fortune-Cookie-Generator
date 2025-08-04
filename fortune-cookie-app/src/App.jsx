import React, { useState, createContext, useContext } from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import FortuneCookie from './components/FortuneCookie'
import './App.css'

// Theme Context
const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

function App() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div className={`app ${isDark ? 'dark' : 'light'}`}>
        <header className="header">
          <motion.button
            className="theme-toggle"
            onClick={toggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isDark ? <Sun size={24} /> : <Moon size={24} />}
          </motion.button>
        </header>

        <main className="main">
          <FortuneCookie />
        </main>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
