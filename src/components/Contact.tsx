// src/components/Contact.tsx
'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const formRef = useRef<HTMLDivElement | null>(null)
  const infoRef = useRef<HTMLDivElement | null>(null)
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here in a real implementation
    alert('Form submitted! This would connect to a backend service in a real implementation.')
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    const section = sectionRef.current
    const title = titleRef.current
    const form = formRef.current
    const info = infoRef.current
    
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
    
    // Animate form
    gsap.fromTo(
      form,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
        }
      }
    )
    
    // Animate info
    gsap.fromTo(
      info,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.4,
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
        }
      }
    )
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])
  
  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 md:py-32 px-4"
    >
      <div className="container mx-auto">
        <h2 
          ref={titleRef}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Get In <span className="text-blue-400">Touch</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact form */}
          <div 
            ref={formRef}
            className="bg-blue-900/10 rounded-xl p-8"
          >
            <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-blue-900/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-blue-900/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-blue-900/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-3 bg-blue-900/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <FiSend /> Send Message
              </button>
            </form>
          </div>
          
          {/* Contact info */}
          <div 
            ref={infoRef}
            className="bg-blue-900/10 rounded-xl p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <p className="text-gray-300 mb-8">
                Feel free to contact me anytime. I am open to opportunities, collaborations, and interesting projects.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                    <FiMail />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:hello@example.com" className="text-blue-400 hover:text-blue-300">
                      hello@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                    <FiPhone />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a href="tel:+1234567890" className="text-blue-400 hover:text-blue-300">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                    <FiMapPin />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-gray-300">
                      San Francisco, CA, USA
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="font-medium mb-4">Working Hours</h4>
              <p className="text-gray-300">
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Weekend: Available for urgent matters
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact