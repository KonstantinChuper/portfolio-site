import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiX, FiCheck } from 'react-icons/fi'
import ContentContainer from '../Atoms/ContentContainer'
import { Link } from 'react-router-dom'

export default function CookieBanner({ setHovered }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted')
    if (!cookiesAccepted) {
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true')
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookiesDeclined', 'true')
    localStorage.setItem('cookiesAccepted', 'false')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-50"
    >
      <div className="bg-colorMenu border-t border-gray-800">
        <ContentContainer>
          <div className="py-6 px-4 md:flex md:items-center md:justify-between">
            <div className="md:flex-1 md:pr-8">
              <h3 className="text-xl font-bold text-colorWhite mb-2">Cookie Preferences</h3>
              <p className="text-gray-300 text-sm">
                This website uses cookies to enhance your browsing experience, analyze site traffic,
                and provide personalized content. By clicking "Accept All", you consent to our use
                of cookies. You can learn more about our cookie policy in our{' '}
                <Link
                  to="/privacy-policy"
                  className="text-colorPrimary hover:underline"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
            <div className="mt-6 md:mt-0 flex flex-col sm:flex-row gap-4 items-center">
              {/* <button
                className="w-full sm:w-auto px-6 py-2 bg-black border border-gray-700 text-gray-300 rounded hover:border-colorPrimary transition-colors"
                onClick={declineCookies}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <span className="flex items-center justify-center">
                  <FiX className="mr-2" /> Decline
                </span>
              </button> */}
              <button
                className="w-full sm:w-auto px-6 py-2 bg-colorPrimary text-colorBlack font-medium rounded hover:bg-opacity-90 transition-colors"
                onClick={acceptCookies}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <span className="flex items-center justify-center">
                  <FiCheck className="mr-2" /> Accept All
                </span>
              </button>
            </div>
          </div>
        </ContentContainer>
      </div>
    </motion.div>
  )
}
