import React from 'react'
import ContentContainer from '../Atoms/ContentContainer'
import PortfolioElement from '../Molecules/PortfolioElement'
import project2 from '../../assets/projects/Freevet_1.jpg'
import project3 from '../../assets/projects/HoldMyCode_1.jpg'
import project1 from '../../assets/projects/Syrena_1.jpg'
import project4 from '../../assets/projects/Ichgramm_1.jpg'

export default function PortfolioSection({ setHovered }) {
  const portfolioItems = [
    {
      image: project1,
      title: 'Syrena',
      to: '/projects/Syrena'
    },
    {
      image: project2,
      title: 'Freevet',
      to: '/projects/Freevet'
    },
    {
      image: project3,
      title: 'Hold My Code',
      to: '/projects/HoldMyCode'
    },
    {
      image: project4,
      title: 'Ichgramm',
      to: '/projects/Ichgramm'
    }
  ]

  return (
    <section id="portfolio" className="py-10 bg-black text-colorWhite overflow-hidden">
      <ContentContainer>
        <p className="uppercase text-2xl text-colorPrimary">My Recent Portfolio</p>
        <h2 className="text-5xl pt-4 font-semibold leading-tight max-w-[850px]">
          Showcasing the digital experiences that elevate brands.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {portfolioItems.map((item, index) => (
            <PortfolioElement
              key={index}
              image={item.image}
              title={item.title}
              to={item.to}
              setHovered={setHovered}
            />
          ))}
        </div>
      </ContentContainer>
    </section>
  )
}
