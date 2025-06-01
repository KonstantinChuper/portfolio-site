import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import AboutSection from '../components/Organismus/AboutSection'
import ContactSection from '../components/Organismus/ContactSection'
import HomeSection from '../components/Organismus/HomeSection'
import PortfolioSection from '../components/Organismus/PortfolioSection'
import ServiceSection from '../components/Organismus/ServiceSection'
import SkilllsSection from '../components/Organismus/SkillsSection'
import RunningText from '../components/Organismus/RunningText'
import CookieBanner from '../components/Organismus/CookieBanner'
import Footer from '../components/Organismus/Footer'

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
      <AboutSection />
      <ServiceSection />
      <SkilllsSection setHovered={setHovered} />
      <PortfolioSection setHovered={setHovered} />
      <RunningText />
      <ContactSection setHovered={setHovered} />
      <CookieBanner setHovered={setHovered} />
      <Footer setHovered={setHovered} />
    </div>
  )
}
