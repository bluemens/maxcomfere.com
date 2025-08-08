import Layout from '@/components/Layout'
import { ExternalLink, Github, Play, Globe, Calendar } from 'lucide-react'

const projects = [
  {
    title: "mowthosOS",
    description: "The operating system for mowthos, a platform that allows users to share their autonomus devices",
    status: "Active",
    category: "Backend Development",
    technologies: ["Python", "PostgreSQL", "Docker", "FastAPI", "Redis"],
    links: {
      github: "https://github.com/bluemens/mowthosOS",
      demo: null,
      live: null
    },
    image: "/projects/ai-recommendation.jpg",
    startDate: "2025-07",
    endDate: null
  },
  {
    title: "anacyclosis",
    description: "Agentic trading algorithm for trading medium term options based on the predictably insincere movements of government representatives",
    status: "In Development",
    category: "Financial Market Modeling",
    technologies: ["Python", "IBKR"],
    links: {
      github: "https://github.com/bluemens/anacyclosis",
      demo: null,
      live: null
    },
    image: "/projects/creative-coding.jpg",
    startDate: "2025-06",
    endDate: null
  }
]

const statusColors = {
  "Active": "bg-green-100 text-green-800",
  "Completed": "bg-blue-100 text-blue-800",
  "In Development": "bg-yellow-100 text-yellow-800"
}

export default function ProjectsPage() {
  // Calculate dynamic stats
  const totalProjects = projects.length
  const activeProjects = projects.filter(p => p.status === 'Active').length
  const completedProjects = projects.filter(p => p.status === 'Completed').length
  const inDevelopmentProjects = projects.filter(p => p.status === 'In Development').length
  
  // Calculate unique technologies across all projects
  const allTechnologies = projects.flatMap(p => p.technologies)
  const uniqueTechnologies = [...new Set(allTechnologies)]
  const totalTechnologies = uniqueTechnologies.length
  
  // Calculate unique categories
  const uniqueCategories = [...new Set(projects.map(p => p.category))]
  const totalCategories = uniqueCategories.length

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Current Projects</h1>
          <p className="text-xl text-gray-600">
            Active development work and completed projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                <div className="text-gray-400 text-sm">Project Image</div>
              </div>
              
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500">{project.category}</p>
                  </div>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[project.status as keyof typeof statusColors]}`}>
                    {project.status}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div className="flex items-center space-x-2 text-xs text-gray-500 mb-4">
                  <Calendar className="h-3 w-3" />
                  <span>
                    {project.startDate} - {project.endDate || 'Present'}
                  </span>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-2">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-xs text-gray-600 hover:text-black transition-colors"
                    >
                      <Github className="h-3 w-3" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-xs text-gray-600 hover:text-black transition-colors"
                    >
                      <Play className="h-3 w-3" />
                      <span>Demo</span>
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-xs text-gray-600 hover:text-black transition-colors"
                    >
                      <Globe className="h-3 w-3" />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Project Stats */}
        <div className="mt-12 bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Project Overview</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{totalProjects}</div>
              <div className="text-sm text-gray-600">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">
                {activeProjects}
              </div>
              <div className="text-sm text-gray-600">Active</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">
                {completedProjects}
              </div>
              <div className="text-sm text-gray-600">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">
                {inDevelopmentProjects}
              </div>
              <div className="text-sm text-gray-600">In Development</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{totalTechnologies}</div>
              <div className="text-sm text-gray-600">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{totalCategories}</div>
              <div className="text-sm text-gray-600">Categories</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
} 