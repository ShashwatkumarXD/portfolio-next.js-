'use client'

import { motion } from 'framer-motion'

export default function Skills() {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'SQL', level: 70 },
    { name: 'Git', level: 85 },
  ]

  return (
    <section id="skills" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-8 text-center text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              className="bg-card rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">{skill.name}</h3>
              <div className="w-full bg-secondary rounded-full h-2.5">
                <motion.div 
                  className="bg-primary h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

