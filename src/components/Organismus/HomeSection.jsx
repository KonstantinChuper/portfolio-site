import ContentContainer from '../Atoms/ContentContainer'
import FlipText from '../Molecules/FlipText'
import { RiDownloadLine } from 'react-icons/ri'

export default function HomeSection({ setHovered }) {
  return (
    <section id='home' className="flex items-center justify-center flex-grow h-screen bg-black bg-center bg-cover bg-hero-pattern mb-24">
      <ContentContainer>
        <h1 className="text-6xl font-bold uppercase text-colorWhite">Hello, I&#39;m</h1>
        <h2 className="pt-2 text-6xl font-bold uppercase text-colorWhite"> Konstantin!</h2>
        <h2 className="pt-2 text-6xl font-bold uppercase text-colorWhite">Inspired</h2>
        <FlipText />
        <p className="pt-10 text-lg text-colorTextSecondary w-550">
          I&#39;m a passionate web developer on a mission to build seamless and engaging digital
          experiences. With a solid foundation in front-end development and a keen eye for detail, I
          specialize in transforming complex concepts into clean, responsive, and user-friendly
          websites. I thrive on creating code that is not only functional but also brings designs to
          life, ensuring every project is both captivating and accessible.
        </p>
        <button
          className="btn btn-primary"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          Download Cv
          <RiDownloadLine />
        </button>
      </ContentContainer>
    </section>
  )
}
