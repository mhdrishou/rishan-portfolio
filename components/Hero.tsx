"use client";

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const ThreeDScene = dynamic(() => import('./ThreeDScene'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-48 h-48 rounded-full bg-gray-100 animate-pulse" />
    </div>
  ),
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function Hero() {
  return (
    <section className="min-h-screen relative flex items-center overflow-hidden">
      <div className="absolute inset-0 dotted-section" />

      <div className="max-w-[1200px] mx-auto px-6 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10"
          >
            <motion.p
              variants={itemVariants}
              className="text-base font-medium text-secondary mb-4 tracking-wide uppercase"
            >
              Web Developer & Designer
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight mb-6"
            >
              Hi, I&apos;m{' '}
              <span className="block">Rishan</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl font-light text-secondary mb-8 max-w-lg"
            >
              Crafting digital experiences that feel like{' '}
              <span className="text-primary font-medium">premium products</span>
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white text-base font-medium rounded-full hover:bg-secondary transition-all duration-300 hover:scale-105"
              >
                Start a Project
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-2 px-8 py-4 glass text-base font-medium rounded-full hover:bg-white transition-all duration-300 hover:scale-105"
              >
                Learn More
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative h-[400px] lg:h-[600px] hidden lg:block"
          >
            <ThreeDScene />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-primary/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}