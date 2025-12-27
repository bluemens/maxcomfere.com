import { NextRequest, NextResponse } from 'next/server'

/**
 * Fetches book cover image URL from Google Books API
 * 
 * Google Books API is free and doesn't require an API key for low-volume usage
 * (up to 1000 requests per day). For higher volume, you can get a free API key.
 * 
 * @param title - Book title
 * @param author - Book author
 * @returns Cover image URL or null if not found
 */
async function fetchBookCover(title: string, author: string): Promise<string | null> {
  try {
    // Try multiple search strategies for better results
    
    // Strategy 1: Search by title and author together
    let query = encodeURIComponent(`${title} ${author}`)
    let apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=3`
    
    let response = await fetch(apiUrl)
    
    if (!response.ok) {
      console.error(`Google Books API error: ${response.status}`)
      return null
    }

    let data = await response.json()
    let coverUrl = findBestMatch(data, title, author)
    
    if (coverUrl) {
      return coverUrl
    }

    // Strategy 2: Search by title only (more flexible)
    query = encodeURIComponent(title)
    apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=5`
    
    response = await fetch(apiUrl)
    
    if (!response.ok) {
      return null
    }

    data = await response.json()
    coverUrl = findBestMatch(data, title, author)
    
    return coverUrl
  } catch (error) {
    console.error('Error fetching book cover:', error)
    return null
  }
}

/**
 * Finds the best matching book from API results
 */
function findBestMatch(data: any, title: string, author: string): string | null {
  if (!data.items || data.items.length === 0) {
    return null
  }

  const titleLower = title.toLowerCase()
  const authorLower = author.toLowerCase()

  // Score each result and find the best match
  let bestMatch: any = null
  let bestScore = 0

  for (const item of data.items) {
    const volumeInfo = item.volumeInfo
    if (!volumeInfo || !volumeInfo.imageLinks) {
      continue
    }

    let score = 0
    const itemTitle = (volumeInfo.title || '').toLowerCase()
    const itemAuthors = (volumeInfo.authors || []).map((a: string) => a.toLowerCase())

    // Title match scoring
    if (itemTitle.includes(titleLower) || titleLower.includes(itemTitle)) {
      score += 10
    }

    // Author match scoring
    if (itemAuthors.some((a: string) => a.includes(authorLower) || authorLower.includes(a))) {
      score += 5
    }

    if (score > bestScore && volumeInfo.imageLinks) {
      bestScore = score
      bestMatch = volumeInfo
    }
  }

  if (bestMatch && bestMatch.imageLinks) {
    // Prefer medium or large, fallback to thumbnail
    return (
      bestMatch.imageLinks.medium ||
      bestMatch.imageLinks.large ||
      bestMatch.imageLinks.small ||
      bestMatch.imageLinks.thumbnail ||
      bestMatch.imageLinks.smallThumbnail ||
      null
    )
  }

  // If no good match, just return the first result with an image
  for (const item of data.items) {
    const volumeInfo = item.volumeInfo
    if (volumeInfo?.imageLinks) {
      return (
        volumeInfo.imageLinks.medium ||
        volumeInfo.imageLinks.large ||
        volumeInfo.imageLinks.small ||
        volumeInfo.imageLinks.thumbnail ||
        volumeInfo.imageLinks.smallThumbnail ||
        null
      )
    }
  }

  return null
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const title = searchParams.get('title')
  const author = searchParams.get('author')

  if (!title || !author) {
    return NextResponse.json(
      { error: 'Title and author are required' },
      { status: 400 }
    )
  }

  const coverUrl = await fetchBookCover(title, author)

  if (!coverUrl) {
    return NextResponse.json(
      { coverUrl: null },
      { status: 200 }
    )
  }

  return NextResponse.json({ coverUrl })
}

