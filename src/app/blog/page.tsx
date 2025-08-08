import Layout from '@/components/Layout'
import Link from 'next/link'
import { Calendar, Clock, Tag } from 'lucide-react'
import { getAllPosts, getFeaturedPosts, getAllCategories } from '@/lib/blog'

// Get blog data at build time
const blogPosts = getAllPosts()
const featuredPosts = getFeaturedPosts()
const categories = getAllCategories()

export default function BlogPage() {
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