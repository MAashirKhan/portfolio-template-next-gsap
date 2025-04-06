// src/components/BackToTop.tsx
'use client'

import { useEffect, useState } from 'react'
import { FiArrowUp } from 'react-icons/fi'

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const toggleVisibility = (): void => {
    // Show button when page is scrolled down
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all duration-300 z-40 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <FiArrowUp size={20} />
    </button>
  )
}

export default BackToTop