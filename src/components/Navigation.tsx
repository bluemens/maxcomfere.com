'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { socialLinksArray } from '@/lib/socialLinks'
import ThemeToggle from './ThemeToggle'

const navigation = [
  { name: 'Links', href: '/' },
  { name: 'Resume', href: '/resume' },
  { name: 'Published Work', href: '/published-work' },
  { name: 'Projects', href: '/projects' },
  { name: 'Reading List', href: '/reading-list' },
  { name: 'Blog', href: '/blog' },
]


export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-black dark:text-white">
            Maximilian Comfere
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-black dark:text-white border-b-2 border-black dark:border-white'
                      : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>

          {/* Social Links and Theme Toggle */}
          <div className="flex items-center space-x-4">
            {socialLinksArray.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200"
                  aria-label={item.name}
                >
                  <Icon className="h-5 w-5" />
                </a>
              )
            })}
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
              aria-label="Open mobile menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
} 