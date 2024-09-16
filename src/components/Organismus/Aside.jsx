import KC from "../../assets/LOGO.png";
import NavItem from "../Molecules/NavItem";
import { RiHome5Line } from "react-icons/ri";
import { PiCards } from "react-icons/pi";
import { CiPen } from "react-icons/ci";
import { HiOutlineChatBubbleLeftEllipsis } from "react-icons/hi2";
import { LuContact } from "react-icons/lu";
import { SlBriefcase } from "react-icons/sl";

export default function Aside({ setHovered }) {
  return (
    <aside className="sticky h-screen bg-colorMenu w-64 border-solid border-r-2 border-r-gray-800">
      <div className="bg-colorMenuTop flex justify-center items-center py-9 flex-col">
        <img src={KC} alt="logo" className="w-28" />
        <p className="text-lg font-bold text-colorWhite font-mono">Konstantin Chuper</p>
        <p className="text-colorPrimary uppercase text-base font-semibold font-handjet">Web developer</p>
      </div>
      <div className="list-none">
        <nav className="list-none pt-4">
          <NavItem
            key="home"
            icon={<RiHome5Line size={32} />}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            Home
          </NavItem>
          <NavItem
            key="about"
            icon={<PiCards size={32} />}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            About me
          </NavItem>
          <NavItem
            key="service"
            icon={<SlBriefcase size={32} />}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            Service
          </NavItem>
          <NavItem
            key="skills"
            icon={<CiPen size={32} />}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            Skills
          </NavItem>
          <NavItem
            key="portfolio"
            icon={<HiOutlineChatBubbleLeftEllipsis size={32} />}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            Portfolio
          </NavItem>
          <NavItem
            key="contact"
            icon={<LuContact size={32} />}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            Contact
          </NavItem>
        </nav>
      </div>
    </aside>
  );
}
