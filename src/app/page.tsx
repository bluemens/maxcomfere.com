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
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            proof of existence through buidling, thinking then sharing
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

        {/* Profile and Bio Section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-12 space-y-8 lg:space-y-0">
          {/* Profile Picture */}
          <div className="flex-shrink-0 flex justify-center lg:justify-start">
            <div className="w-48 h-48 rounded-full border-4 border-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
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
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                I'm a researcher, developer, and creative technologist passionate about the intersection of 
                artificial intelligence, behavioral science, and human-computer interaction. My work spans 
                from computational neuroscience research to building scalable software systems that solve 
                real-world problems.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Currently, I'm exploring how machine learning can help us better understand complex social 
                behaviors, particularly in the context of eusocial animals like naked mole-rats. My research 
                involves developing novel computational methods for behavioral analysis, including transition 
                matrices and clustering algorithms that reveal hidden patterns in social interaction data.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                When I'm not diving deep into research, I'm building innovative software solutions and 
                experimenting with creative coding. I believe technology should be both powerful and 
                accessible, which drives my work on open-source projects and educational content.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Based in {socialLinks.location}, I'm always open to collaborating on interesting projects 
                that push the boundaries of what's possible at the intersection of science and technology.
              </p>
            </div>
          </div>
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
