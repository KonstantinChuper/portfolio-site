export default function RunningText() {
  const words = [
    'Developer',
    'Coding',
    'React',
    'JavaScript',
    'UI/UX',
    'Web Design',
    'Frontend',
    'Backend',
    'Full-Stack',
    'Responsive',
    'Next.js',
    'Tailwind CSS',
    'Node.js',
    'TypeScript',
    'Innovation',
    'Clean Code'
  ]

  const textString = words.join(' * ') + ' * '

  return (
    <div className="marquee-outer py-6 bg-colorPrimary uppercase text-3xl mt-5">
      <div className="marquee-inner">
        <div className="marquee-content font-handjet">
          <span className="text-5xl text-black font-semibold selection:ml-1">{textString}</span>
          <span className="text-5xl text-black font-semibold ml-1">{textString}</span>
          <span className="text-5xl text-black font-semibold ml-1">{textString}</span>
          <span className="text-5xl text-black font-semibold ml-1">{textString}</span>
        </div>
      </div>

      <style jsx>{`
        .marquee-outer {
          overflow: hidden;
          width: 100%;
        }

        .marquee-inner {
          width: fit-content;
          display: flex;
          position: relative;
          animation: marquee 40s linear infinite;
          white-space: nowrap;
        }

        .marquee-content {
          display: flex;
        }

        /* .marquee-content span {
          display: inline-block;
          font-size: 2.25rem;
          font-weight: bold;
          padding: 0 0.5rem;
        } */

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }
      `}</style>
    </div>
  )
}
