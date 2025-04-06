// src/components/Navbar.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { FiMenu, FiX } from 'react-icons/fi'
import Image from 'next/image'

interface NavItem {
  name: string
  href: string
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [scrolled, setScrolled] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = (): void => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Animate navbar on mount
    gsap.fromTo(
      '.navbar',
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    )

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  const toggleMenu = (): void => {
    setIsOpen(prev => !prev)

    if (!isOpen) {
      gsap.fromTo(
        '.mobile-menu-item',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, ease: 'power3.out' }
      )
    }
  }

  const closeMenu = (): void => {
    setIsOpen(false)
  }

  const navItems: NavItem[] = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={`flex justify-center fixed w-full z-50`}
    >
      <div className={`container w-[90%] lg:w-[70%] mx-auto px-4 flex  bg-gray-400/25 backdrop-blur-md rounded-full mt-5 justify-between items-center
         transition-all duration-300 py-5 ${scrolled ? 'shadow-lg' : ''} navbar`}>
        {/* Logo */}
        <Link
          href="#home"
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text"
        >
          <Image src="/logo.jpg" alt="Logo" width={50} height={100} className={`rounded-full object-contain`}/>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="px-4 py-2 rounded-full hover:bg-blue-900/30 transition-colors duration-300 text-sm font-medium"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="ml-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-300 text-sm font-medium"
          >
            {"Let's talk"}
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute w-full bg-black/95 backdrop-blur-md transition-all duration-300 ${
          isOpen ? 'max-h-screen py-5' : 'max-h-0 py-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-6 flex flex-col space-y-4">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="mobile-menu-item px-4 py-3 rounded-full hover:bg-blue-900/30 transition-colors duration-300"
              onClick={closeMenu}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="mobile-menu-item px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-300 text-center"
            onClick={closeMenu}
          >
            {"Let's talk"}
          </Link>
        </div>
      </div>
    </nav>
  )
}