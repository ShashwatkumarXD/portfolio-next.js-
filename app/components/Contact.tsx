'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-8 text-center text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>
        <motion.form 
          className="max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-foreground font-bold mb-2">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground" 
              required 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-foreground font-bold mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground" 
              required 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-foreground font-bold mb-2">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows={4} 
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground" 
              required
            ></textarea>
          </div>
          <motion.button 
            type="submit" 
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}

