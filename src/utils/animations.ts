// src/utils/animations.ts
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger if it's not already registered
gsap.registerPlugin(ScrollTrigger)

/**
 * Animates an element to fade in from below.
 * @param element - DOM element to animate.
 * @param delay - Delay before the animation starts (in seconds).
 * @param duration - Duration of the animation (in seconds).
 */
export const fadeIn = (
  element: Element | null,
  delay: number = 0,
  duration: number = 1
): void => {
  if (!element) return

  gsap.fromTo(
    element,
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration,
      delay,
      ease: 'power3.out',
    }
  )
}

/**
 * Sets up a parallax effect on scroll.
 * @param element - DOM element to animate.
 * @param speed - Speed factor for parallax effect.
 */
export const setupParallax = (
  element: HTMLElement | null,
  speed: number = 0.5
): void => {
  if (!element) return

  gsap.to(element, {
    y: () => `${element.offsetHeight * speed * -1}px`,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  })
}

/**
 * Creates an infinitely scrolling carousel effect for a set of items.
 * @param container - Container element that holds the items.
 * @param items - Array of elements to scroll.
 * @returns GSAP timeline instance.
 */
export const setupSkillsCarousel = (
  container: HTMLElement,
  items: HTMLElement[]
): gsap.core.Timeline => {
  const totalItems = items.length
  const itemWidth = items[0]?.offsetWidth ?? 0

  const timeline = gsap.timeline({
    repeat: -1,
    defaults: { ease: 'none' },
  })

  // Clone the items for infinite loop
  const clonedItems = items.map(item => item.cloneNode(true) as HTMLElement)
  clonedItems.forEach(item => container.appendChild(item))

  timeline.to(container, {
    x: `-${totalItems * itemWidth}px`,
    duration: totalItems * 2,
    ease: 'none',
    modifiers: {
      x: gsap.utils.unitize(x => parseFloat(x) % (totalItems * itemWidth)),
    },
  })

  return timeline
}

/**
 * Applies a glowing animation effect to a set of elements.
 * @param elements - NodeList or array of elements to apply the effect on.
 */
export const glowEffect = (
  elements: NodeListOf<HTMLElement> | HTMLElement[]
): void => {
  gsap.to(elements, {
    filter: 'drop-shadow(0 0 15px #60a5fa)',
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
    stagger: 0.2,
  })
}
