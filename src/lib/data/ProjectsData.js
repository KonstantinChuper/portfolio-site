import freevet1 from '../../assets/projects/Freevet_1.jpg'
import freevet2 from '../../assets/projects/Freevet_2.png'
import holdMyCode1 from '../../assets/projects/HoldMyCode_1.jpg'
import holdMyCode2 from '../../assets/projects/HoldMyCode_2.png'
import syrena1 from '../../assets/projects/Syrena_1.jpg'
import ichgramm1 from '../../assets/projects/Ichgramm_1.jpg'

export const projectsData = {
  Freevet: {
    title: 'Freevet',
    description:
      'A veterinary web platform designed to help pet owners book appointments and manage pet care online.',
    longDescription:
      'Freevet is a simple and user-friendly platform that allows pet owners to find veterinary services, schedule appointments, and get information about their pets’ health. I worked on the frontend development as part of a small team of junior developers, focusing on creating responsive and accessible UI using React and Vite. The platform was built in collaboration with a separate backend team.',
    technologies: ['Javascript', 'React', 'Vite'],
    challenge:
      'Creating a responsive user interface and ensuring smooth integration with a Python-based backend developed by another team.',
    solution:
      'Developed reusable UI components, improved layout responsiveness, and worked closely with the team to ensure smooth user flows across pages.',
    images: [freevet1, freevet2],
    // liveUrl: 'https://freevet.me',
    githubUrl: 'https://github.com/KonstantinChuper/free-vet',
    year: '2024'
  },
  HoldMyCode: {
    title: 'Hold My Code',
    description:
      'A modern website for a collaborative code editor platform, built with a focus on performance and SEO.',
    longDescription:
      'Hold My Code is a collaborative development platform. I was responsible for building the marketing website using Next.js and TypeScript, integrating it with a Strapi CMS for content management. The work included dynamic routing, metadata configuration for SEO, and creating a fast, responsive frontend optimized for both users and search engines.',
    technologies: ['Next.js', 'TypeScript', 'Strapi CMS', 'Tailwind CSS'],
    challenge:
      'Developing a responsive and SEO-optimized website while integrating content from a headless CMS (Strapi).',
    solution:
      'Built dynamic and accessible page components, implemented proper SEO practices (structured data, meta tags, clean URLs), and ensured seamless data flow from Strapi to the frontend.',
    images: [holdMyCode1, holdMyCode2],
    liveUrl: 'https://holdmycode.com',
    year: '2024'
  },
  Syrena: {
    title: 'Syrena',
    description:
      'A web platform that connects investors and startup founders through detailed profiles and structured data.',
    longDescription:
      'Syrena helps investors and founders discover each other through searchable profiles, categorized by industry, stage, and investment criteria. I was responsible for both frontend and backend development: I built the UI using React and Tailwind CSS, and developed the backend API to manage user data, authentication, and role-based access. Firebase was used for data storage, user management, and secure access control.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Firebase'],
    challenge:
      'Developing both the frontend and backend to support dynamic profile creation, role-based access, and secure data handling within a scalable architecture.',
    solution:
      'Implemented structured API endpoints for user and profile management, integrated Firebase for authentication and data storage, and created responsive UI components with filtering and conditional rendering based on user roles.',
    images: [syrena1],
    liveUrl: 'https://syrena.co.uk',
    year: '2025'
  },
  Ichgramm: {
    title: 'Ichgramm',
    description:
      'A modern social media platform inspired by Instagram, developed as a final project during my training program.',
    longDescription:
      'Ichgramm reimagines social media interaction with a focus on authentic content sharing and meaningful connections. Users can share photos and videos, create stories, and engage through comments, likes, and direct messages. The platform incorporates unique features like content categorization based on interests, an advanced recommendation system, and enhanced privacy controls. The UI design prioritizes minimalism and user experience, with smooth animations and responsive layouts for all devices.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Express', 'MongoDB'],
    challenge:
      'Building a full-featured social media application with real-time interactions, efficient media handling, and scalable architecture within a limited timeframe.',
    solution:
      'Adopted a microservices architecture for better scalability, implemented progressive image loading for faster content delivery, and utilized WebSockets for real-time messaging and notifications, complemented by extensive automated testing.',
    images: [ichgramm1],
    // liveUrl: 'https://ichgramm.com',
    githubUrl: 'https://github.com/KonstantinChuper/ich-gramm',
    year: '2024'
  }
}
