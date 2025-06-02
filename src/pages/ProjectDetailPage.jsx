import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiChevronLeft } from 'react-icons/fi'
import ContentContainer from '../components/Atoms/ContentContainer'
import { BsArrowLeft } from 'react-icons/bs'
import { projectsData } from '../lib/data/ProjectsData'

export default function ProjectDetailPage({ setHovered }) {
  const { projectSlug } = useParams()
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [project, setProject] = useState(null)

  useEffect(() => {
    if (projectSlug && projectsData[projectSlug]) {
      setProject(projectsData[projectSlug])
    }
  }, [projectSlug])

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        Project not found
      </div>
    )
  }

  return (
    <div className="bg-black text-colorWhite min-h-screen pb-20 overflow-hidden">
      <div className="relative h-[50vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 pointer-events-none"
          style={{ backgroundImage: `url(${project.images[activeImageIndex]})` }}
        ></div>
        <div className="relative z-30 h-full">
          <ContentContainer className="h-full flex flex-col justify-end p-16">
            <motion.div
              initial={{ opacity: 1, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="z-30 pt-5"
            >
              <Link
                to="/"
                state={{ scrollTo: 'portfolio' }}
                className="inline-flex items-center text-colorPrimary mb-6 hover:underline opacity-100"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <BsArrowLeft className="mr-2" /> Back to Portfolio
              </Link>
              <h1 className="text-6xl font-bold text-colorWhite mb-4 opacity-100">
                {project.title}
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl opacity-100">{project.description}</p>
            </motion.div>
          </ContentContainer>
        </div>
      </div>

      <ContentContainer>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mt-16">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-semibold mb-6">Overview</h2>
              <p className="text-gray-300 leading-relaxed mb-10">{project.longDescription}</p>

              <h2 className="text-3xl font-semibold mb-6">Challenge & Solution</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="bg-colorMenu p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-colorPrimary mb-4">The Challenge</h3>
                  <p className="text-gray-300">{project.challenge}</p>
                </div>
                <div className="bg-colorMenu p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-colorPrimary mb-4">The Solution</h3>
                  <p className="text-gray-300">{project.solution}</p>
                </div>
              </div>

              <h2 className="text-3xl font-semibold mb-6">Project Gallery</h2>
              <div className="space-y-6">
                {project.images.slice(1).map((image, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-lg bg-colorMenu transition-all hover:transform hover:scale-[1.01]"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                  >
                    <img
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="sticky top-28"
            >
              <div className="bg-colorMenu p-8 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-6 border-b border-gray-700 pb-4">
                  Project Details
                </h3>

                <div className="mb-6">
                  <h4 className="text-sm text-gray-400 mb-2">Year</h4>
                  <p className="text-colorPrimary font-medium">{project.year}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm text-gray-400 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-black text-sm py-1 px-3 rounded-full text-colorPrimary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-white hover:text-colorPrimary transition-colors"
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                    >
                      <FiExternalLink className="mr-2" />
                      Live Preview
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-white hover:text-colorPrimary transition-colors"
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                    >
                      <FiGithub className="mr-2" />
                      View Source Code
                    </a>
                  )}
                </div>
              </div>

              <div className="bg-colorPrimary text-colorBlack p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Interested in working together?</h3>
                <p className="mb-6">
                  Let's discuss your project and see how I can help bring your ideas to life.
                </p>
                <Link
                  to="/"
                  state={{ scrollTo: 'contact' }}
                  className="inline-flex items-center font-semibold bg-colorBlack text-white py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  Contact Me <FiChevronLeft className="ml-2 transform rotate-180" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </ContentContainer>
    </div>
  )
}
