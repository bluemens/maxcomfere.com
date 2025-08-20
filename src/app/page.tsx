import Layout from '@/components/Layout'
import { Mail, MapPin, Calendar } from 'lucide-react'
import { socialLinks } from '@/lib/socialLinks'
import Image from 'next/image'

export default function HomePage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Maximilian Comfere
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            proof of existence through thinking, building and sharing
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

        {/* Profile and Bio Section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-12 space-y-8 lg:space-y-0">
          {/* Profile Picture */}
          <div className="flex-shrink-0 flex justify-center lg:justify-start">
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
          
          {/* Bio Content */}
          <div className="flex-1 space-y-6">
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I&apos;m a student, engineer, writer and architect passionate about the intersection of 
                artificial intelligence, software development, political systems and philosophy.
                I&apos;m currently studying computer engineeringat Columbia University.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Here you can find the snapshot of my current projects and interests. It showcases the state of my current projects, some
                relatively short, others life long endeavors, none of a gimmicky nature. All are built for application. Here I also broadcast
                my thoughts writ large on a vairety of subjhects ranging from geopolitical perspectives and philosophical inquiries to specific
                development journals and technical documentation. I also share my reading list, although it is not exhaustive and due to 
                laziness is only contains works read and purchased post August 2025
              </p>
              
          
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Based in {socialLinks.location}. Open to discussion and disagreement (preferably the latter).
              </p>
            </div>
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
