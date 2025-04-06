'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { skills } from '@/data/skills'
import { glowEffect } from '@/utils/animations'
import * as Icons from 'react-icons/si'

interface Skill {
  name: string
  icon: keyof typeof Icons
  color: string
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const carouselRef = useRef<HTMLDivElement | null>(null)
  const skillsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current
    const title = titleRef.current
    const carousel = carouselRef.current
    const skillElements = skillsRef.current.filter((el): el is HTMLDivElement => el !== null)

    // Animate title
    if (title && section) {
      gsap.fromTo(
        title,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
          }
        }
      )
    }

    // Carousel scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
      },
      repeat: -1,
      repeatDelay: 1
    })

    const totalWidth = skillElements.length * 150 // Approximate width of each skill item

    if (carousel) {
      tl.to(carousel, {
        x: `-${totalWidth / 2}px`,
        duration: 20,
        ease: 'none',
      })
    }

    // Apply glow effect
    glowEffect(skillElements)

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 md:py-32 px-4 bg-gradient-to-b from-black to-blue-950/30"
    >
      <div className="container mx-auto">
        <h2
          ref={titleRef}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          My <span className="text-blue-400">Skills</span>
        </h2>

        <div className="overflow-hidden py-10">
          <div
            ref={carouselRef}
            className="flex space-x-16"
          >
            {skills.map((skill: Skill, index: number) => {
              const IconComponent = Icons[skill.icon]

              return (
                <div
                  key={index}
                  ref={(el) => {
                    skillsRef.current[index] = el;
                  }}
                  className="flex flex-col items-center glow-effect"
                >
                  <div className="w-20 h-20 flex items-center justify-center bg-blue-900/20 rounded-full p-4 mb-4">
                    {IconComponent && (
                      <IconComponent
                        color={skill.color}
                        size={40}
                        className="filter drop-shadow-lg"
                      />
                    )}
                  </div>
                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
