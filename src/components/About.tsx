'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const statRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current
    const title = titleRef.current
    const content = contentRef.current
    const stats = statRef.current

    if (!section || !title || !content || !stats) return

    // Animate title
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

    // Animate content
    gsap.fromTo(
      content,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        }
      }
    )

    // Animate stats
    gsap.fromTo(
      Array.from(stats.children),
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.6,
        scrollTrigger: {
          trigger: stats,
          start: 'top 80%',
        }
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 md:py-32 px-4"
    >
      <div className="container mx-auto">
        <h2 
          ref={titleRef}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          About <span className="text-blue-400">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div 
            ref={contentRef}
            className="space-y-6 text-gray-300"
          >
            <p>
              I am a passionate <strong className="text-blue-400">Full-Stack Developer</strong> with over 2 years of experience building web applications and digital experiences that users love.
            </p>
            <p>
              My journey in web development started when I built my first website at 16. Since then, I have been constantly learning and improving my skills to stay at the cutting edge of web technologies.
            </p>
            <p>
              I specialize in building modern, responsive, and high-performance applications using React, Next.js, Node.js and other contemporary tools. I am particularly interested in creating smooth, interactive user experiences with animations and transitions.
            </p>
            <p>
              When I am not coding, you can find me hiking in nature, reading tech blogs, or contributing to open-source projects. I believe in continuous learning and sharing knowledge with the developer community.
            </p>
          </div>

          <div
            ref={statRef}
            className="grid grid-cols-2 gap-8"
          >
            <div className="bg-blue-900/20 rounded-2xl p-8 text-center hover:bg-blue-900/30 transition-colors duration-300">
              <h3 className="text-5xl font-bold text-blue-400">5+</h3>
              <p className="mt-4 text-gray-300">Years of Experience</p>
            </div>
            <div className="bg-blue-900/20 rounded-2xl p-8 text-center hover:bg-blue-900/30 transition-colors duration-300">
              <h3 className="text-5xl font-bold text-blue-400">50+</h3>
              <p className="mt-4 text-gray-300">Projects Completed</p>
            </div>
            <div className="bg-blue-900/20 rounded-2xl p-8 text-center hover:bg-blue-900/30 transition-colors duration-300">
              <h3 className="text-5xl font-bold text-blue-400">30+</h3>
              <p className="mt-4 text-gray-300">Happy Clients</p>
            </div>
            <div className="bg-blue-900/20 rounded-2xl p-8 text-center hover:bg-blue-900/30 transition-colors duration-300">
              <h3 className="text-5xl font-bold text-blue-400">15+</h3>
              <p className="mt-4 text-gray-300">Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
