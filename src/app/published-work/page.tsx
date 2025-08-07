import Layout from '@/components/Layout'
import { ExternalLink, Calendar, Users } from 'lucide-react'

const publications = [
  {
    title: "Behavioral fingerprinting of the naked mole-rat uncovers signatures of eusociality and social touch",
    authors: ["Ryan Schwark", "Simon Ogundare", "Caleb Weinreb", "Preston Sheng", "William Foster", "Andre Toussaint", "Phalaen Chang", "Yu-Young Wesley Tsai", "Maximilian Comfere", "Amanda Arnold", "Antonella Guadagnino", "Daniel McCloskey", "Evan Schaffer", "Kanaka Rajan", "Sandeep Robert Datta", "Ishmail Abdus-Saboor"],
    venue: "Columbia University Zuckerman Mind, Brain, and Behavior Institute",
    year: 2024,
    doi: "https://doi.org/10.1101/2024.02.21.581483",
    summary: "This paper presents a novel approach to evaluating and characterizing naked mole rat behavioral profiles and interactions. Personal contributions include developing transition matrices to evaluate and classify naked mole rats within the colony, their respective roles and castes",
    category: "Research Paper",
    pdf: "/papers/behavioral-fingerprinting-naked-mole-rats.pdf", 
    url: "https://www.biorxiv.org/content/10.1101/2024.02.21.581483v1"
  }
]

const categories = ["All", "Research Paper", "Article", "Blog Post", "Technical Guide"]

export default function PublishedWorkPage() {
  // Calculate dynamic stats
  const totalPublications = publications.length
  
  // Count publications by category
  const categoryCounts = publications.reduce((acc, pub) => {
    acc[pub.category] = (acc[pub.category] || 0) + 1
    return acc
  }, {} as Record<string, number>)
  
  // Calculate publication period
  const years = publications.map(pub => pub.year).sort()
  const publicationPeriod = years.length > 0 
    ? years.length === 1 
      ? years[0].toString()
      : `${years[0]}-${years[years.length - 1]}`
    : "N/A"

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Published Work</h1>
          <p className="text-xl text-gray-600">
            Academic papers, articles, and technical publications
          </p>
        </div>

        {/* Publications List */}
        <div className="space-y-8">
          {publications.map((pub, index) => (
            <article key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {pub.category}
                    </span>
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{pub.year}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-semibold mb-3 text-gray-900">
                    {pub.title}
                  </h2>
                  
                  <div className="flex items-center space-x-2 mb-3 text-sm text-gray-600">
                    <Users className="h-4 w-4" />
                    <span>{pub.authors.join(', ')}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-2">
                    <span className="font-medium">{pub.venue}</span>
                  </p>
                  
                  {pub.doi && (
                    <p className="text-sm text-gray-500 mb-3">
                      DOI: {pub.doi}
                    </p>
                  )}
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                {pub.summary}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                {pub.pdf && (
                  <a
                    href={`/published-work/pdf/${pub.pdf.split('/').pop()}`}
                    className="btn-primary inline-flex items-center space-x-2 text-sm"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>View PDF</span>
                  </a>
                )}
                {pub.url && (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary inline-flex items-center space-x-2 text-sm"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Read Online</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Publication Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{totalPublications}</div>
              <div className="text-sm text-gray-600">Total Publications</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{categoryCounts["Research Paper"] || 0}</div>
              <div className="text-sm text-gray-600">Research Papers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{categoryCounts["Article"] || 0}</div>
              <div className="text-sm text-gray-600">Articles</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{publicationPeriod}</div>
              <div className="text-sm text-gray-600">Publication Period</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
} 