import ContentContainer from '../Atoms/ContentContainer'
import AnimatedDots from '../Atoms/AnimatedDots'
import about_1 from '../../assets/about_1.png'
import about_2 from '../../assets/about_2.png'
import owner from '../../assets/owner.png'
import SectionTitle from '../Molecules/SectionTitle'
import { CertificateSvg } from '../../lib/svg'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-black text-colorWhite pb-16 md:pb-24 lg:pb-32 sm:pt-10 overflow-hidden"
    >
      <ContentContainer>
        <SectionTitle
          section="About me"
          title="Building impactful web experiences through design and innovation."
          titleClassname={'max-w-[800px]'}
        />
        <div className="pt-12 md:pt-16 lg:pt-24 grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-12">
          <div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4 md:gap-6">
                <img src={about_1} alt="Abstract lightning" className="w-[100px] md:w-[120px]" />
                <h3 className="pt-2 font-semibold text-2xl md:text-3xl">My Ambition</h3>
                <p className="text-base md:text-lg text-colorTextSecondary">
                  As a web developer, I aim to create seamless and engaging digital solutions that
                  combine creativity with functionality. My goal is to continuously push boundaries,
                  exploring new technologies to deliver exceptional user experiences.
                </p>
              </div>
              <div className="flex flex-col gap-4 md:gap-6">
                <img src={about_2} alt="Abstract cup" className="w-[100px] md:w-[120px]" />
                <h3 className="pt-2 font-semibold text-2xl md:text-3xl">My Purpose</h3>
                <p className="text-base md:text-lg text-colorTextSecondary">
                  I am passionate about crafting meaningful digital products that solve real-world
                  problems. Every line of code I write contributes to making technology more
                  accessible, intuitive, and user-friendly for everyone.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 md:mt-0 bg-colorMenu flex items-end justify-center rounded-md relative">
            <div className="absolute -top-8 -left-5 md:-left-10 lg:-left-6 sm:p-4 p-2.5 md:p-6 lg:p-7 bg-colorPrimary rounded-md flex justify-center items-center gap-4 md:gap-6 lg:gap-10">
              <div className="bg-white w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-md flex items-center justify-center p-1">
                <CertificateSvg />
              </div>
              <p className="text-colorBlack text-lg md:text-xl lg:text-2xl font-semibold max-w-28 md:max-w-32 lg:max-w-40">
                Certified specialist
              </p>
            </div>
            <div className="relative ">
              <img
                src={owner}
                alt="Very beautiful photo of this site owner"
                className="rounded-md relative z-30 w-full md:w-auto"
              />
              <AnimatedDots className="hidden md:block" />
            </div>
          </div>
        </div>
      </ContentContainer>
    </section>
  )
}
