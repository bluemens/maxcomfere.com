import Layout from '@/components/Layout'
import { ArrowLeft, Download, ExternalLink } from 'lucide-react'
import Link from 'next/link'

interface PDFViewerPageProps {
  params: {
    filename: string
  }
}

export default function PDFViewerPage({ params }: PDFViewerPageProps) {
  const { filename } = params
  const pdfPath = `/papers/${filename}`

  return (
    <Layout>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                href="/published-work"
                className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Publications</span>
              </Link>
            </div>
            
            <div className="flex items-center space-x-3">
              <a
                href={pdfPath}
                download
                className="inline-flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
              >
                <Download className="h-4 w-4" />
                <span>Download</span>
              </a>
              <a
                href={pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Open in New Tab</span>
              </a>
            </div>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 bg-gray-50">
          <div className="h-full">
            <iframe
              src={pdfPath}
              className="w-full h-full border-0"
              title="PDF Viewer"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
} 