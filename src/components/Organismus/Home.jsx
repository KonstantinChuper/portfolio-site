import FlipText from "../Molecules/FlipText";
import { RiDownloadLine } from "react-icons/ri";

export default function Home({ setHovered }) {
  return (
    <section className="flex-grow bg-hero-pattern bg-cover bg-center bg-black flex justify-center items-center">
      <div className="container mx-auto px-7">
        <h1 className="text-6xl font-bold text-colorWhite uppercase">Hello, I&#39;m</h1>
        <h2 className="text-6xl font-bold text-colorWhite uppercase pt-2"> Konstantin!</h2>
        <h2 className="text-6xl font-bold text-colorWhite uppercase pt-2">Inspired</h2>
        <FlipText />
        <p className="text-colorTextSecondary pt-10 w-550 text-lg">
          I&#39;m a passionate web developer on a mission to build seamless and engaging digital experiences. With a solid foundation
          in front-end development and a keen eye for detail, I specialize in transforming complex concepts into clean, responsive, and
          user-friendly websites. I thrive on creating code that is not only functional but also brings designs to life, ensuring every
          project is both captivating and accessible.
        </p>
        <button
          className="bg-colorPrimary mt-10 px-10 py-5 text-lg flex items-center gap-2
                     hover:bg-colorMenuTop hover:text-colorWhite transition-all duration-500"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          Download Cv
          <RiDownloadLine />
        </button>
      </div>
    </section>
  );
}
