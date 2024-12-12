'use client'

import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

export default function Achievements() {
  const achievements = [
    'Completed [Certification Name] certification',
    'Won [Award Name] for outstanding performance',
    'Published [Number] research papers in [Field]',
    'Contributed to open-source project [Project Name]',
  ]

  return (
    <section id="achievements" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-8 text-center text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Achievements
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div 
              key={index}
              className="bg-card rounded-lg shadow-md p-6 flex items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Award className="text-primary mr-4 flex-shrink-0" />
              <p className="text-card-foreground">{achievement}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

