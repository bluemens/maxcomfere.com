import Layout from '@/components/Layout'
import { ExternalLink, Mail, MapPin, Calendar } from 'lucide-react'
import { socialLinks } from '@/lib/socialLinks'

const links = [
  {
    category: 'Professional',
    items: [
      {
        title: 'LinkedIn',
        description: 'Professional network and experience',
        url: socialLinks.linkedin,
        icon: '💼'
      },
      {
        title: 'GitHub',
        description: 'Code repositories and projects',
        url: socialLinks.github,
        icon: '💻'
      },
      {
        title: 'Resume',
        description: 'Download my full resume',
        url: '/resume',
        icon: '📄'
      }
    ]
  },
  {
    category: 'Creative',
    items: [
      {
        title: 'YouTube',
        description: 'Videography and creative content',
        url: socialLinks.youtube,
        icon: '🎬'
      },
      {
        title: 'Portfolio',
        description: 'Creative work and projects',
        url: '/projects',
        icon: '🎨'
      }
    ]
  },
  {
    category: 'Academic',
    items: [
      {
        title: 'Published Papers',
        description: 'Research and academic publications',
        url: '/published-work',
        icon: '📚'
      },
      {
        title: 'Reading List',
        description: 'A list of colorful textual inputs',
        url: '/reading-list',
        icon: '📖'
      },
      {
        title: 'Blog',
        description: 'Deliberations',
        url: '/blog',
        icon: '✍️'
      }
    ]
  },
  {
    category: 'Contact',
    items: [
      {
        title: 'Email',
        description: socialLinks.email,
        url: `mailto:${socialLinks.email}`,
        icon: '📧'
      },
      {
        title: 'Location',
        description: socialLinks.location,
        url: '#',
        icon: '📍'
      }
    ]
  }
]

export default function HomePage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Maximilian Comfere
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            a proclamation of the soul
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>{socialLinks.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>Available for opportunities</span>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="space-y-8">
          {links.map((section) => (
            <div key={section.category}>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                {section.category}
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {section.items.map((item) => (
                  <a
                    key={item.title}
                    href={item.url}
                    className="group block p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-200 hover:border-gray-300"
                    target={item.url.startsWith('http') ? '_blank' : undefined}
                    rel={item.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <div className="flex items-start space-x-4">
                      <span className="text-2xl">{item.icon}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2">
                          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-black">
                            {item.title}
                          </h3>
                          {item.url.startsWith('http') && (
                            <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-gray-600" />
                          )}
                        </div>
                        <p className="text-gray-600 mt-1">{item.description}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-gray-100 px-6 py-3 rounded-full">
            <Mail className="h-5 w-5 text-gray-600" />
            <span className="text-gray-700 font-medium">
              Get in touch: {socialLinks.email}
            </span>
          </div>
        </div>
      </div>
    </Layout>
  )
}
