import { useState } from 'react'
import AnimatedLetters from '../Atoms/AnimatedLetters'

export default function NavItem({ icon, children, onMouseEnter, onMouseLeave, href }) {
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    const targetElement = document.querySelector(href)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
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
