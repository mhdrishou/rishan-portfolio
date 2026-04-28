'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import styles from './app.module.css'

function FadeIn({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

function ScaleIn({ children }: { children: React.ReactNode }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  )
}

function RotatingWords() {
  const words = ['AI Solutions', 'Vibe Coding', 'Creative Apps', 'Smart Tools']
  const [current, setCurrent] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % words.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [words.length])

  return (
    <div className={styles.rotatingPanel}>
      <AnimatePresence mode="wait">
        <motion.span
          key={current}
          initial={{ opacity: 0, rotateX: -90, y: 20 }}
          animate={{ opacity: 1, rotateX: 0, y: 0 }}
          exit={{ opacity: 0, rotateX: 90, y: -20 }}
          transition={{ duration: 0.5 }}
          className={styles.rotatingWord}
        >
          {words[current]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill all fields')
      return
    }
    
    setFormStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      if (data.success) {
        setFormStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setFormStatus('error')
      }
    } catch {
      setFormStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className={styles.container}>
      {/* Animated Wave Background */}
      <div className={styles.waveBg}>
        <div className={styles.wave1} />
        <div className={styles.wave2} />
        <div className={styles.wave3} />
        <div className={styles.wave4} />
      </div>

      {/* Navigation */}
      <nav className={styles.navbar}>
        <div className={styles.navContent}>
          <a href="#hero" className={styles.logo}>Rishan</a>
          <div className={styles.navLinks}>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className={styles.hero}>
        <FadeIn>
          <span className={styles.heroTag}>Web Developer & Designer</span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className={styles.heroTitle}>
            Crafting Digital<br />
            <span className={styles.connector}>with </span>
            <span className={styles.heroWrapper}>
              <span className={styles.keyword}>Experiences</span>
              <RotatingWords />
            </span>
            <br />That Inspire
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className={styles.heroSubtitle}>
            I blend cutting-edge web development with intuitive UI/UX design, 
            AI integration, and vibe coding to create stunning digital products.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className={styles.heroButtons}>
            <a href="#contact" className={styles.btnPrimary}>Get In Touch</a>
            <a href="#services" className={styles.btnSecondary}>View Services</a>
          </div>
        </FadeIn>
        <FadeIn delay={0.4}>
          <div className={styles.heroCards}>
            <div className={styles.heroCard}>
              <span>&#x1F3A8;</span>
              <h3>UI/UX Design</h3>
              <p>Beautiful interfaces</p>
            </div>
            <div className={styles.heroCard}>
              <span>&#x1F916;</span>
              <h3>AI Integration</h3>
              <p>Smart automation</p>
            </div>
            <div className={styles.heroCard}>
              <span>&#x26A1;</span>
              <h3>Vibe Coding</h3>
              <p>Modern development</p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* About Section */}
      <section id="about" className={styles.section}>
        <FadeIn>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <p className={styles.sectionSubtitle}>
            Creating exceptional digital experiences
          </p>
        </FadeIn>
        <div className={styles.aboutGrid}>
          <ScaleIn>
            <div className={styles.aboutImage}>
              <div className={styles.imagePlaceholder}><span>R</span></div>
            </div>
          </ScaleIn>
          <FadeIn delay={0.2}>
            <div className={styles.aboutContent}>
              <h3>Rishan</h3>
              <p className={styles.aboutRole}>Full-Stack Developer & Designer</p>
              <p className={styles.aboutDesc}>
                Passionate developer specializing in creating stunning digital experiences.
                Expertise in web development, UI/UX design, AI integration, and vibe coding.
              </p>
              <div className={styles.stats}>
                <div className={styles.statBox}>
                  <span className={styles.statNum}>5+</span>
                  <span className={styles.statLabel}>Years Exp</span>
                </div>
                <div className={styles.statBox}>
                  <span className={styles.statNum}>50+</span>
                  <span className={styles.statLabel}>Projects</span>
                </div>
                <div className={styles.statBox}>
                  <span className={styles.statNum}>30+</span>
                  <span className={styles.statLabel}>Clients</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={styles.section}>
        <FadeIn>
          <h2 className={styles.sectionTitle}>Skills & Expertise</h2>
          <p className={styles.sectionSubtitle}>Technologies I use</p>
        </FadeIn>
        <div className={styles.skillsGrid}>
          {[
            { icon: '&#x1F3AF;', title: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind'] },
            { icon: '&#x2699;', title: 'Backend', skills: ['Node.js', 'Python', 'PostgreSQL', 'REST API'] },
            { icon: '&#x2728;', title: 'Design', skills: ['Figma', 'UI/UX', 'Prototyping', 'Design Sys'] },
            { icon: '&#x1F9E0;', title: 'AI & ML', skills: ['OpenAI', 'LangChain', 'NLP', 'Automation'] },
          ].map((item, i) => (
            <ScaleIn key={i}>
              <motion.div 
                className={styles.skillCard}
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <span className={styles.skillIcon} dangerouslySetInnerHTML={{ __html: item.icon }} />
                <h3>{item.title}</h3>
                <ul>{item.skills.map((s, j) => <li key={j}>{s}</li>)}</ul>
              </motion.div>
            </ScaleIn>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={styles.section}>
        <FadeIn>
          <h2 className={styles.sectionTitle}>Services</h2>
          <p className={styles.sectionSubtitle}>Solutions for your needs</p>
        </FadeIn>
        <div className={styles.servicesGrid}>
          {[
            { icon: '&#x1F4BB;', title: 'Web Development', desc: 'Custom websites and apps built with modern tech.', features: ['Web Apps', 'E-commerce', 'CMS', 'API'] },
            { icon: '&#x1F3A8;', title: 'UI/UX Design', desc: 'Beautiful interfaces that users love.', features: ['Research', 'Wireframes', 'Prototyping', 'Systems'] },
            { icon: '&#x1F916;', title: 'AI Integration', desc: 'Smart AI solutions for automation.', features: ['Chatbots', 'NLP', 'Automation', 'ML'] },
            { icon: '&#x1F3B5;', title: 'Vibe Coding', desc: 'Creative and expressive development.', features: ['Creative Dev', 'Animation', 'Interactive', 'Experimental'] },
          ].map((item, i) => (
            <ScaleIn key={i}>
              <motion.div 
                className={styles.serviceCard}
                whileHover={{ scale: 1.02 }}
              >
                <span className={styles.serviceIcon} dangerouslySetInnerHTML={{ __html: item.icon }} />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <ul>{item.features.map((f, j) => <li key={j}>{f}</li>)}</ul>
                <a href="#contact" className={styles.learnMore}>Learn More &#x2192;</a>
              </motion.div>
            </ScaleIn>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.section}>
        <FadeIn>
          <h2 className={styles.sectionTitle}>Get In Touch</h2>
          <p className={styles.sectionSubtitle}>Let&apos;s create something amazing</p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className={styles.contactForm}>
            <form onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.formInput}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.formInput}
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className={styles.formInput}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className={styles.formTextarea}
              />
              <motion.button 
                type="submit" 
                className={styles.submitBtn}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={formStatus === 'loading'}
              >
                {formStatus === 'loading' ? 'Sending...' : 
                 formStatus === 'success' ? 'Message Sent!' : 
                 formStatus === 'error' ? 'Try Again' : 
                 'Send Message'}
              </motion.button>
              {formStatus === 'success' && (
                <p className={styles.successMsg}>Thanks! I&apos;ll get back to you soon.</p>
              )}
            </form>
          </div>
        </FadeIn>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; 2024 Rishan. All rights reserved.</p>
      </footer>
    </div>
  )
}