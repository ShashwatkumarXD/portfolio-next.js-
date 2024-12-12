'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutUs() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-8 text-center text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image 
              src="/placeholder.svg?height=400&width=400" 
              alt="Your Name" 
              width={400} 
              height={400} 
              className="rounded-full shadow-lg"
            />
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hello! I'm [Your Name], a passionate web developer and designer with [X] years of experience. 
              I specialize in creating beautiful, functional, and user-friendly websites and applications. 
              My journey in tech started [brief background], and since then, I've been constantly learning 
              and improving my skills to stay at the forefront of web development.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              When I'm not coding, you can find me [your hobbies or interests]. I believe that a 
              well-rounded life fuels creativity and problem-solving in my professional work.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

