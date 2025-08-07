import { Github, Linkedin, Youtube } from 'lucide-react'

// Object-style access for direct URL references
export const socialLinks = {
  github: 'https://github.com/bluemens',
  linkedin: 'https://www.linkedin.com/in/maximilian-comfere-393991291/',
  youtube: 'https://www.youtube.com/@maxcomfere4403',
  email: 'maxcomfere@gmail.com',
  location: 'New York, NY'
}

// Array-style access for components that need icons and names
export const socialLinksArray = [
  { 
    name: 'GitHub', 
    href: socialLinks.github, 
    icon: Github 
  },
  { 
    name: 'LinkedIn', 
    href: socialLinks.linkedin, 
    icon: Linkedin 
  },
  { 
    name: 'YouTube', 
    href: socialLinks.youtube, 
    icon: Youtube 
  },
]

// Type definitions for better TypeScript support
export type SocialLink = {
  name: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

export type SocialLinksObject = {
  github: string
  linkedin: string
  youtube: string
  email: string
  location: string
} 