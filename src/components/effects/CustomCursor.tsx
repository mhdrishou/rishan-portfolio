'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'
import styles from './CustomCursor.module.css'

interface CustomCursorProps {
  children: ReactNode
}

export default function CustomCursor({ children }: CustomCursorProps) {
  const cursorRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)
  
  const springConfig = { damping: 30, stiffness: 400 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)
  const trailX = useSpring(mouseX, { damping: 20, stiffness: 300 })
  const trailY = useSpring(mouseY, { damping: 20, stiffness: 300 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16)
      mouseY.set(e.clientY - 16)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button'
      
      setIsHovering(!!isInteractive)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseover', handleElementHover)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseover', handleElementHover)
    }
  }, [mouseX, mouseY, isVisible])

  return (
    <>
      {children}
      <motion.div
        ref={cursorRef}
        className={`${styles.cursor} ${isHovering ? styles.hovering : ''}`}
        style={{
          left: cursorX,
          top: cursorY,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div className={styles.cursorOuter} />
        <div className={styles.cursorInner} />
      </motion.div>
      <motion.div
        ref={trailRef}
        className={styles.trail}
        style={{
          left: trailX,
          top: trailY,
          opacity: isVisible ? 0.4 : 0,
        }}
      />
    </>
  )
}