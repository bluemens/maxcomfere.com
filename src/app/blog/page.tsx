import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock } from 'lucide-react'
import { getAllPosts, getFeaturedPosts } from '@/lib/blog'

// Get blog data at build time
const blogPosts = getAllPosts()
const featuredPosts = getFeaturedPosts()

export default function BlogPage() {

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">Blog</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Deliberations
          </p>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-gray-100">Featured Posts</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {featuredPosts.map((post) => (
                <article key={post.slug} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-gray-900/20 transition-shadow duration-200">
                  {/* Featured Image */}
                  {post.image ? (
                    <div className="h-64 relative overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="h-64 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                      <div className="text-gray-400 dark:text-gray-500 text-sm">No Image</div>
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">Featured</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                      <Link href={`/blog/${post.slug}`} className="hover:text-gray-700 dark:hover:text-gray-300">
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
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
          <h2 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-gray-100">All Posts</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-gray-900/20 transition-shadow duration-200">
                {/* Post Image */}
                {post.image ? (
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="h-48 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                    <div className="text-gray-400 dark:text-gray-500 text-sm">No Image</div>
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300">
                      {post.category}
                    </span>
                    {post.featured && (
                      <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">Featured</span>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
                    <Link href={`/blog/${post.slug}`} className="hover:text-gray-700 dark:hover:text-gray-300">
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  {/* Tags */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
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
        <div className="mt-16 bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Blog Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">{blogPosts.length}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Total Posts</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {blogPosts.filter(p => p.category === 'Engineering/Tech').length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Tech Posts</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {blogPosts.filter(p => p.category === 'Creative/Videography').length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Creative Posts</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {blogPosts.filter(p => p.category === 'Startup/Business').length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Business Posts</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
} 