import { useState, useEffect, useRef, useCallback } from 'react'

export default function Cursor({ hovered }) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 })
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024)
  const requestRef = useRef()

  // Проверка размера экрана при монтировании и изменении размера
  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth > 1024)
    }

    // Инициализация
    handleResize()

    // Слушатель изменения размера окна
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Отслеживание движения мыши только на десктопах
  useEffect(() => {
    if (!isDesktop) return

    function handleMouseMove(event) {
      setTargetPosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isDesktop])

  const animate = useCallback(() => {
    if (!isDesktop) return

    setPosition((prevPosition) => {
      const dx = targetPosition.x - prevPosition.x
      const dy = targetPosition.y - prevPosition.y
      return {
        x: prevPosition.x + dx * 0.1,
        y: prevPosition.y + dy * 0.1
      }
    })
    requestRef.current = requestAnimationFrame(animate)
  }, [targetPosition, isDesktop])

  useEffect(() => {
    if (!isDesktop) return

    requestRef.current = requestAnimationFrame(animate)
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [animate, isDesktop])

  // Если не десктоп, не рендерим курсор
  if (!isDesktop) return null

  const cursorStyle = {
    position: 'fixed',
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    pointerEvents: 'none',
    transform: `translate(-50%, -50%) ${hovered ? 'scale(2.5)' : 'scale(1)'}`,
    border: '1px solid rgb(229, 231, 235)',
    left: `${position.x}px`,
    top: `${position.y}px`,
    opacity: hovered ? 0.15 : 0.9,
    backgroundColor: hovered ? 'rgb(229, 231, 235)' : 'transparent',
    transition: hovered
      ? 'transform 500ms, opacity 500ms, background-color 500ms'
      : 'transform 200ms ease-in-out',
    zIndex: 9999
  }

  return <div style={cursorStyle} />
}
