import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function PortfolioElement({ image, title, to, setHovered }) {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
    setHovered && setHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setHovered && setHovered(false)
  }

  return (
    <Link
      to={to}
      className="relative overflow-hidden rounded-md block group "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-fit transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute bottom-0 left-0 w-full p-4 md:hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent -z-10"></div>
        <div className="flex justify-center items-center gap-2">
          <h3 className="text-white text-base sm:text-lg font-bold shrink-0">{title}</h3>
          <div className="w-full h-0.5 bg-colorPrimary"></div>
        </div>
      </div>

      <div
        className={`absolute bottom-0 left-0 w-full p-5 transition-all duration-300 ease-out hidden md:block
                   ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent -z-10"></div>
        <div className="flex justify-center items-center gap-4">
          <h3 className="text-white text-[1.4rem] font-bold shrink-0">{title}</h3>
          <div className="w-full h-0.5 bg-colorPrimary"></div>
        </div>
      </div>
    </Link>
  )
}
