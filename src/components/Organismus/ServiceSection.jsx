import ContentContainer from '../Atoms/ContentContainer'
import ServiceCard from '../Molecules/ServiceCard'
import { TiHtml5 } from 'react-icons/ti'
import { BsDatabaseGear } from 'react-icons/bs'
import { GrDocumentTest } from 'react-icons/gr'
import SectionTitle from '../Molecules/SectionTitle'

export default function ServiceSection() {
  return (
    <section id="service" className="bg-black text-colorWhite sm:py-14 py-6 sm:mb-10 overflow-hidden">
      <ContentContainer>
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            section="My Services"
            title="Turning your ideas into exceptional web experiences with precision and creativity."
            divClassname="text-center"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <ServiceCard
            icon={<TiHtml5 size={70} color="black" />}
            header="Frontend"
            text="Crafting responsive and engaging user interfaces using modern frameworks like React, Next.js, and libraries such as Redux and TailwindCSS. I specialize in delivering pixel-perfect designs and seamless user experiences across various devices."
          />
          <ServiceCard
            icon={<BsDatabaseGear size={60} color="black" />}
            header="Backend"
            text="Building robust and scalable server-side solutions with Node.js, Express or CMS. My expertise includes working with databases like MySQL and MongoDB, and integrating RESTful APIs and GraphQL endpoints to ensure efficient data flow and functionality."
          />
          <ServiceCard
            icon={<GrDocumentTest size={60} color="black" />}
            header="Testing & Deployment"
            text="Ensuring quality and reliability through tools like Jira, TestRail, and Postman. I streamline deployments with Docker, manage repositories with Git, and leverage AWS Cloud for scalable and secure infrastructure solutions."
          />
        </div>
      </ContentContainer>
    </section>
  )
}
