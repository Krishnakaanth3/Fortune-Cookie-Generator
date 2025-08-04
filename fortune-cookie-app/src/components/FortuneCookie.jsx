import React, { useState, useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion'
import { useTheme } from '../App'
import { fortunes } from '../data/fortunes'
import SocialShare from './SocialShare'

const FortuneCookie = () => {
  const { isDark } = useTheme()
  const [isOpened, setIsOpened] = useState(false)
  const [currentFortune, setCurrentFortune] = useState('')
  const [showFortune, setShowFortune] = useState(false)
  const [showShare, setShowShare] = useState(false)
  const [lastOpenTime, setLastOpenTime] = useState(null)
  const [timeUntilNext, setTimeUntilNext] = useState('')
  const [canOpenCookie, setCanOpenCookie] = useState(true)
  
  const cookieRef = useRef(null)
  const paperRef = useRef(null)
  
  // Motion values for dragging
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [30, -30])
  const rotateY = useTransform(x, [-100, 100], [-30, 30])
  
  // Paper dragging
  const paperY = useMotionValue(0)
  const paperOpacity = useTransform(paperY, [0, -100], [1, 0])
  
  // Load saved state
  useEffect(() => {
    const saved = localStorage.getItem('fortuneCookieState')
    if (saved) {
      const state = JSON.parse(saved)
      if (state.lastOpenTime) {
        const now = new Date().getTime()
        const timeSinceOpen = now - state.lastOpenTime
        const thirtyMinutes = 30 * 60 * 1000
        
        if (timeSinceOpen < thirtyMinutes) {
          setLastOpenTime(state.lastOpenTime)
          setCurrentFortune(state.fortune)
          setIsOpened(true)
          setShowFortune(true)
          setCanOpenCookie(false)
        }
      }
    }
  }, [])
  
  // Timer countdown
  useEffect(() => {
    if (!lastOpenTime) return
    
    const interval = setInterval(() => {
      const now = new Date()
      const openTime = new Date(lastOpenTime)
      
      // Calculate time until next day
      const nextDay = new Date(openTime)
      nextDay.setDate(nextDay.getDate() + 1)
      nextDay.setHours(0, 0, 0, 0)
      
      const timeLeft = nextDay.getTime() - now.getTime()
      
      if (timeLeft <= 0) {
        setCanOpenCookie(true)
        setIsOpened(false)
        setShowFortune(false)
        setLastOpenTime(null)
        setCurrentFortune('')
        localStorage.removeItem('fortuneCookieState')
        setTimeUntilNext('')
      } else {
        const hours = Math.floor(timeLeft / (1000 * 60 * 60))
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)
        setTimeUntilNext(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`)
      }
    }, 1000)
    
    return () => clearInterval(interval)
  }, [lastOpenTime])
  
  // Show social share after 10 seconds
  useEffect(() => {
    if (showFortune && currentFortune) {
      const timer = setTimeout(() => {
        setShowShare(true)
      }, 10000)
      
      return () => clearTimeout(timer)
    }
  }, [showFortune, currentFortune])
  
  const handleCookieClick = () => {
    if (!canOpenCookie || isOpened) return
    
    // Select random fortune
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)]
    const now = new Date().getTime()
    
    setCurrentFortune(randomFortune)
    setLastOpenTime(now)
    setIsOpened(true)
    
    // Save state
    localStorage.setItem('fortuneCookieState', JSON.stringify({
      fortune: randomFortune,
      lastOpenTime: now
    }))
    
    // Start 30-minute timer
    setTimeout(() => {
      setCanOpenCookie(false)
    }, 100)
  }
  
  const handlePaperDrag = (event, info) => {
    if (info.offset.y < -80 && !showFortune) {
      setShowFortune(true)
      paperY.set(-200)
    }
  }
  
  const getRandomRotation = () => {
    return Math.random() * 360
  }

  return (
    <div className="fortune-container">
      {timeUntilNext && (
        <motion.div 
          className="timer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Next cookie in: {timeUntilNext}
        </motion.div>
      )}
      
      <motion.div
        ref={cookieRef}
        className="cookie"
        style={{
          x,
          y,
          rotateX,
          rotateY,
          rotateZ: isOpened ? getRandomRotation() : 0
        }}
        drag={canOpenCookie && !isOpened}
        dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
        dragElastic={0.2}
        whileHover={{ scale: canOpenCookie ? 1.05 : 1 }}
        whileTap={{ scale: canOpenCookie ? 0.95 : 1 }}
        onClick={handleCookieClick}
        animate={{
          rotateZ: isOpened ? [0, 180, 360] : 0,
          scale: isOpened ? [1, 1.1, 1] : 1
        }}
        transition={{
          rotateZ: { duration: 1, ease: "easeInOut" },
          scale: { duration: 0.5, ease: "easeOut" }
        }}
      >
        <div className={`cookie-shape ${isDark ? 'dark' : 'light'}`}>
          {/* Cookie texture */}
          <div style={{
            position: 'absolute',
            top: '20%',
            left: '30%',
            width: '8px',
            height: '8px',
            background: '#8b6914',
            borderRadius: '50%',
            opacity: 0.6
          }} />
          <div style={{
            position: 'absolute',
            top: '60%',
            right: '25%',
            width: '6px',
            height: '6px',
            background: '#8b6914',
            borderRadius: '50%',
            opacity: 0.6
          }} />
          <div style={{
            position: 'absolute',
            bottom: '30%',
            left: '40%',
            width: '7px',
            height: '7px',
            background: '#8b6914',
            borderRadius: '50%',
            opacity: 0.6
          }} />
        </div>
        
        {/* Fortune Paper */}
        <AnimatePresence>
          {isOpened && !showFortune && (
            <motion.div
              ref={paperRef}
              className={`fortune-paper ${isDark ? 'dark' : 'light'}`}
              style={{
                y: paperY,
                opacity: paperOpacity
              }}
              drag="y"
              dragConstraints={{ top: -200, bottom: 0 }}
              dragElastic={0.1}
              onDrag={handlePaperDrag}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileDrag={{ scale: 1.1 }}
            >
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '10px',
                color: '#666',
                fontWeight: '500',
                textAlign: 'center',
                lineHeight: '1.2'
              }}>
                Pull me up!
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      
      {/* Fortune Display */}
      <AnimatePresence>
        {showFortune && currentFortune && (
          <motion.div
            className={`fortune-display ${isDark ? 'dark' : 'light'}`}
            initial={{ scale: 0, opacity: 0, rotateY: 180 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            exit={{ scale: 0, opacity: 0, rotateY: -180 }}
            transition={{ 
              duration: 0.6, 
              ease: "easeOut",
              rotateY: { duration: 0.8 }
            }}
          >
            <motion.p 
              className="fortune-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {currentFortune}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              style={{
                fontSize: '14px',
                opacity: 0.7,
                fontStyle: 'italic'
              }}
            >
              ✨ Your daily fortune ✨
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Social Share Modal */}
      <SocialShare 
        isOpen={showShare} 
        onClose={() => setShowShare(false)} 
        fortune={currentFortune}
      />
    </div>
  )
}

export default FortuneCookie