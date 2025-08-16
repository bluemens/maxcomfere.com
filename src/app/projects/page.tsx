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
  "Active": "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300",
  "Completed": "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300",
  "In Development": "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300"
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
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">Current Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Active development work and completed projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-gray-900/20 transition-shadow duration-200">
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                <div className="text-gray-400 dark:text-gray-500 text-sm">Project Image</div>
              </div>
              
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{project.category}</p>
                  </div>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[project.status as keyof typeof statusColors]}`}>
                    {project.status}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400 mb-4">
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
                      className="inline-flex items-center space-x-1 text-xs text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
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
                      className="inline-flex items-center space-x-1 text-xs text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
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
                      className="inline-flex items-center space-x-1 text-xs text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
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
        <div className="mt-12 bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Project Overview</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">{totalProjects}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {activeProjects}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Active</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {completedProjects}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {inDevelopmentProjects}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">In Development</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">{totalTechnologies}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">{totalCategories}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Categories</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
} 