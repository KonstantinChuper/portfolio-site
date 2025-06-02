import ContentContainer from '../Atoms/ContentContainer'
import FlipText from '../Molecules/FlipText'
import { RiDownloadLine } from 'react-icons/ri'

export default function HomeSection({ setHovered }) {
  return (
    <section
      id="home"
      className="flex items-center justify-center flex-grow min-h-screen bg-black bg-right bg-cover bg-hero-pattern mb-12 md:mb-16 lg:mb-24 md:pt-14"
    >
      <ContentContainer>
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-colorWhite">
            Hello, I&#39;m
          </h1>
          <h2 className="pt-1 md:pt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-colorWhite">
            {' '}
            Konstantin!
          </h2>
          <h2 className="pt-1 md:pt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-colorWhite">
            Inspired
          </h2>
          <FlipText />
          <p className="pt-4 sm:pt-6 md:pt-8 lg:pt-10 text-base sm:text-lg lg:text-colorTextSecondary text-colorWhite w-full sm:w-[90%] md:w-[80%] lg:w-550">
            I&#39;m a passionate web developer on a mission to build seamless and engaging digital
            experiences. With a solid foundation in front-end development and a keen eye for detail,
            I specialize in transforming complex concepts into clean, responsive, and user-friendly
            websites. I thrive on creating code that is not only functional but also brings designs
            to life, ensuring every project is both captivating and accessible.
          </p>
          <div className="mt-6 sm:mt-8 md:mt-10">
            <a
              href="/CV_Kostiantyn_Chuper.pdf"
              download
              className="btn btn-primary text-sm sm:text-base inline-flex px-4 py-3 sm:px-10 sm:py-5"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              Download CV
              <RiDownloadLine className="ml-2" />
            </a>
          </div>
        </div>
      </ContentContainer>
    </section>
  )
}
