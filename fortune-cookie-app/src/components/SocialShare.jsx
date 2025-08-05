import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Twitter, Facebook, Share2, Copy } from 'lucide-react'
import { useTheme } from '../App'

const SocialShare = ({ isOpen, onClose, fortune }) => {
  const { isDark } = useTheme()

  const shareToTwitter = () => {
    const text = `"${fortune}" ✨ My daily fortune from Fortune Cookie App!`
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`
    window.open(url, '_blank', 'width=550,height=420')
  }

  const shareToFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(fortune)}`
    window.open(url, '_blank', 'width=550,height=420')
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(`"${fortune}" ✨ - Fortune Cookie App`)
      // You could add a toast notification here
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  const shareNative = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Fortune Cookie',
          text: `"${fortune}" ✨`,
          url: window.location.href,
        })
      } catch (err) {
        console.error('Error sharing: ', err)
      }
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="social-share"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.div
            className={`share-modal ${isDark ? 'dark' : 'light'}`}
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '5px',
                color: isDark ? '#fff' : '#000',
                opacity: 0.7
              }}
            >
              <X size={20} />
            </button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h2 style={{ 
                fontSize: '24px', 
                marginBottom: '10px',
                fontWeight: '600'
              }}>
                Share Your Fortune
              </h2>
              
              <p style={{ 
                fontSize: '16px', 
                marginBottom: '25px',
                opacity: 0.8,
                lineHeight: '1.4'
              }}>
                Spread the positivity and brighten someone's day!
              </p>

              <div 
                style={{
                  background: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                  padding: '15px',
                  borderRadius: '10px',
                  marginBottom: '25px',
                  fontSize: '14px',
                  fontStyle: 'italic',
                  lineHeight: '1.4'
                }}
              >
                "{fortune}"
              </div>

              <div className="share-buttons">
                <motion.button
                  className="share-button twitter"
                  onClick={shareToTwitter}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  <Twitter size={18} style={{ marginRight: '8px' }} />
                  Twitter
                </motion.button>

                <motion.button
                  className="share-button facebook"
                  onClick={shareToFacebook}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                >
                  <Facebook size={18} style={{ marginRight: '8px' }} />
                  Facebook
                </motion.button>

                <motion.button
                  className="share-button"
                  onClick={copyToClipboard}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  style={{
                    background: isDark ? '#4a5568' : '#e2e8f0',
                    color: isDark ? '#fff' : '#000'
                  }}
                >
                  <Copy size={18} style={{ marginRight: '8px' }} />
                  Copy
                </motion.button>

                {navigator.share && (
                  <motion.button
                    className="share-button"
                    onClick={shareNative}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                    style={{
                      background: isDark ? '#805ad5' : '#9f7aea',
                      color: '#fff'
                    }}
                  >
                    <Share2 size={18} style={{ marginRight: '8px' }} />
                    Share
                  </motion.button>
                )}
              </div>

              <motion.p
                style={{
                  fontSize: '12px',
                  opacity: 0.6,
                  marginTop: '20px',
                  textAlign: 'center'
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                Come back tomorrow for another fortune! ✨
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SocialShare