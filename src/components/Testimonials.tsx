'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { testimonials } from '@/data/testimonials'
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi'

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const carouselRef = useRef<HTMLDivElement | null>(null)
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current
    const title = titleRef.current
    const content = contentRef.current

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

    // Animate content
    if (content && section) {
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
    }

    const autoRotate = gsap.delayedCall(5, nextTestimonial)

    return () => {
      autoRotate.kill()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [activeIndex])

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    gsap.fromTo(
      carousel,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5 }
    )

    const autoRotate = gsap.delayedCall(5, nextTestimonial)
    return () => {
      autoRotate.kill()
    }
  }, [activeIndex])

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="py-20 md:py-32 px-4 bg-gradient-to-b from-blue-950/30 to-black"
    >
      <div className="container mx-auto">
        <h2 
          ref={titleRef}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Client <span className="text-blue-400">Testimonials</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div 
            ref={contentRef}
            className="space-y-6 text-center md:text-left"
          >
            <h3 className="text-2xl font-bold">What My Clients Say</h3>
            <p className="text-gray-300">
              {`I've had the privilege of working with amazing clients across various industries. 
              Here's what they have to say about their experience working with me.`}
            </p>
            <div className="w-20 h-1 bg-blue-500 mx-auto md:mx-0"></div>
            <p className="text-gray-300">
              My goal is to deliver not just what clients ask for, but what their business truly needs to succeed.
              I pride myself on clear communication, meeting deadlines, and exceeding expectations.
            </p>
          </div>

          {/* Right content (testimonials carousel) */}
          <div className="relative">
            <div 
              ref={carouselRef}
              className="bg-blue-900/10 rounded-xl p-8 relative"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image 
                    src={testimonials[activeIndex].avatar} 
                    alt={testimonials[activeIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{testimonials[activeIndex].name}</h4>
                  <p className="text-sm text-gray-400">{testimonials[activeIndex].role}</p>
                </div>
              </div>

              <div className="mb-6">
                <p className="italic text-gray-300">{`"${testimonials[activeIndex].content}"`}</p>
              </div>

              <div className="flex gap-1">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <FiStar key={i} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="flex justify-center mt-6 gap-4">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-900/30 hover:bg-blue-900/50 transition-colors"
              >
                <FiChevronLeft />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button 
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === activeIndex ? 'w-6 bg-blue-500' : 'bg-blue-900/50'
                    }`}
                    onClick={() => setActiveIndex(index)}
                  />
                ))}
              </div>

              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-900/30 hover:bg-blue-900/50 transition-colors"
              >
                <FiChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}