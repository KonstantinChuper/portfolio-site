import ContentContainer from '../Atoms/ContentContainer'
import AnimatedDots from '../Atoms/AnimatedDots'
import about_1 from '../../assets/about_1.png'
import about_2 from '../../assets/about_2.png'
import owner from '../../assets/owner.png'
import { LiaCertificateSolid } from 'react-icons/lia'
import SectionTitle from '../Molecules/SectionTitle'

export default function AboutSection() {
  return (
    <section id="about" className="bg-black text-colorWhite pb-32 pt-10 overflow-hidden">
      <ContentContainer>
        <SectionTitle
          section="About me"
          title="Building impactful web experiences through design and innovation."
        />
        <div className="pt-24 grid grid-cols-2 gap-12">
          <div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <img src={about_1} alt="Abstract lightning" className="w-[120px]" />
                <h3 className="pt-2 font-semibold text-3xl">My Ambition</h3>
                <p className="text-lg text-colorTextSecondary">
                  As a web developer, I aim to create seamless and engaging digital solutions that
                  combine creativity with functionality. My goal is to continuously push boundaries,
                  exploring new technologies to deliver exceptional user experiences.
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <img src={about_2} alt="Abstract cup" className="w-[120px]" />
                <h3 className="pt-2 font-semibold text-3xl">My Purpose</h3>
                <p className="text-lg text-colorTextSecondary">
                  I am passionate about crafting meaningful digital products that solve real-world
                  problems. Every line of code I write contributes to making technology more
                  accessible, intuitive, and user-friendly for everyone.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-colorMenu flex items-end rounded-md relative">
            <div className="absolute -top-8 -left-14 p-7 bg-colorPrimary rounded-md flex justify-center items-center gap-10">
              <div className="bg-white w-16 h-16 rounded-md">
                <LiaCertificateSolid color="black" size={64} />
              </div>
              <p className="text-colorBlack text-2xl font-semibold max-w-40">
                Certified specialist
              </p>
            </div>
            <div className="relative">
              <img
                src={owner}
                alt="Very beautifull photo of this site owner"
                className="rounded-md relative z-30"
              />
              <AnimatedDots />
            </div>
          </div>
        </div>
      </ContentContainer>
    </section>
  )
}
