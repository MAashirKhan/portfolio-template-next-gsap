'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects, Project } from '@/data/projects'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

export default function Projects() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const projectRefs = useRef<Array<HTMLDivElement | null>>([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current
    const title = titleRef.current
    const projectElements = projectRefs.current

    if (section && title) {
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
          },
        }
      )

      // Animate projects
      projectElements.forEach((project, index) => {
        if (!project) return
        gsap.fromTo(
          project,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: 0.2 + index * 0.2,
            scrollTrigger: {
              trigger: section,
              start: 'top 70%',
            },
          }
        )
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 md:py-32 px-4"
    >
      <div className="container mx-auto">
        <h2
          ref={titleRef}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Featured <span className="text-blue-400">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: Project, index: number) => (
            <div
              key={project.id}
              ref={(el) => {
                (projectRefs.current[index] = el)
            }}
              className="project-card bg-blue-900/10 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag: string, tagIndex: number) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-3 py-1 bg-blue-900/30 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between">
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <FiExternalLink /> Live Preview
                  </Link>
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <FiGithub /> Source Code
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
