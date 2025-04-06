// src/components/Footer.tsx
'use client'

import Link from 'next/link'
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-blue-950/30 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Logo & description */}
          <div>
            <Link href="#home" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
              Dev<span className="text-blue-400">Portfolio</span>
            </Link>
            <p className="mt-4 text-gray-400">
              Building modern web applications with clean code and exceptional user experiences.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FiGithub size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FiLinkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FiInstagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#home" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to receive updates on new projects and tech articles.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="p-3 bg-blue-900/30 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-blue-500 flex-grow"
              />
              <button 
                type="submit" 
                className="px-4 bg-blue-600 hover:bg-blue-700 rounded-r-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-blue-900/30 text-center text-gray-500">
          <p>© {currentYear} DevPortfolio. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Designed and built with ❤️ using Next.js and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer