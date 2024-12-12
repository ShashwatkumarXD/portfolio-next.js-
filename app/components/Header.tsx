'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-background shadow' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-foreground">Your Name</Link>
          <div className="hidden md:flex items-center space-x-6">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#achievements">Achievements</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <ThemeToggle />
          </div>
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button className="ml-4" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <NavLink href="#about" mobile>About</NavLink>
            <NavLink href="#skills" mobile>Skills</NavLink>
            <NavLink href="#projects" mobile>Projects</NavLink>
            <NavLink href="#achievements" mobile>Achievements</NavLink>
            <NavLink href="#contact" mobile>Contact</NavLink>
          </div>
        )}
      </nav>
    </header>
  )
}

function NavLink({ href, children, mobile = false }) {
  return (
    <Link 
      href={href} 
      className={`text-foreground hover:text-primary transition-colors duration-300 ${mobile ? 'block' : ''}`}
    >
      {children}
    </Link>
  )
}

