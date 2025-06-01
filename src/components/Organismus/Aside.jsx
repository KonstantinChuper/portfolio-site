import { useState, useEffect } from 'react'
import KC from '../../assets/LOGO.png'
import NavItem from '../Molecules/NavItem'
import { RiHome5Line, RiMenuLine, RiCloseLine } from 'react-icons/ri'
import { PiCards } from 'react-icons/pi'
import { CiPen } from 'react-icons/ci'
import { HiOutlineChatBubbleLeftEllipsis } from 'react-icons/hi2'
import { LuContact } from 'react-icons/lu'
import { SlBriefcase } from 'react-icons/sl'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function Aside({ setHovered }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleNavClick = () => {
    if (windowWidth < 1024) {
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { key: 'home', icon: <RiHome5Line size={32} />, href: '#home', label: 'Home' },
    { key: 'about', icon: <PiCards size={32} />, href: '#about', label: 'About me' },
    { key: 'service', icon: <SlBriefcase size={32} />, href: '#service', label: 'Service' },
    { key: 'skills', icon: <CiPen size={32} />, href: '#skills', label: 'Skills' },
    {
      key: 'portfolio',
      icon: <HiOutlineChatBubbleLeftEllipsis size={32} />,
      href: '#portfolio',
      label: 'Portfolio'
    },
    { key: 'contact', icon: <LuContact size={32} />, href: '#contact', label: 'Contact' }
  ]

  return (
    <>
      <button
        className="fixed top-4 right-4 z-50 p-2 bg-colorMenu rounded-full shadow-lg lg:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {isMobileMenuOpen ? (
          <RiCloseLine size={28} className="text-colorPrimary" />
        ) : (
          <RiMenuLine size={28} className="text-colorPrimary" />
        )}
      </button>

      <aside className="sticky top-0 hidden lg:block w-64 h-screen overflow-y-auto border-solid border-r2 bg-colorMenu border-r-gray-800 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] shrink-0">
        <Link
          to="/"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="flex flex-col items-center justify-center bg-colorMenuTop py-9"
        >
          <img src={KC} alt="logo" className="w-28" />
          <p className="font-mono text-lg font-bold text-colorWhite">Konstantin Chuper</p>
          <p className="text-base font-semibold uppercase text-colorPrimary font-handjet">
            Web developer
          </p>
        </Link>
        <div className="list-none">
          <nav className="pt-4 list-none">
            {navItems.map((item) => (
              <NavItem
                key={item.key}
                icon={item.icon}
                href={item.href}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                {item.label}
              </NavItem>
            ))}
          </nav>
        </div>
      </aside>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 bg-colorBlack lg:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex flex-col items-center justify-center bg-colorMenuTop py-6 px-4">
                <img src={KC} alt="logo" className="w-20" />
                <p className="font-mono text-lg font-bold text-colorWhite">Konstantin Chuper</p>
                <p className="text-base font-semibold uppercase text-colorPrimary font-handjet">
                  Web developer
                </p>
              </div>

              <nav className="flex flex-col items-center justify-center flex-1 overflow-y-auto py-8">
                {navItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    className="flex items-center w-4/5 justify-between px-6 py-4 mb-2 text-lg font-medium text-colorWhite hover:text-colorPrimary border-b border-gray-800 transition-colors duration-300"
                    onClick={handleNavClick}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                  >
                    <span>{item.label}</span>
                    <span className="text-colorPrimary">{item.icon}</span>
                  </a>
                ))}
              </nav>

              <div className="py-6 text-center text-sm text-gray-400">
                <p>© 2025 Konstantin Chuper</p>
                <div className="mt-2">
                  <Link
                    to="/privacy-policy"
                    className="text-colorPrimary hover:underline"
                    onClick={handleNavClick}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="hidden md:block lg:hidden">
        <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-colorBlack bg-opacity-80 backdrop-blur-sm shadow-md flex items-center px-4">
          <Link to="/" className="flex items-center">
            <img src={KC} alt="logo" className="h-10 mr-3" />
            <span className="text-lg font-semibold text-colorWhite">Konstantin Chuper</span>
          </Link>
        </div>
        <div className="h-16"></div>
      </div>
    </>
  )
}