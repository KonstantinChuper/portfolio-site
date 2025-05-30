import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import AboutSection from '../components/Organismus/AboutSection'
import ContactSection from '../components/Organismus/ContactSection'
import HomeSection from '../components/Organismus/HomeSection'
import PortfolioSection from '../components/Organismus/PortfolioSection'
import ServiceSection from '../components/Organismus/ServiceSection'
import SkilllsSection from '../components/Organismus/SkillsSection'
import RunningText from '../components/Organismus/RunningText'

export default function MainPage({ setHovered }) {
  const location = useLocation()

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const sectionId = location.state.scrollTo
        const section = document.getElementById(sectionId)
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' })
          window.history.replaceState({}, document.title)
        }
      }, 100)
    }
  }, [location])

  return (
    <div className="bg-black">
      <HomeSection setHovered={setHovered} />
      <AboutSection setHovered={setHovered} />
      <ServiceSection setHovered={setHovered} />
      <SkilllsSection setHovered={setHovered} />
      <PortfolioSection setHovered={setHovered} />
      <RunningText />
      <ContactSection setHovered={setHovered} />
    </div>
  )
}
