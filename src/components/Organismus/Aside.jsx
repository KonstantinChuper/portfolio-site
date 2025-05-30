import KC from '../../assets/LOGO.png'
import NavItem from '../Molecules/NavItem'
import { RiHome5Line } from 'react-icons/ri'
import { PiCards } from 'react-icons/pi'
import { CiPen } from 'react-icons/ci'
import { HiOutlineChatBubbleLeftEllipsis } from 'react-icons/hi2'
import { LuContact } from 'react-icons/lu'
import { SlBriefcase } from 'react-icons/sl'
import { Link } from 'react-router-dom'

export default function Aside({ setHovered }) {
  return (
    <aside className="sticky w-64 h-screen overflow-y-auto border-solid border-r2 bg-colorMenu border-r-gray-800 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] shrink-0">
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
          <NavItem
            key="home"
            icon={<RiHome5Line size={32} />}
            href="#home"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            Home
          </NavItem>
          <NavItem
            key="about"
            icon={<PiCards size={32} />}
            href="#about"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            About me
          </NavItem>
          <NavItem
            key="service"
            icon={<SlBriefcase size={32} />}
            href="#service"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            Service
          </NavItem>
          <NavItem
            key="skills"
            icon={<CiPen size={32} />}
            href="#skills"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            Skills
          </NavItem>
          <NavItem
            key="portfolio"
            icon={<HiOutlineChatBubbleLeftEllipsis size={32} />}
            href="#portfolio"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            Portfolio
          </NavItem>
          <NavItem
            key="contact"
            icon={<LuContact size={32} />}
            href="#contact"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            Contact
          </NavItem>
        </nav>
      </div>
    </aside>
  )
}
