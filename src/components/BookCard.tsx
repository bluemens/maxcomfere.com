import { Star, BookOpen, Calendar, Tag } from 'lucide-react'
import { Book } from '@/lib/reading'

interface BookCardProps {
  book: Book
  onClick?: () => void
}

export default function BookCard({ book, onClick }: BookCardProps) {
  return (
    <div 
      className="group relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-gray-900/20 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
      onClick={onClick}
    >
      {/* Book Cover Placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative z-10 text-center">
          <BookOpen className="h-12 w-12 text-slate-400 dark:text-slate-500 mx-auto mb-2 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-300" />
          <div className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wide">
            {book.category}
          </div>
        </div>
      </div>

      {/* Book Details */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 overflow-hidden text-ellipsis whitespace-nowrap">
          {book.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">by {book.author}</p>
        
        {/* Rating */}
        {book.rating && (
          <div className="flex items-center space-x-1 mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${
                    i < Math.floor(book.rating!)
                      ? 'text-yellow-400 fill-current'
                      : i < book.rating!
                      ? 'text-yellow-400 fill-current opacity-50'
                      : 'text-gray-300 dark:text-gray-600'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">{book.rating}/5</span>
          </div>
        )}

        {/* Tags */}
        {book.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {book.tags.slice(0, 2).map((tag) => (
              <span 
                key={tag} 
                className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              >
                <Tag className="h-2 w-2 mr-1" />
                {tag}
              </span>
            ))}
            {book.tags.length > 2 && (
              <span className="text-xs text-gray-500 dark:text-gray-400">+{book.tags.length - 2} more</span>
            )}
          </div>
        )}

        {/* Personal Notes Preview */}
        {book.personalNotes && (
          <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
            <p className="text-xs text-gray-700 dark:text-gray-300 italic overflow-hidden text-ellipsis whitespace-nowrap">
              "{book.personalNotes}"
            </p>
          </div>
        )}

        {/* Year */}
        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
          <span className="flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            {book.year}
          </span>
        </div>
      </div>
    </div>
  )
} 