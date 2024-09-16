import { useState, useEffect, useRef, useCallback } from "react";

export default function Cursor({ hovered }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  const requestRef = useRef();

  useEffect(() => {
    function handleMouseMove(event) {
      setTargetPosition({ x: event.clientX, y: event.clientY });
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const animate = useCallback(() => {
    setPosition((prevPosition) => {
      const dx = targetPosition.x - prevPosition.x;
      const dy = targetPosition.y - prevPosition.y;
      return {
        x: prevPosition.x + dx * 0.1,
        y: prevPosition.y + dy * 0.1,
      };
    });
    requestRef.current = requestAnimationFrame(animate);
  }, [targetPosition]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [animate]);

  return (
    <div
      className={`fixed w-7 h-7 border border-gray-200 opacity-90 rounded-full pointer-events-none 
                transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-200 ease-in-out ${
                  hovered ? "scale-250 bg-gray-200 opacity-20 transition-all duration-500" : ""
                }`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
}
