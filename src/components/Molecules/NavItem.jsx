import React from "react";
import { motion } from "framer-motion";

const AnimatedLetters = ({ children, isHovered }) => {
  const letters = children.split("");

  const letterAnimation = {
    initial: { y: 0, opacity: 1 },
    hover: (i) => ({
      y: -20,
      opacity: 0,
      transition: { delay: i * 0.05, duration: 0.3, ease: "easeOut" },
    }),
    exit: { y: 0, opacity: 1, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const duplicateAnimation = {
    initial: { y: 20, opacity: 0 },
    hover: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.05, duration: 0.3, ease: "easeOut" },
    }),
    exit: { y: 20, opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  return (
    <span className="relative inline-block">
      {letters.map((letter, index) => (
        <span key={index} className="relative inline-block overflow-hidden">
          {letter === " " ? (
            <span className="inline-block w-[0.5ch]">&nbsp;</span>
          ) : (
            <>
              <motion.span
                className="inline-block"
                variants={letterAnimation}
                initial="initial"
                animate={isHovered ? "hover" : "initial"}
                exit="exit"
                custom={index}
              >
                {letter}
              </motion.span>
              <motion.span
                className="inline-block absolute left-0 top-0 w-full"
                style={{ visibility: isHovered ? "visible" : "hidden" }}
                variants={duplicateAnimation}
                initial="initial"
                animate={isHovered ? "hover" : "initial"}
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
  );
};

export default function NavItem({ icon, children, onMouseEnter, onMouseLeave }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <a
      href="#"
      onMouseEnter={() => {
        setIsHovered(true);
        onMouseEnter && onMouseEnter();
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        onMouseLeave && onMouseLeave();
      }}
    >
      <div className="group flex items-center mx-7 my-6 border rounded-md border-gray-800">
        <div
          className="p-4 bg-gray-800 rounded-md group-hover:bg-colorPrimary group-hover:text-colorMenu 
                     transition-all duration-500"
        >
          <span className="text-white group-hover:text-colorMenu transition-all duration-500">{icon}</span>
        </div>
        <div className="p-4 w-32 rounded-md relative overflow-hidden">
          <p className="text-colorTextSecondary uppercase m-0">
            <AnimatedLetters isHovered={isHovered}>{children}</AnimatedLetters>
          </p>
        </div>
      </div>
    </a>
  );
}
