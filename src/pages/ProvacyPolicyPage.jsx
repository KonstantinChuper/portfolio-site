import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'
import ContentContainer from '../components/Atoms/ContentContainer'

export default function PrivacyPolicyPage({ setHovered }) {
  return (
    <div className="bg-black text-colorWhite min-h-screen pb-20">
      <div className="py-10 bg-colorMenu">
        <ContentContainer>
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-300">Last updated: June 1, 2025</p>
        </ContentContainer>
      </div>

      <ContentContainer className="mt-10">
        <Link
          to="/"
          className="inline-flex items-center text-colorPrimary mb-10 hover:underline pt-5"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <BsArrowLeft className="mr-2" /> Back to Homepage
        </Link>

        <div className="prose prose-lg prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-colorWhite">1. Introduction</h2>
            <p className="text-gray-300 mb-4">
              Welcome to Konstantin's portfolio website. I respect your privacy and am committed to
              protecting your personal data. This privacy policy will inform you about how I look
              after your personal data when you visit my website and tell you about your privacy
              rights and how the law protects you.
            </p>
            <p className="text-gray-300">
              This website is not intended for children and I do not knowingly collect data relating
              to children.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-colorWhite">2. The Data I Collect</h2>
            <p className="text-gray-300 mb-4">
              Personal data, or personal information, means any information about an individual from
              which that person can be identified. It does not include data where the identity has
              been removed (anonymous data).
            </p>
            <p className="text-gray-300 mb-4">
              When you visit my website, I may collect, use, store and transfer different kinds of
              personal data about you which I have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li className="mb-2">
                <strong className="text-colorPrimary">Identity Data</strong> includes your name when
                you contact me.
              </li>
              <li className="mb-2">
                <strong className="text-colorPrimary">Contact Data</strong> includes your email
                address and phone number when you contact me.
              </li>
              <li className="mb-2">
                <strong className="text-colorPrimary">Technical Data</strong> includes internet
                protocol (IP) address, your login data, browser type and version, time zone setting
                and location, browser plug-in types and versions, operating system and platform, and
                other technology on the devices you use to access this website.
              </li>
              <li className="mb-2">
                <strong className="text-colorPrimary">Usage Data</strong> includes information about
                how you use my website.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-colorWhite">
              3. How I Collect Your Data
            </h2>
            <p className="text-gray-300 mb-4">
              I use different methods to collect data from and about you including through:
            </p>
            <ul className="list-disc pl-6 text-gray-300">
              <li className="mb-2">
                <strong className="text-colorPrimary">Direct interactions.</strong> You may give me
                your Identity and Contact Data by filling in forms or by corresponding with me by
                email or otherwise.
              </li>
              <li className="mb-2">
                <strong className="text-colorPrimary">
                  Automated technologies or interactions.
                </strong>{' '}
                As you interact with my website, I may automatically collect Technical Data about
                your equipment, browsing actions and patterns. I collect this personal data by using
                cookies, server logs and other similar technologies.
              </li>
              <li className="mb-2">
                <strong className="text-colorPrimary">
                  Third parties or publicly available sources.
                </strong>{' '}
                I may receive personal data about you from various third parties such as analytics
                providers like Google.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-colorWhite">4. Cookies</h2>
            <p className="text-gray-300 mb-4">
              My website uses cookies to distinguish you from other users of my website. This helps
              me to provide you with a good experience when you browse my website and also allows me
              to improve my site.
            </p>
            <p className="text-gray-300 mb-4">
              A cookie is a small file of letters and numbers that I store on your browser or the
              hard drive of your computer if you agree. Cookies contain information that is
              transferred to your computer's hard drive.
            </p>
            <p className="text-gray-300 mb-4">I use the following cookies:</p>
            <ul className="list-disc pl-6 text-gray-300">
              <li className="mb-2">
                <strong className="text-colorPrimary">Strictly necessary cookies.</strong> These are
                cookies that are required for the operation of my website.
              </li>
              <li className="mb-2">
                <strong className="text-colorPrimary">Analytical/performance cookies.</strong> They
                allow me to recognize and count the number of visitors and to see how visitors move
                around my website when they are using it. This helps me to improve the way my
                website works, for example, by ensuring that users are finding what they are looking
                for easily.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-colorWhite">
              5. How I Use Your Personal Data
            </h2>
            <p className="text-gray-300 mb-4">
              I will only use your personal data when the law allows me to. Most commonly, I will
              use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-300">
              <li className="mb-2">
                Where I need to perform the contract I am about to enter into or have entered into
                with you.
              </li>
              <li className="mb-2">
                Where it is necessary for my legitimate interests (or those of a third party) and
                your interests and fundamental rights do not override those interests.
              </li>
              <li className="mb-2">Where I need to comply with a legal obligation.</li>
            </ul>
            <p className="text-gray-300 mt-4">
              Generally, I do not rely on consent as a legal basis for processing your personal data
              although I will get your consent before sending third party direct marketing
              communications to you via email or text message. You have the right to withdraw
              consent to marketing at any time by contacting me.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-colorWhite">6. Data Security</h2>
            <p className="text-gray-300 mb-4">
              I have put in place appropriate security measures to prevent your personal data from
              being accidentally lost, used or accessed in an unauthorized way, altered or
              disclosed. In addition, I limit access to your personal data to those employees,
              agents, contractors and other third parties who have a business need to know. They
              will only process your personal data on my instructions and they are subject to a duty
              of confidentiality.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-colorWhite">7. Your Legal Rights</h2>
            <p className="text-gray-300 mb-4">
              Under certain circumstances, you have rights under data protection laws in relation to
              your personal data, including the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-300">
              <li className="mb-2">Request access to your personal data.</li>
              <li className="mb-2">Request correction of your personal data.</li>
              <li className="mb-2">Request erasure of your personal data.</li>
              <li className="mb-2">Object to processing of your personal data.</li>
              <li className="mb-2">Request restriction of processing your personal data.</li>
              <li className="mb-2">Request transfer of your personal data.</li>
              <li className="mb-2">Right to withdraw consent.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-colorWhite">8. Contact</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about this privacy policy or my privacy practices, please
              contact me at:
            </p>
            <div className="bg-colorMenu p-6 rounded-lg inline-block">
              <p className="text-gray-300">
                Email:{' '}
                <a
                  href="mailto:konstantyn.chuper@gmail.com"
                  className="text-colorPrimary hover:underline"
                >
                  konstantyn.chuper@gmail.com
                </a>
              </p>
              {/* <p className="text-gray-300">Phone: +49 (160) 95-00-22-49</p>
              <p className="text-gray-300">Location: Berlin, Germany</p> */}
            </div>
          </section>
        </div>
      </ContentContainer>
    </div>
  )
}
