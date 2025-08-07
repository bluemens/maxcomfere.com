import Layout from '@/components/Layout'
import Link from 'next/link'
import { Calendar, Clock, Tag } from 'lucide-react'

const blogPosts = [
  {
    slug: 'building-scalable-microservices',
    title: 'Building Scalable Microservices: Lessons from Production',
    excerpt: 'A deep dive into the challenges and solutions we encountered while scaling our microservices architecture to handle millions of requests per day.',
    category: 'Engineering/Tech',
    date: '2023-12-15',
    readTime: '8 min read',
    featured: true,
    image: '/blog/microservices-architecture.jpg',
    tags: ['Microservices', 'Architecture', 'Scalability', 'Production']
  },
  {
    slug: 'creative-coding-generative-art',
    title: 'Creative Coding: From Algorithms to Art',
    excerpt: 'Exploring the intersection of mathematics, programming, and visual art through generative algorithms and real-time rendering techniques.',
    category: 'Creative/Videography',
    date: '2023-11-28',
    readTime: '12 min read',
    featured: true,
    image: '/blog/generative-art.jpg',
    tags: ['Creative Coding', 'Generative Art', 'WebGL', 'JavaScript']
  },
  {
    slug: 'startup-lessons-learned',
    title: 'Startup Lessons: Building Products That Matter',
    excerpt: 'Reflections on the journey of building and scaling a technology startup, from initial concept to serving thousands of users.',
    category: 'Startup/Business',
    date: '2023-11-10',
    readTime: '10 min read',
    featured: false,
    image: '/blog/startup-lessons.jpg',
    tags: ['Startup', 'Product Development', 'Leadership', 'Growth']
  },
  {
    slug: 'machine-learning-production',
    title: 'Machine Learning in Production: Best Practices',
    excerpt: 'Practical insights into deploying and maintaining machine learning models in production environments with real-world examples.',
    category: 'Engineering/Tech',
    date: '2023-10-25',
    readTime: '15 min read',
    featured: false,
    image: '/blog/ml-production.jpg',
    tags: ['Machine Learning', 'Production', 'MLOps', 'Python']
  },
  {
    slug: 'videography-workflow-automation',
    title: 'Automating Video Production Workflows',
    excerpt: 'How we built custom tools and scripts to streamline video production processes and improve creative output quality.',
    category: 'Creative/Videography',
    date: '2023-10-12',
    readTime: '6 min read',
    featured: false,
    image: '/blog/video-automation.jpg',
    tags: ['Videography', 'Automation', 'Workflow', 'Creative Tools']
  },
  {
    slug: 'developer-experience-future',
    title: 'The Future of Developer Experience',
    excerpt: 'Exploring emerging trends in developer tooling, automation, and workflow optimization that are reshaping how we build software.',
    category: 'Engineering/Tech',
    date: '2023-09-30',
    readTime: '11 min read',
    featured: false,
    image: '/blog/dev-experience.jpg',
    tags: ['Developer Experience', 'Tooling', 'Automation', 'Productivity']
  }
]

const categories = ['All', 'Engineering/Tech', 'Startup/Business', 'Creative/Videography']

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-gray-600">
            Thoughts on engineering, creativity, and building things that matter
          </p>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-8">Featured Posts</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {featuredPosts.map((post) => (
                <article key={post.slug} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
                  {/* Featured Image Placeholder */}
                  <div className="h-64 bg-gray-100 flex items-center justify-center">
                    <div className="text-gray-400 text-sm">Featured Image</div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">Featured</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">
                      <Link href={`/blog/${post.slug}`} className="hover:text-gray-700">
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* All Posts */}
        <section>
          <h2 className="text-2xl font-semibold mb-8">All Posts</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
                {/* Post Image Placeholder */}
                <div className="h-48 bg-gray-100 flex items-center justify-center">
                  <div className="text-gray-400 text-sm">Post Image</div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {post.category}
                    </span>
                    {post.featured && (
                      <span className="text-xs text-blue-600 font-medium">Featured</span>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">
                    <Link href={`/blog/${post.slug}`} className="hover:text-gray-700">
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  {/* Tags */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Blog Stats */}
        <div className="mt-16 bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Blog Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{blogPosts.length}</div>
              <div className="text-sm text-gray-600">Total Posts</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">
                {blogPosts.filter(p => p.category === 'Engineering/Tech').length}
              </div>
              <div className="text-sm text-gray-600">Tech Posts</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">
                {blogPosts.filter(p => p.category === 'Creative/Videography').length}
              </div>
              <div className="text-sm text-gray-600">Creative Posts</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">
                {blogPosts.filter(p => p.category === 'Startup/Business').length}
              </div>
              <div className="text-sm text-gray-600">Business Posts</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
} 