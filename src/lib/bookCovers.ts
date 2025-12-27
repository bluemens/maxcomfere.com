import { Book } from './reading'

/**
 * Generates potential local cover image paths based on book title
 */
function generateLocalCoverPaths(book: Book): string[] {
  const paths: string[] = []
  
  // If coverImage is already set in books.json, add it first
  if (book.coverImage) {
    paths.push(book.coverImage)
  }

  // Generate potential local file paths based on book title
  const titleSlug = book.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
  
  const commonExtensions = ['.jpg', '.jpeg', '.png', '.webp']
  
  // Try common variations
  for (const ext of commonExtensions) {
    paths.push(`/books/${titleSlug}${ext}`)
  }
  
  return paths
}

/**
 * Fetches book cover image URL
 * Priority: 1) local /books/ files (if coverImage failed), 2) Google Books API
 * Note: coverImage from books.json is handled by the component directly
 */
export async function getBookCover(book: Book): Promise<string | null> {
  // First, try local files in /books/ directory (if coverImage from books.json failed)
  const localPaths = generateLocalCoverPaths(book)
  
  // Try each local path - check if file exists
  for (const path of localPaths) {
    // Skip if this is the same as coverImage (already tried)
    if (path === book.coverImage) {
      continue
    }
    
    // Check if file exists
    try {
      const response = await fetch(path, { method: 'HEAD' })
      if (response.ok) {
        return path
      }
    } catch {
      // Continue to next path
    }
  }

  // Second, try Google Books API
  try {
    const response = await fetch(
      `/api/books/cover?title=${encodeURIComponent(book.title)}&author=${encodeURIComponent(book.author)}`
    )

    if (!response.ok) {
      return null
    }

    const data = await response.json()
    return data.coverUrl || null
  } catch (error) {
    console.error('Error fetching book cover:', error)
    return null
  }
}

/**
 * Batch fetch covers for multiple books
 */
export async function getBookCovers(books: Book[]): Promise<Map<string, string | null>> {
  const coverMap = new Map<string, string | null>()
  
  // Fetch covers in parallel (with a limit to avoid overwhelming the API)
  const fetchPromises = books.map(async (book) => {
    const coverUrl = await getBookCover(book)
    coverMap.set(book.title, coverUrl)
  })

  await Promise.all(fetchPromises)
  return coverMap
}

