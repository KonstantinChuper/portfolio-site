import { useState } from 'react'
import AnimatedLetters from '../Atoms/AnimatedLetters'
import { useLocation, useNavigate } from 'react-router-dom'

export default function NavItem({
  icon,
  children,
  onMouseEnter,
  onMouseLeave,
  href,
  isMobile = false,
  onClick
}) {
  const [isHovered, setIsHovered] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault()
    onClick && onClick()
    const isHomePage = location.pathname === '/'
    if (isHomePage) {
      document.querySelector(href)?.scrollIntoView({
        behavior: isMobile ? 'auto' : 'smooth',
        block: 'start'
      })
    } else {
      navigate('/', { state: { scrollTo: href.substring(1) } })
    }
  }

  if (isMobile) {
    return (
      <a
        href={href}
        onClick={handleClick}
        onMouseEnter={() => {
          setIsHovered(true)
          onMouseEnter && onMouseEnter()
        }}
        onMouseLeave={() => {
          setIsHovered(false)
          onMouseLeave && onMouseLeave()
        }}
        className="flex items-center w-4/5 justify-between px-6 py-4 mb-2 text-lg font-medium text-colorWhite hover:text-colorPrimary border-b border-gray-800 transition-colors duration-300"
      >
        <span>{children}</span>
        <span className="text-colorPrimary">{icon}</span>
      </a>
    )
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      onMouseEnter={() => {
        setIsHovered(true)
        onMouseEnter && onMouseEnter()
      }}
      onMouseLeave={() => {
        setIsHovered(false)
        onMouseLeave && onMouseLeave()
      }}
      className="flex items-center my-6 border border-gray-800 rounded-md group mx-7"
    >
      <div className="p-4 transition-all duration-500 bg-gray-800 rounded-md group-hover:bg-colorPrimary group-hover:text-colorMenu">
        <span className="text-white transition-all duration-500 group-hover:text-colorMenu">
          {icon}
        </span>
      </div>
      <div className="relative w-32 p-4 overflow-hidden rounded-md">
        <p className="m-0 uppercase text-colorTextSecondary">
          <AnimatedLetters isHovered={isHovered}>{children}</AnimatedLetters>
        </p>
      </div>
    </a>
  )
}
