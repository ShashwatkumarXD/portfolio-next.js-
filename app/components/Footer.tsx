import { Github, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-primary transition-colors duration-300">
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-300">
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-300">
              <Twitter size={24} />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

