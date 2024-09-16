import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";

const FlipText = React.memo(() => {
  const words = ["Coder", "Problem Solver", "Developer", "Player"];
  const [index, setIndex] = useState(0);
  const indexRef = useRef(index);

  useEffect(() => {
    const interval = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % words.length;
      setIndex(indexRef.current);
    }, 4000);
    return () => clearInterval(interval);
  }, [words.length]);

  const animationProps = useSpring({
    from: { opacity: 0, transform: "rotateX(-90deg) scaleY(1.2)" },
    to: { opacity: 1, transform: "rotateX(0deg) scaleY(1)" },
    reset: true,
    reverse: false,
    // onRest: () => setIndex((prev) => (prev + 1) % words.length),
    config: { tension: 180, friction: 100 },
  });

  return (
    <div style={{ perspective: "300px", display: "inline-block" }}>
      <animated.h2
        style={{
          ...animationProps,
          transformOrigin: "bottom",
          perspective: "300px",
        }}
        className="text-6xl font-bold text-colorPrimary uppercase pt-2"
      >
        {words[index]}
      </animated.h2>
    </div>
  );
});

FlipText.displayName = "FlipText";

export default FlipText;
