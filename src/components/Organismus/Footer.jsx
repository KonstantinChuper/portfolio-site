import { Link } from 'react-router-dom'
import ContentContainer from '../Atoms/ContentContainer'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import Logo from '../../assets/LOGO.png'

export default function Footer({ setHovered }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className=" text-gray-300 pt-10 pb-6">
      <ContentContainer>
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            {/* <Link
              to="/"
              className="text-2xl font-bold text-colorWhite hover:text-colorPrimary transition-colors"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <img src={Logo} alt="Logo" className="h-10 inline-block mr-2" />
            </Link> */}
          </div>

          <div className="flex space-x-5">
            <a
              href="https://github.com/KonstantinChuper"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-colorPrimary transition-colors"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <FiGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/konstantin-chuper/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-colorPrimary transition-colors"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <FiLinkedin size={22} />
            </a>
            <a
              href="mailto:konstantyn.chuper@gmail.com"
              className="text-gray-400 hover:text-colorPrimary transition-colors"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <FiMail size={22} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 my-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="mb-4 md:mb-0">
            © {currentYear} Konstantin Chuper. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link
              to="/privacy-policy"
              className="hover:text-colorPrimary transition-colors"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              Privacy Policy
            </Link>
            <Link
              to="/#contact"
              className="hover:text-colorPrimary transition-colors"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
              }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </ContentContainer>
    </footer>
  )
}
