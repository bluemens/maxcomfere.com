import { X, Star, Calendar, Tag, BookOpen, Quote } from 'lucide-react'
import { Book } from '@/lib/reading'

interface BookModalProps {
  book: Book | null
  isOpen: boolean
  onClose: () => void
}

export default function BookModal({ book, isOpen, onClose }: BookModalProps) {
  if (!book || !isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Book Details</h2>
          <button
            onClick={onClose}
            className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Book Cover and Basic Info */}
          <div className="flex space-x-6 mb-6">
            <div className="flex-shrink-0">
              <div className="w-32 h-40 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 rounded-lg flex items-center justify-center">
                <BookOpen className="h-12 w-12 text-slate-400 dark:text-slate-500" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">{book.title}</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-3">by {book.author}</p>
              
              <div className="flex items-center space-x-4 mb-4">
                <span className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="h-4 w-4 mr-1" />
                  {book.year}
                </span>
              </div>

              {/* Rating */}
              {book.rating && (
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(book.rating!)
                            ? 'text-yellow-400 fill-current'
                            : i < book.rating!
                            ? 'text-yellow-400 fill-current opacity-50'
                            : 'text-gray-300 dark:text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{book.rating}/5 stars</span>
                </div>
              )}

              {/* Category */}
              <div className="mb-4">
                <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                  {book.category}
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Description</h4>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{book.description}</p>
          </div>

          {/* Tags */}
          {book.tags.length > 0 && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {book.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                  >
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Personal Notes */}
          {book.personalNotes && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
                <Quote className="h-5 w-5 mr-2 text-indigo-600 dark:text-indigo-400" />
                Personal Notes
              </h4>
              <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4">
                <p className="text-gray-800 dark:text-gray-200 italic leading-relaxed">&ldquo;{book.personalNotes}&rdquo;</p>
              </div>
            </div>
          )}

          {/* Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {book.recommendedBy && (
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Recommended By</h5>
                <p className="text-gray-900 dark:text-gray-100">{book.recommendedBy}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 