'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Projects() {
  const projects = [
    { 
      title: 'Project 1', 
      description: 'Description of Project 1. This project showcases [key features/technologies].',
      image: '/placeholder.svg?height=300&width=400',
      link: '#'
    },
    { 
      title: 'Project 2', 
      description: 'Description of Project 2. This project demonstrates [key features/technologies].',
      image: '/placeholder.svg?height=300&width=400',
      link: '#'
    },
    { 
      title: 'Project 3', 
      description: 'Description of Project 3. This project highlights [key features/technologies].',
      image: '/placeholder.svg?height=300&width=400',
      link: '#'
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-8 text-center text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-card rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image src={project.image} alt={project.title} width={400} height={300} className="w-full" />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-card-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <a 
                  href={project.link} 
                  className="text-primary hover:text-primary/80 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

