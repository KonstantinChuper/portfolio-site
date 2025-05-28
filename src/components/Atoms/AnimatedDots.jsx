import { motion } from 'framer-motion'

export default function AnimatedDots() {
  return (
    <div className="absolute -bottom-20 -right-14 grid grid-cols-15 gap-4 p-6 z-10">
      {[...Array(225)].map((_, i) => (
        <motion.div
          key={i}
          className="w-1 h-1 bg-colorPrimary rounded-full"
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
