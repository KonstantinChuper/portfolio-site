import ContentContainer from '../Atoms/ContentContainer'
import ContactCard from '../Molecules/ContactCard'
import { BsPhoneVibrate } from 'react-icons/bs'
import { TbMap2 } from 'react-icons/tb'
import { BiMailSend } from 'react-icons/bi'
import ContactForm from '../Molecules/ContactForm'

export default function ContactSection({setHovered}) {
  return (
    <section id="contact" className="bg-black text-colorWhite py-14 overflow-hidden">
      <ContentContainer>
        <div className="max-w-5xl mx-auto">
          <p className="uppercase text-2xl text-colorPrimary text-center">Contact me</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <ContactCard
            icon={<BsPhoneVibrate size={70} />}
            header="Phone & WhatsApp"
            text="+49 (160) 95-00-22-49"
          />
          <ContactCard icon={<TbMap2 size={70} />} header="Location" text="Berlin, Germany" />
          <ContactCard
            icon={<BiMailSend size={70} />}
            header="Monday - Sunday"
            text="konstantyn.chuper@gmail.com"
            link="mailto:konstantyn.chuper@gmail.com"
          />
        </div>
        <div className="md:col-span-2">
          <ContactForm setHovered={setHovered} />
        </div>
      </ContentContainer>
    </section>
  )
}
