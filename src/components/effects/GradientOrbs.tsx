'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import styles from './GradientOrbs.module.css'

interface GradientOrbsProps {
  children: ReactNode
}

export default function GradientOrbs({ children }: GradientOrbsProps) {
  return (
    <div className={styles.container}>
      <motion.div 
        className={styles.orb1}
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div 
        className={styles.orb2}
        animate={{
          x: [0, -25, 0],
          y: [0, 30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />
      <motion.div 
        className={styles.orb3}
        animate={{
          x: [0, 20, 0],
          y: [0, 15, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 5,
        }}
      />
      {children}
    </div>
  )
}