// src/components/ParallaxSection.tsx
'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface ParallaxSectionProps {
  children: React.ReactNode
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ children }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current

    // Create parallax effect
    gsap.fromTo(
      section,
      {
        backgroundPositionY: '0%',
      },
      {
        backgroundPositionY: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div 
      ref={sectionRef} 
      className="parallax-section relative"
      style={{
        background: 'radial-gradient(circle at center, rgba(30, 64, 175, 0.05) 0%, rgba(10, 10, 10, 0) 70%)',
      }}
    >
      {children}
    </div>
  )
}

export default ParallaxSection