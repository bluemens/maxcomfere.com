import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const BLOG_DIRECTORY = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  tags: string[]
  date: string
  readTime: string
  featured: boolean
  status: 'published' | 'draft'
  content: string
  image?: string
}

export interface BlogPostMetadata {
  slug: string
  title: string
  excerpt: string
  category: string
  tags: string[]
  date: string
  readTime: string
  featured: boolean
  status: 'published' | 'draft'
  image?: string
}

/**
 * Get all blog post metadata (without content)
 */
export function getAllPosts(): BlogPostMetadata[] {
  const fileNames = fs.readdirSync(BLOG_DIRECTORY)
  const posts = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(BLOG_DIRECTORY, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      return {
        slug,
        title: data.title,
        excerpt: data.excerpt,
        category: data.category,
        tags: data.tags || [],
        date: data.date,
        readTime: data.readTime,
        featured: data.featured || false,
        status: data.status || 'published',
        image: data.image
      }
    })
    .filter(post => post.status === 'published')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return posts
}

/**
 * Get published posts only
 */
export function getPublishedPosts(): BlogPostMetadata[] {
  return getAllPosts().filter(post => post.status === 'published')
}

/**
 * Get featured posts
 */
export function getFeaturedPosts(): BlogPostMetadata[] {
  return getPublishedPosts().filter(post => post.featured)
}

/**
 * Get posts by category
 */
export function getPostsByCategory(category: string): BlogPostMetadata[] {
  return getPublishedPosts().filter(post => 
    post.category === category || category === 'All'
  )
}

/**
 * Get a single blog post by slug
 */
export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(BLOG_DIRECTORY, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      category: data.category,
      tags: data.tags || [],
      date: data.date,
      readTime: data.readTime,
      featured: data.featured || false,
      status: data.status || 'published',
      content,
      image: data.image
    }
  } catch (error) {
    return null
  }
}

/**
 * Get all unique categories
 */
export function getAllCategories(): string[] {
  const posts = getAllPosts()
  const categories = [...new Set(posts.map(post => post.category))]
  return ['All', ...categories.sort()]
}

/**
 * Get all unique tags
 */
export function getAllTags(): string[] {
  const posts = getAllPosts()
  const tags = posts.flatMap(post => post.tags)
  return [...new Set(tags)].sort()
}

/**
 * Search posts by title, excerpt, or tags
 */
export function searchPosts(query: string): BlogPostMetadata[] {
  const posts = getPublishedPosts()
  const searchQuery = query.toLowerCase()

  return posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery) ||
    post.excerpt.toLowerCase().includes(searchQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery))
  )
}