#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const BLOG_DIR = path.join(__dirname, '../content/blog')
const READING_DIR = path.join(__dirname, '../content/reading')

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

function getCurrentDate() {
  return new Date().toISOString().split('T')[0]
}

function createBlogPost(title, isDraft = false) {
  const slug = slugify(title)
  const date = getCurrentDate()
  const filename = `${date}-${slug}.md`
  const dir = isDraft ? path.join(BLOG_DIR, 'drafts') : BLOG_DIR
  const filepath = path.join(dir, filename)

  const template = `---
title: "${title}"
excerpt: "A brief description of this post..."
category: "Category"
tags: ["Tag1", "Tag2"]
date: "${date}"
readTime: "X min read"
featured: false
status: "${isDraft ? 'draft' : 'published'}"
---

# ${title}

Your content goes here...

## Section 1

Write your thoughts...

## Conclusion

Wrap up your ideas...
`

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }

  fs.writeFileSync(filepath, template)
  console.log(`✅ Created blog post: ${filepath}`)
  return filepath
}

function addBook(title, author, category, description = '', status = 'want-to-read') {
  const filepath = path.join(READING_DIR, 'books.json')
  const books = JSON.parse(fs.readFileSync(filepath, 'utf8'))
  
  const newBook = {
    title,
    author,
    category,
    description,
    personalNotes: '',
    rating: null,
    year: new Date().getFullYear(), // Default to current year, can be updated manually
    status,
    dateAdded: getCurrentDate(),
    tags: [],
    recommendedBy: '',
    coverImage: `/books/${slugify(title)}.jpg`
  }
  
  books.push(newBook)
  fs.writeFileSync(filepath, JSON.stringify(books, null, 2))
  console.log(`✅ Added "${title}" to reading collection with status: ${status}`)
}

function updateBookStatus(title, status, rating = null) {
  const filepath = path.join(READING_DIR, 'books.json')
  const books = JSON.parse(fs.readFileSync(filepath, 'utf8'))
  
  const book = books.find(b => b.title.toLowerCase().includes(title.toLowerCase()))
  if (!book) {
    console.log(`❌ Book "${title}" not found in collection`)
    return
  }
  
  book.status = status
  
  if (status === 'read' && rating) {
    book.rating = parseFloat(rating)
    book.dateRead = getCurrentDate()
  } else if (status === 'currently-reading') {
    book.dateStarted = getCurrentDate()
  }
  
  fs.writeFileSync(filepath, JSON.stringify(books, null, 2))
  console.log(`✅ Updated "${book.title}" status to: ${status}${rating ? ` (${rating}⭐)` : ''}`)
}

function listBlogPosts() {
  const publishedFiles = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'))
  const draftFiles = fs.existsSync(path.join(BLOG_DIR, 'drafts')) 
    ? fs.readdirSync(path.join(BLOG_DIR, 'drafts')).filter(f => f.endsWith('.md'))
    : []

  console.log('\n📚 Published Posts:')
  publishedFiles.forEach(file => {
    console.log(`  - ${file}`)
  })

  if (draftFiles.length > 0) {
    console.log('\n✏️  Draft Posts:')
    draftFiles.forEach(file => {
      console.log(`  - ${file}`)
    })
  }
}

function listReadingCollection() {
  const books = JSON.parse(fs.readFileSync(path.join(READING_DIR, 'books.json'), 'utf8'))
  
  const currentlyReading = books.filter(book => book.status === 'currently-reading')
  const finished = books.filter(book => book.status === 'read').slice(0, 5)
  const wantToRead = books.filter(book => book.status === 'want-to-read').slice(0, 5)

  console.log(`\n📚 Reading Collection (${books.length} total books)`)
  
  if (currentlyReading.length > 0) {
    console.log('\n📖 Currently Reading:')
    currentlyReading.forEach(book => {
      console.log(`  - ${book.title} by ${book.author} (${book.year})`)
    })
  }

  if (finished.length > 0) {
    console.log('\n✅ Recently Read:')
    finished.forEach(book => {
      const rating = book.rating ? ` (${book.rating}⭐)` : ''
      console.log(`  - ${book.title} by ${book.author}${rating}`)
    })
  }

  if (wantToRead.length > 0) {
    console.log('\n📚 Want to Read:')
    wantToRead.forEach(book => {
      console.log(`  - ${book.title} by ${book.author} (${book.year})`)
    })
  }
}

// Command line interface
const command = process.argv[2]
const args = process.argv.slice(3)

switch (command) {
  case 'blog:new':
    if (!args[0]) {
      console.log('❌ Please provide a title: npm run blog:new "My Post Title"')
      process.exit(1)
    }
    createBlogPost(args[0])
    break

  case 'blog:draft':
    if (!args[0]) {
      console.log('❌ Please provide a title: npm run blog:draft "My Draft Title"')
      process.exit(1)
    }
    createBlogPost(args[0], true)
    break

  case 'blog:list':
    listBlogPosts()
    break

  case 'reading:add':
    if (args.length < 3) {
      console.log('❌ Usage: npm run reading:add "Title" "Author" "Category" ["Description"] ["Status"]')
      process.exit(1)
    }
    addBook(args[0], args[1], args[2], args[3] || '', args[4] || 'want-to-read')
    break

  case 'reading:status':
    if (args.length < 2) {
      console.log('❌ Usage: npm run reading:status "Book Title" "Status" ["Rating"]')
      console.log('   Status options: want-to-read, currently-reading, read')
      process.exit(1)
    }
    updateBookStatus(args[0], args[1], args[2])
    break

  case 'reading:list':
    listReadingCollection()
    break

  default:
    console.log(`
📝 Content Management Helper

Available commands:
  blog:new "Title"           - Create new blog post
  blog:draft "Title"         - Create new draft post  
  blog:list                  - List all blog posts
  
  reading:add "Title" "Author" "Category" ["Description"] ["Status"]
                            - Add book to collection
  reading:status "Title" "Status" ["Rating"] - Update book status
  reading:list              - Show reading collection summary

Examples:
  node scripts/content-helpers.js blog:new "My Great Idea"
  node scripts/content-helpers.js reading:add "Sapiens" "Yuval Harari" "History"
  node scripts/content-helpers.js reading:status "Atomic Habits" "read" "4.5"
`)
}