import ContentContainer from '../Atoms/ContentContainer'
import { RiReactjsLine } from 'react-icons/ri'
import { SlSettings } from 'react-icons/sl'
import { FiTool } from 'react-icons/fi'
import { LuLanguages } from 'react-icons/lu'
import { RiDownloadLine } from 'react-icons/ri'
import { LuSend } from 'react-icons/lu'
import { useState } from 'react'
import AnimatedLetters from '../Atoms/AnimatedLetters'
import SectionTitle from '../Molecules/SectionTitle'

export default function SkillsSection({ setHovered }) {
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const skills = {
    Frontend: {
      icon: <RiReactjsLine size={24} className="text-colorPrimary" />,
      list: [
        'HTML',
        'CSS',
        'JavaScript',
        'TypeScript',
        'React',
        'Next.js',
        'React Native',
        'Redux, Zustand'
      ]
    },
    Backend: {
      icon: <SlSettings size={24} className="text-colorPrimary" />,
      list: [
        'Node.js',
        'Express',
        'MySQL',
        'MongoDB',
        'GraphQL',
        'REST API',
        'WordPress',
        'Strapi CMS, Firebase'
      ]
    },
    Tools: {
      icon: <FiTool size={24} className="text-colorPrimary" />,
      list: ['Git', 'Docker', 'Jira', 'Trello', 'Postman', 'TestRail', 'AWS', 'and Other...']
    },
    Languages: {
      icon: <LuLanguages size={24} className="text-colorPrimary" />,
      list: ['English', 'German', 'Ukrainian', 'Russian', 'Czech']
    }
  }

  return (
    <section id="skills" className="text-white mb-10">
      <ContentContainer>
        <div className="bg-colorMenu px-6 sm:py-20 py-8">
          <SectionTitle
            section="My Skills"
            title="Building impactful web experiences with precision and creativity."
            divClassname="text-center"
          />
          <p className="sm:text-lg text-colorTextSecondary px-6 sm:py-10 py-5">
            I have a strong command of modern technologies essential for developing
            high-performance, scalable, and user-friendly web applications. My expertise spans both
            frontend and backend development, ensuring seamless user experiences, clean and
            maintainable code, and optimized performance. I am constantly learning and adapting to
            new industry trends to deliver innovative and efficient solutions. I provide
            high-quality service in five languages.
          </p>
          <div className="container mx-auto px-6 text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(skills).map(([category, { icon, list }]) => (
                <div key={category} className="p-6 bg-colorMenu rounded-sm border border-gray-800">
                  <div className="flex items-center justify-center gap-2 mb-8">
                    <div className="p-2 border border-colorPrimary rounded">{icon}</div>
                    <h3 className="text-xl font-semibold uppercase text-colorWhite">{category}</h3>
                  </div>
                  <ul className="text-colorTextSecondary space-y-2">
                    {list.map((skill) => (
                      <li
                        key={skill}
                        className="bg-colorBlack px-3 py-3 text-md rounded border border-gray-800 hover:border-colorPrimary transition-colors duration-300"
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <AnimatedLetters isHovered={hoveredSkill === skill}>
                          {skill}
                        </AnimatedLetters>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-6 mt-8 sm:mt-12">
              <a
                href="/CV_Kostiantyn_Chuper.pdf"
                download
                className="btn btn-primary rounded border border-colorBtnBorder hover:bg-colorBlack hover:border-colorPrimary"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                Download CV
                <RiDownloadLine size={20} />
              </a>
              <button
                onClick={() => {
                  document.getElementById('contact').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  })
                }}
                className="btn btn-secondary rounded bg-colorBlack"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                Contact Me
                <LuSend size={20} />
              </button>
            </div>
          </div>
        </div>
      </ContentContainer>
    </section>
  )
}
