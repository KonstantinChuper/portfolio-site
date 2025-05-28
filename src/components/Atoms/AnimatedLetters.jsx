import { motion } from 'framer-motion'

const letterAnimation = {
  initial: { y: 0, opacity: 1 },
  hover: (i) => ({
    y: -20,
    opacity: 0,
    transition: { delay: i * 0.05, duration: 0.3, ease: 'easeOut' }
  }),
  exit: { y: 0, opacity: 1, transition: { duration: 0.3, ease: 'easeInOut' } }
}

const duplicateAnimation = {
  initial: { y: 20, opacity: 0 },
  hover: (i) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.05, duration: 0.3, ease: 'easeOut' }
  }),
  exit: { y: 20, opacity: 0, transition: { duration: 0.3, ease: 'easeInOut' } }
}

export default function AnimatedLetters({ children, isHovered }) {
  const letters = children.split('')

  return (
    <span className="relative inline-block">
      {letters.map((letter, index) => (
        <span key={index} className="relative inline-block overflow-hidden">
          {letter === ' ' ? (
            <span className="inline-block w-[0.5ch]">&nbsp;</span>
          ) : (
            <>
              <motion.span
                className="inline-block"
                variants={letterAnimation}
                initial="initial"
                animate={isHovered ? 'hover' : 'initial'}
                exit="exit"
                custom={index}
              >
                {letter}
              </motion.span>
              <motion.span
                className="absolute top-0 left-0 inline-block w-full"
                style={{ visibility: isHovered ? 'visible' : 'hidden' }}
                variants={duplicateAnimation}
                initial="initial"
                animate={isHovered ? 'hover' : 'initial'}
                exit="exit"
                custom={index}
              >
                {letter}
              </motion.span>
            </>
          )}
        </span>
      ))}
    </span>
  )
}
