'use client'

import { useEffect, useRef, ReactNode } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import styles from './DottedGrid.module.css'

interface DottedGridProps {
  children: ReactNode
}

export default function DottedGrid({ children }: DottedGridProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { damping: 30, stiffness: 200 }
  const offsetX = useSpring(useMotionValue(0), springConfig)
  const offsetY = useSpring(useMotionValue(0), springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      
      const rect = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      
      offsetX.set(x * 30)
      offsetY.set(y * 20)
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [offsetX, offsetY])

  return (
    <div ref={containerRef} className={styles.container}>
      <motion.div 
        className={styles.grid}
        style={{
          x: offsetX,
          y: offsetY,
        }}
      >
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className={styles.dot} />
        ))}
      </motion.div>
      {children}
    </div>
  )
}