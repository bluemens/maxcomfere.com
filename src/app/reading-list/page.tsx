import Layout from '@/components/Layout'
import { Star, Calendar, BookOpen, CheckCircle, Clock } from 'lucide-react'

const readingList = {
  currentlyReading: [
    {
      title: "The Pragmatic Programmer",
      author: "David Thomas & Andrew Hunt",
      status: "reading",
      progress: 65,
      startDate: "2024-01-15",
      category: "Technology",
      description: "A comprehensive guide to software development practices and principles.",
      rating: null,
      coverImage: "/books/pragmatic-programmer.jpg"
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      status: "reading", 
      progress: 30,
      startDate: "2024-02-01",
      category: "Self-Development",
      description: "An easy and proven way to build good habits and break bad ones.",
      rating: null,
      coverImage: "/books/atomic-habits.jpg"
    }
  ],
  recentlyFinished: [
    {
      title: "Deep Work",
      author: "Cal Newport",
      status: "finished",
      finishDate: "2024-01-10",
      category: "Productivity",
      description: "Rules for focused success in a distracted world.",
      rating: 4.5,
      keyTakeaways: [
        "Focus is a skill that can be developed",
        "Deep work requires dedicated time blocks",
        "Social media is designed to fragment attention"
      ],
      coverImage: "/books/deep-work.jpg"
    },
    {
      title: "The Design of Everyday Things",
      author: "Don Norman",
      status: "finished",
      finishDate: "2023-12-15",
      category: "Design",
      description: "The ultimate guide to human-centered design.",
      rating: 4.0,
      keyTakeaways: [
        "Good design is invisible",
        "Affordances guide user behavior",
        "Error prevention is better than error correction"
      ],
      coverImage: "/books/design-everyday-things.jpg"
    },
    {
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      status: "finished",
      finishDate: "2023-11-20",
      category: "Psychology",
      description: "Understanding the two systems that drive the way we think.",
      rating: 4.5,
      keyTakeaways: [
        "System 1 is fast and intuitive",
        "System 2 is slow and analytical",
        "Cognitive biases affect all decisions"
      ],
      coverImage: "/books/thinking-fast-slow.jpg"
    }
  ],
  wantToRead: [
    {
      title: "The Psychology of Money",
      author: "Morgan Housel",
      category: "Finance",
      description: "Timeless lessons on wealth, greed, and happiness.",
      coverImage: "/books/psychology-money.jpg"
    },
    {
      title: "Sapiens",
      author: "Yuval Noah Harari",
      category: "History",
      description: "A brief history of humankind.",
      coverImage: "/books/sapiens.jpg"
    },
    {
      title: "The Lean Startup",
      author: "Eric Ries",
      category: "Business",
      description: "How constant innovation creates radically successful businesses.",
      coverImage: "/books/lean-startup.jpg"
    },
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      category: "Technology",
      description: "A handbook of agile software craftsmanship.",
      coverImage: "/books/clean-code.jpg"
    }
  ]
}

export default function ReadingListPage() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Reading List</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            A curated collection of books and articles that have shaped my thinking on technology, 
            creativity, and personal development.
          </p>
        </div>

        {/* Currently Reading */}
        <div className="mb-16">
          <div className="flex items-center space-x-2 mb-6">
            <BookOpen className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-semibold text-gray-800">Currently Reading</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {readingList.currentlyReading.map((book) => (
              <div key={book.title} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-20 bg-gray-200 rounded-md flex items-center justify-center">
                      <BookOpen className="h-8 w-8 text-gray-400" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{book.title}</h3>
                    <p className="text-gray-600 mb-2">by {book.author}</p>
                    <p className="text-sm text-gray-500 mb-3">{book.description}</p>
                    
                    {/* Progress Bar */}
                    <div className="mb-3">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Progress</span>
                        <span>{book.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${book.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>Started {new Date(book.startDate).toLocaleDateString()}</span>
                      </div>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                        {book.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recently Finished */}
        <div className="mb-16">
          <div className="flex items-center space-x-2 mb-6">
            <CheckCircle className="h-6 w-6 text-green-600" />
            <h2 className="text-2xl font-semibold text-gray-800">Recently Finished</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {readingList.recentlyFinished.map((book) => (
              <div key={book.title} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-20 bg-gray-200 rounded-md flex items-center justify-center">
                      <BookOpen className="h-8 w-8 text-gray-400" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{book.title}</h3>
                    <p className="text-gray-600 mb-2">by {book.author}</p>
                    <p className="text-sm text-gray-500 mb-3">{book.description}</p>
                    
                    {/* Rating */}
                    {book.rating && (
                      <div className="flex items-center space-x-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < Math.floor(book.rating!) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                        <span className="text-sm text-gray-600 ml-1">({book.rating})</span>
                      </div>
                    )}
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>Finished {new Date(book.finishDate).toLocaleDateString()}</span>
                      </div>
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                        {book.category}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Key Takeaways */}
                {book.keyTakeaways && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Key Takeaways:</h4>
                    <ul className="space-y-1">
                      {book.keyTakeaways.map((takeaway, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start space-x-2">
                          <span className="text-blue-500 mt-1">•</span>
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Want to Read */}
        <div>
          <div className="flex items-center space-x-2 mb-6">
            <Clock className="h-6 w-6 text-orange-600" />
            <h2 className="text-2xl font-semibold text-gray-800">Want to Read</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {readingList.wantToRead.map((book) => (
              <div key={book.title} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-20 bg-gray-200 rounded-md flex items-center justify-center mb-3">
                    <BookOpen className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2">{book.title}</h3>
                  <p className="text-xs text-gray-600 mb-2">by {book.author}</p>
                  <p className="text-xs text-gray-500 mb-3 line-clamp-3">{book.description}</p>
                  <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs">
                    {book.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
} 