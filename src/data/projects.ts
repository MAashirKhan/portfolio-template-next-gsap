// src/data/projects.js
export type Project = {
    id: number
    title: string
    description: string
    image: string
    tags: string[]
    liveLink: string
    githubLink: string
}

export const projects : Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A fully functional e-commerce platform with payment integration, user authentication, and admin dashboard.',
      image: '/images/projects/project1.jpg',
      tags: ['Next.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      liveLink: 'https://ecommerce-example.com',
      githubLink: 'https://github.com/yourusername/ecommerce'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates and team functionality.',
      image: '/images/projects/project2.jpg',
      tags: ['React', 'Firebase', 'Material UI', 'Redux'],
      liveLink: 'https://tasks-example.com',
      githubLink: 'https://github.com/yourusername/task-manager'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Modern developer portfolio with GSAP animations and responsive design.',
      image: '/images/projects/project3.jpg',
      tags: ['Next.js', 'Tailwind CSS', 'GSAP', 'Framer Motion'],
      liveLink: 'https://portfolio-example.com',
      githubLink: 'https://github.com/yourusername/portfolio'
    }
  ];
  