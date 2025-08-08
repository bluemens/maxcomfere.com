import Layout from '@/components/Layout'
import { Star, Calendar, BookOpen, CheckCircle, Clock, TrendingUp, BarChart3, Quote } from 'lucide-react'
import { getAllBooks, getReadingStats } from '@/lib/reading'

// Get reading data at build time
const books = getAllBooks()
const stats = getReadingStats()

export default function ReadingListPage() {
  const currentlyReading = books.filter(book => book.status === 'currently-reading')
  const recentlyRead = books.filter(book => book.status === 'read').slice(0, 6)
  const wantToRead = books.filter(book => book.status === 'want-to-read').slice(0, 6)

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Reading Collection</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            A curated collection of books that have shaped my thinking, with personal reflections and recommendations.
          </p>
        </div>

        {/* Reading Stats */}
        <div className="mb-12 bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <BarChart3 className="h-5 w-5 mr-2" />
            Reading Statistics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{stats.totalBooks}</div>
              <div className="text-sm text-gray-600">Total Books</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{stats.readBooks}</div>
              <div className="text-sm text-gray-600">Books Read</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{stats.currentlyReading}</div>
              <div className="text-sm text-gray-600">Currently Reading</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{stats.averageRating}⭐</div>
              <div className="text-sm text-gray-600">Avg Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{stats.topCategories.length}</div>
              <div className="text-sm text-gray-600">Categories</div>
            </div>
          </div>
          
          {/* Top Categories and Tags */}
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Top Categories:</p>
              <div className="flex flex-wrap gap-2">
                {stats.topCategories.slice(0, 4).map(category => (
                  <span key={category} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {category}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Common Tags:</p>
              <div className="flex flex-wrap gap-2">
                {stats.topTags.slice(0, 4).map(tag => (
                  <span key={tag} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Currently Reading */}
        {currentlyReading.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center space-x-2 mb-6">
              <BookOpen className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-semibold text-gray-800">Currently Reading</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {currentlyReading.map((book) => (
                <div key={book.title} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-md flex items-center justify-center">
                        <BookOpen className="h-8 w-8 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{book.title}</h3>
                      <p className="text-gray-600 mb-2">by {book.author} ({book.year})</p>
                      <p className="text-sm text-gray-500 mb-3">{book.description}</p>
                      
                      {book.personalNotes && (
                        <div className="mb-3 p-3 bg-blue-50 rounded-lg">
                          <div className="flex items-start space-x-2">
                            <Quote className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <p className="text-sm text-blue-800 italic">{book.personalNotes}</p>
                          </div>
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span className="bg-gray-100 px-2 py-1 rounded">{book.category}</span>
                        {book.dateStarted && (
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>Started {new Date(book.dateStarted).toLocaleDateString()}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recently Read */}
        <div className="mb-16">
          <div className="flex items-center space-x-2 mb-6">
            <CheckCircle className="h-6 w-6 text-green-600" />
            <h2 className="text-2xl font-semibold text-gray-800">Recently Read</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recentlyRead.map((book) => (
              <div key={book.title} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-md flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{book.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">by {book.author} ({book.year})</p>
                    
                    {/* Rating */}
                    {book.rating && (
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(book.rating!)
                                  ? 'text-yellow-400 fill-current'
                                  : i < book.rating!
                                  ? 'text-yellow-400 fill-current opacity-50'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">{book.rating}/5</span>
                      </div>
                    )}
                    
                    {book.personalNotes && (
                      <div className="mb-3 p-3 bg-green-50 rounded-lg">
                        <div className="flex items-start space-x-2">
                          <Quote className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-green-800 italic line-clamp-3">{book.personalNotes}</p>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="bg-gray-100 px-2 py-1 rounded">{book.category}</span>
                      {book.dateRead && (
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>Read {new Date(book.dateRead).toLocaleDateString()}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Want to Read */}
        {wantToRead.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center space-x-2 mb-6">
              <Clock className="h-6 w-6 text-orange-600" />
              <h2 className="text-2xl font-semibold text-gray-800">Want to Read</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {wantToRead.map((book) => (
                <div key={book.title} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
                  <div className="flex space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-md flex items-center justify-center">
                        <Clock className="h-5 w-5 text-orange-600" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-md font-semibold text-gray-900 mb-1">{book.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">by {book.author} ({book.year})</p>
                      <p className="text-xs text-gray-500 mb-2">{book.description}</p>
                      
                      {book.personalNotes && (
                        <div className="mb-2 p-2 bg-orange-50 rounded">
                          <p className="text-xs text-orange-800 italic">{book.personalNotes}</p>
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between text-xs">
                        <span className="bg-gray-100 px-2 py-1 rounded">{book.category}</span>
                        {book.recommendedBy && (
                          <span className="text-gray-500">via {book.recommendedBy}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Books Link */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-gray-100 px-6 py-3 rounded-full">
            <BookOpen className="h-5 w-5 text-gray-600" />
            <span className="text-gray-700 font-medium">
              Showing {currentlyReading.length + recentlyRead.length + wantToRead.length} of {stats.totalBooks} books
            </span>
          </div>
        </div>
      </div>
    </Layout>
  )
}