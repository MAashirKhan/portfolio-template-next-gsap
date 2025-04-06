import * as Icons from 'react-icons/si'

export type Skill = {
  name: string
  icon: keyof typeof Icons
  color: string
}

export const skills: Skill[] = [
  {
    name: 'JavaScript',
    icon: 'SiJavascript',
    color: '#F7DF1E'
  },
  {
    name: 'React',
    icon: 'SiReact',
    color: '#61DAFB'
  },
  {
    name: 'Next.js',
    icon: 'SiNextdotjs',
    color: '#FFFFFF'
  },
  {
    name: 'Node.js',
    icon: 'SiNodedotjs',
    color: '#339933'
  },
  {
    name: 'TypeScript',
    icon: 'SiTypescript',
    color: '#3178C6'
  },
  {
    name: 'Tailwind CSS',
    icon: 'SiTailwindcss',
    color: '#06B6D4'
  },
  {
    name: 'GSAP',
    icon: 'SiGreensock',
    color: '#88CE02'
  },
  {
    name: 'GraphQL',
    icon: 'SiGraphql',
    color: '#E10098'
  },
  {
    name: 'MongoDB',
    icon: 'SiMongodb',
    color: '#47A248'
  },
  {
    name: 'Figma',
    icon: 'SiFigma',
    color: '#F24E1E'
  },
  {
    name: 'Docker',
    icon: 'SiDocker',
    color: '#2496ED'
  },
  {
    name: 'Git',
    icon: 'SiGit',
    color: '#F05032'
  }
]
