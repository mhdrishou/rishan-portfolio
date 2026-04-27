"use client";

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 dotted-section">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="glass-card rounded-3xl p-8 md:p-12 lg:p-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                About Me
              </h2>
              <p className="text-lg text-secondary leading-relaxed mb-6">
                I&apos;m a passionate developer focused on creating{' '}
                <span className="text-primary font-medium">exceptional digital experiences</span>.
                With expertise spanning web development, UI/UX design, and AI integration,
                I transform complex ideas into elegant, user-friendly solutions.
              </p>
              <p className="text-lg text-secondary leading-relaxed">
                My approach combines technical precision with creative vision,
                ensuring every project not only functions flawlessly but
                delivers a memorable user experience that stands out.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '5+', label: 'Years Experience' },
                { number: '50+', label: 'Projects Completed' },
                { number: '30+', label: 'Happy Clients' },
                { number: '100%', label: 'Client Satisfaction' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="glass rounded-2xl p-6 text-center"
                >
                  <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.number}
                  </p>
                  <p className="text-sm text-secondary">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}