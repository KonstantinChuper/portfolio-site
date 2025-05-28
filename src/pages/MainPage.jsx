import AboutSection from '../components/Organismus/AboutSection'
import ContactSection from '../components/Organismus/ContactSection'
import HomeSection from '../components/Organismus/HomeSection'
import PortfolioSection from '../components/Organismus/PortfolioSection'
import ServiceSection from '../components/Organismus/ServiceSection'
import SkilllsSection from '../components/Organismus/SkillsSection'

export default function MainPage({ setHovered }) {
  
  console.log('Service ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID)
  console.log('Template ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID)
  console.log('Public Key:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY)


  return (
    <div className="bg-black">
      <HomeSection setHovered={setHovered} />
      <AboutSection setHovered={setHovered} />
      <ServiceSection setHovered={setHovered} />
      <SkilllsSection setHovered={setHovered} />
      <PortfolioSection setHovered={setHovered} />
      <ContactSection setHovered={setHovered} />
    </div>
  )
}
