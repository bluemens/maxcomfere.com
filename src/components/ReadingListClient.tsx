'use client'

import { useState, useMemo } from 'react'
import BookCard from '@/components/BookCard'
import BookModal from '@/components/BookModal'
import { Filter, Search, Grid, List, BookOpen } from 'lucide-react'
import { Book } from '@/lib/reading'

interface ReadingListClientProps {
  books: Book[]
  categories: string[]
  tags: string[]
  stats: {
    totalBooks: number
    averageRating: number
  }
}

export default function ReadingListClient({ books, categories, tags, stats }: ReadingListClientProps) {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('title')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  // Filter and sort books
  const filteredBooks = useMemo(() => {
    let filtered = books

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(book =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(book => book.category === selectedCategory)
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title)
        case 'author':
          return a.author.localeCompare(b.author)
        case 'year':
          return b.year - a.year
        case 'rating':
          return (b.rating || 0) - (a.rating || 0)
        default:
          return 0
      }
    })

    return filtered
  }, [books, searchQuery, selectedCategory, sortBy])

  const handleBookClick = (book: Book) => {
    setSelectedBook(book)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedBook(null)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
            <BookOpen className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Personal Library</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mt-1">
              A curated collection of {stats.totalBooks} books that have shaped my thinking
            </p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="mb-8 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-indigo-900 dark:text-indigo-300">{stats.totalBooks}</div>
            <div className="text-sm text-indigo-700 dark:text-indigo-400">Total Books</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-700 dark:text-purple-300">{stats.averageRating}⭐</div>
            <div className="text-sm text-purple-600 dark:text-purple-400">Avg Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">{categories.length}</div>
            <div className="text-sm text-blue-600 dark:text-blue-400">Categories</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-700 dark:text-green-300">{tags.length}</div>
            <div className="text-sm text-green-600 dark:text-green-400">Tags</div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="mb-8 space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
          <input
            type="text"
            placeholder="Search books, authors, categories, or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
          />
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-4">
          {/* Category Filter */}
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {/* Sort By */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          >
            <option value="title">Sort by Title</option>
            <option value="author">Sort by Author</option>
            <option value="year">Sort by Year</option>
            <option value="rating">Sort by Rating</option>
          </select>

          {/* View Mode Toggle */}
          <div className="flex border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-2 text-sm ${viewMode === 'grid' ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
            >
              <Grid className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-3 py-2 text-sm ${viewMode === 'list' ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
            >
              <List className="h-4 w-4" />
            </button>
          </div>

          {/* Results Count */}
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {filteredBooks.length} of {books.length} books
          </div>
        </div>
      </div>

      {/* Books Grid */}
      {filteredBooks.length > 0 ? (
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {filteredBooks.map((book) => (
            <BookCard
              key={book.title}
              book={book}
              onClick={() => handleBookClick(book)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <BookOpen className="h-12 w-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">No books found</h3>
          <p className="text-gray-600 dark:text-gray-400">Try adjusting your search or filters</p>
        </div>
      )}

      {/* Book Modal */}
      <BookModal
        book={selectedBook}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  )
} 