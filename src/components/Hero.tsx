'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { FiArrowDown, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { BiBriefcase, BiCode } from 'react-icons/bi'

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const headingRef = useRef<HTMLHeadingElement | null>(null)
  const descriptionRef = useRef<HTMLParagraphElement | null>(null)
  const ctaRef = useRef<HTMLDivElement | null>(null)
  const socialsRef = useRef<HTMLDivElement | null>(null)
  const imageRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // const section = sectionRef.current
    const heading = headingRef.current
    const description = descriptionRef.current
    const cta = ctaRef.current
    const socials = socialsRef.current
    const image = imageRef.current

    if (!heading || !description || !cta || !socials || !image) return

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.fromTo(heading, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 })
      .fromTo(description, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.4')
      .fromTo(cta, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.4')
      .fromTo(
        socials.children,
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.1, duration: 0.5 },
        '-=0.4'
      )
      .fromTo(image, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 1 }, '-=1')

    gsap.to('.scroll-indicator', {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: 'power1.inOut',
    })

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-20 px-4"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-purple-600/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="z-10">
            <h1
              ref={headingRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              {"Crafting "}<span className="text-blue-400">Digital Experiences</span>
            </h1>

            <p ref={descriptionRef}
              className='mt-4 text-lg text-gray-300 max-w-lg'
            >
              I am Muhammad Aashir Khan, a passionate web developer with a knack for creating stunning and functional websites. I specialize in front-end development, UI/UX design, and responsive web applications.
            </p>
            <p
              ref={descriptionRef}
              className="mt-6 text-lg text-gray-300 max-w-lg"
            >
              I craft responsive websites and web applications that deliver exceptional user experiences. Passionate about clean code and modern technologies.
            </p>

            <div ref={ctaRef} className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-all duration-300 font-medium"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-blue-400 hover:bg-blue-900/30 rounded-full transition-all duration-300 font-medium"
              >
                Contact Me
              </a>
            </div>

            <div ref={socialsRef} className="mt-10 flex space-x-5">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="text-2xl hover:text-blue-400 transition-colors"
              >
                <FiGithub />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-2xl hover:text-blue-400 transition-colors"
              >
                <FiLinkedin />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-2xl hover:text-blue-400 transition-colors"
              >
                <FiTwitter />
              </a>
            </div>
          </div>

          {/* Right content (profile image) */}
           <div className="relative order-1 md:order-2">
              <div 
              ref={imageRef}
              className="relative h-80 w-80 mx-auto md:h-96 md:w-96 rounded-full overflow-hidden border-8 border-background shadow-xl">
                <Image
                  src="/images/profile.jpg"
                  alt="John Doe"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-background rounded-full p-4 shadow-lg animate-glow">
                <div className="bg-grey-200/10 rounded-full p-3">
                  <BiCode className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="absolute -top-2 -left-2 bg-background rounded-full p-4 shadow-lg animate-glow"
              >
                <div className="bg-primary/10 rounded-full p-3">
                  <BiBriefcase className="h-8 w-8 text-primary" />
                </div>
              </div>
            </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute left-1/2 bottom-10 -translate-x-1/2 text-center">
          <span className="block text-sm text-gray-400 mb-2">Scroll Down</span>
          <FiArrowDown className="mx-auto text-blue-400 scroll-indicator" />
        </div>
      </div>
    </section>
  )
}
