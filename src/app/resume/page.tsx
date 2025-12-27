import Layout from '@/components/Layout'
import { Download, ExternalLink } from 'lucide-react'

export default function ResumePage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">Resume</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Professional experience and academic background
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/resume.pdf" 
              download
              className="btn-primary flex items-center space-x-2"
            >
              <Download className="h-5 w-5" />
              <span>Download PDF</span>
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-secondary flex items-center space-x-2"
            >
              <ExternalLink className="h-5 w-5" />
              <span>View PDF</span>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}