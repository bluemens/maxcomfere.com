import Layout from '@/components/Layout'
import { Mail, MapPin, Calendar } from 'lucide-react'
import { socialLinks } from '@/lib/socialLinks'
import Image from 'next/image'
import { TextScramble } from '@/components/ui/text-scramble'

export default function HomePage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <TextScramble
            as="h1"
            className="text-4xl md:text-6xl font-bold mb-6"
            duration={1.2}
          >
            Maximilian Comfere
          </TextScramble>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            a collection of inputs, reflections and creations
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
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

        {/* Profile Picture */}
        <div className="flex justify-center mb-16">
          <div className="w-48 h-48 rounded-full border-4 border-white dark:border-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <Image
              src="/IMG_4728.jpeg"
              alt="Maximilian Comfere"
              width={400}
              height={400}
              className="w-full h-full object-cover object-top"
              priority
            />
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 px-6 py-3 rounded-full">
            <Mail className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              Get in touch: {socialLinks.email}
            </span>
          </div>
        </div>
      </div>
    </Layout>
  )
}
