import fs from 'fs'
import path from 'path'

const READING_DIRECTORY = path.join(process.cwd(), 'content/reading')

export interface Book {
  title: string
  author: string
  category: string
  description: string
  personalNotes: string
  rating: number | null
  year: number
  status: 'read' | 'currently-reading' | 'want-to-read'
  dateRead?: string
  dateStarted?: string
  dateAdded?: string
  tags: string[]
  recommendedBy: string
  coverImage?: string
}

/**
 * Load all books from the JSON file
 */
function loadBooks(): Book[] {
  try {
    const filePath = path.join(READING_DIRECTORY, 'books.json')
    const fileContents = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(fileContents)
  } catch (error) {
    console.error('Error loading books:', error)
    return []
  }
}

/**
 * Save books to the JSON file
 */
function saveBooks(books: Book[]): boolean {
  try {
    const filePath = path.join(READING_DIRECTORY, 'books.json')
    fs.writeFileSync(filePath, JSON.stringify(books, null, 2))
    return true
  } catch (error) {
    console.error('Error saving books:', error)
    return false
  }
}

/**
 * Get all books
 */
export function getAllBooks(): Book[] {
  return loadBooks().sort((a, b) => {
    // Sort by status priority, then by date
    const statusPriority = { 'currently-reading': 3, 'read': 2, 'want-to-read': 1 }
    const statusDiff = statusPriority[b.status] - statusPriority[a.status]
    if (statusDiff !== 0) return statusDiff
    
    // Then by date (most recent first)
    const dateA = b.dateRead || b.dateStarted || b.dateAdded || '0000-01-01'
    const dateB = a.dateRead || a.dateStarted || a.dateAdded || '0000-01-01'
    return new Date(dateA).getTime() - new Date(dateB).getTime()
  })
}

/**
 * Get books by status
 */
export function getBooksByStatus(status: Book['status']): Book[] {
  return getAllBooks().filter(book => book.status === status)
}

/**
 * Get currently reading books
 */
export function getCurrentlyReading(): Book[] {
  return getBooksByStatus('currently-reading')
}

/**
 * Get finished books
 */
export function getFinishedBooks(): Book[] {
  return getBooksByStatus('read').sort((a, b) => {
    const dateA = a.dateRead || '0000-01-01'
    const dateB = b.dateRead || '0000-01-01'
    return new Date(dateB).getTime() - new Date(dateA).getTime()
  })
}

/**
 * Get books to read
 */
export function getWantToRead(): Book[] {
  return getBooksByStatus('want-to-read')
}

/**
 * Get books by category
 */
export function getBooksByCategory(category: string): Book[] {
  return getAllBooks().filter(book => book.category === category)
}

/**
 * Get all reading statistics
 */
export function getReadingStats() {
  const books = getAllBooks()
  const readBooks = getFinishedBooks()
  const currentlyReading = getCurrentlyReading()
  const wantToRead = getWantToRead()

  const totalBooks = books.length
  const averageRating = readBooks.length > 0 
    ? readBooks
        .filter(book => book.rating !== null)
        .reduce((sum, book) => sum + (book.rating || 0), 0) / readBooks.filter(book => book.rating !== null).length
    : 0

  const categoryCounts = books.reduce((acc, book) => {
    acc[book.category] = (acc[book.category] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const yearRange = readBooks.length > 0 
    ? {
        earliest: Math.min(...readBooks.map(book => book.year)),
        latest: Math.max(...readBooks.map(book => book.year))
      }
    : null

  const topTags = books
    .flatMap(book => book.tags)
    .reduce((acc, tag) => {
      acc[tag] = (acc[tag] || 0) + 1
      return acc
    }, {} as Record<string, number>)

  const sortedTags = Object.entries(topTags)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 5)
    .map(([tag]) => tag)

  return {
    totalBooks,
    readBooks: readBooks.length,
    currentlyReading: currentlyReading.length,
    wantToRead: wantToRead.length,
    averageRating: Math.round(averageRating * 10) / 10,
    categoryCounts,
    topCategories: Object.entries(categoryCounts)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5)
      .map(([category]) => category),
    yearRange,
    topTags: sortedTags,
    booksWithRatings: readBooks.filter(book => book.rating !== null).length
  }
}

/**
 * Get all unique categories
 */
export function getAllCategories(): string[] {
  const books = getAllBooks()
  return [...new Set(books.map(book => book.category))].sort()
}

/**
 * Get all unique tags
 */
export function getAllTags(): string[] {
  const books = getAllBooks()
  const tags = books.flatMap(book => book.tags)
  return [...new Set(tags)].sort()
}

/**
 * Search books by title, author, category, or personal notes
 */
export function searchBooks(query: string): Book[] {
  const books = getAllBooks()
  const searchQuery = query.toLowerCase()
  
  return books.filter(book => 
    book.title.toLowerCase().includes(searchQuery) ||
    book.author.toLowerCase().includes(searchQuery) ||
    book.category.toLowerCase().includes(searchQuery) ||
    book.personalNotes.toLowerCase().includes(searchQuery) ||
    book.tags.some(tag => tag.toLowerCase().includes(searchQuery))
  )
}

/**
 * Add a new book
 */
export function addBook(book: Omit<Book, 'dateAdded'> & { dateAdded?: string }): boolean {
  const books = getAllBooks()
  const newBook: Book = {
    ...book,
    dateAdded: book.dateAdded || new Date().toISOString().split('T')[0]
  }
  
  books.push(newBook)
  return saveBooks(books)
}

/**
 * Update a book's information
 */
export function updateBook(title: string, updates: Partial<Book>): boolean {
  const books = getAllBooks()
  const bookIndex = books.findIndex(book => book.title === title)
  
  if (bookIndex === -1) return false
  
  books[bookIndex] = { ...books[bookIndex], ...updates }
  return saveBooks(books)
}

/**
 * Update a book's status
 */
export function updateBookStatus(
  title: string, 
  status: Book['status'], 
  additionalData?: { rating?: number; dateRead?: string; dateStarted?: string }
): boolean {
  const updates: Partial<Book> = { status }
  
  if (status === 'read' && additionalData?.rating) {
    updates.rating = additionalData.rating
    updates.dateRead = additionalData.dateRead || new Date().toISOString().split('T')[0]
  } else if (status === 'currently-reading') {
    updates.dateStarted = additionalData?.dateStarted || new Date().toISOString().split('T')[0]
  }
  
  return updateBook(title, updates)
}

/**
 * Get reading recommendations based on categories and tags
 */
export function getRecommendations(limit: number = 5): Book[] {
  const books = getAllBooks()
  const readBooks = getFinishedBooks()
  const wantToReadBooks = getWantToRead()
  
  if (readBooks.length === 0) return wantToReadBooks.slice(0, limit)
  
  // Get favorite categories (based on ratings)
  const categoryRatings = readBooks
    .filter(book => book.rating !== null)
    .reduce((acc, book) => {
      if (!acc[book.category]) acc[book.category] = []
      acc[book.category].push(book.rating!)
      return acc
    }, {} as Record<string, number[]>)
  
  const favoriteCategories = Object.entries(categoryRatings)
    .map(([category, ratings]) => ({
      category,
      avgRating: ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length
    }))
    .sort((a, b) => b.avgRating - a.avgRating)
    .slice(0, 3)
    .map(item => item.category)
  
  // Prioritize books in favorite categories
  const recommendations = wantToReadBooks
    .sort((a, b) => {
      const aInFavorite = favoriteCategories.includes(a.category)
      const bInFavorite = favoriteCategories.includes(b.category)
      
      if (aInFavorite && !bInFavorite) return -1
      if (!aInFavorite && bInFavorite) return 1
      return 0
    })
  
  return recommendations.slice(0, limit)
}