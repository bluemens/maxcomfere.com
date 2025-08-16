import Layout from '@/components/Layout'
import { getAllBooks, getAllCategories, getAllTags, getReadingStats } from '@/lib/reading'
import ReadingListClient from '@/components/ReadingListClient'

// Get reading data at build time
const books = getAllBooks()
const categories = getAllCategories()
const tags = getAllTags()
const stats = getReadingStats()

export default function ReadingListPage() {
  return (
    <Layout>
      <ReadingListClient 
        books={books}
        categories={categories}
        tags={tags}
        stats={stats}
      />
    </Layout>
  )
}