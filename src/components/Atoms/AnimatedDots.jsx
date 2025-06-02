import { motion } from 'framer-motion'

export default function AnimatedDots() {
  return (
    <div className="absolute sm:-bottom-20 sm:-right-16 -bottom-16 -right-16 grid grid-cols-15 sm:gap-4 gap-3 p-6 z-10">
      {[...Array(225)].map((_, i) => (
        <motion.div
          key={i}
          className="sm:w-1 sm:h-1 w-0.5 h-0.5 bg-colorPrimary rounded-full"
          animate={{
            scale: [1, 1.6, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.01,
            ease: 'easeInOut'
          }}
        />
      ))}
    </div>
  )
}
