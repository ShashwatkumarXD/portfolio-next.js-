'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-foreground">Your Name</h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">Web Developer & Designer</p>
        <motion.a
          href="#contact"
          className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get in Touch
        </motion.a>
      </motion.div>
    </section>
  )
}

