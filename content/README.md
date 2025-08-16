# Content Management System

This directory contains all content for the website, organized in a simple file-based structure that makes editing and publishing easy.

## Directory Structure

```
content/
├── blog/                    # Published blog posts
│   ├── *.md                # Markdown files with frontmatter
│   └── drafts/             # Work-in-progress posts
│       └── *.md
├── reading/                # Reading collection data
│   └── books.json         # All books with metadata and status
└── README.md              # This file
```

## Blog Posts

### Creating a New Post

**Quick way:**
```bash
npm run blog:new "My Amazing Post Title"
```

**Manual way:**
1. Create a new `.md` file in `blog/` with format: `YYYY-MM-DD-post-slug.md`
2. Add frontmatter with required fields
3. Write content in Markdown

### Frontmatter Structure

```yaml
---
title: "Your Post Title"
excerpt: "A brief description for previews and SEO"
category: "Engineering/Tech"  # or "Creative/Videography", "Research", etc.
tags: ["Tag1", "Tag2", "Tag3"]
date: "2024-03-15"
readTime: "8 min read"
featured: true               # Shows in featured posts section
status: "published"          # or "draft"
---
```

### Writing Content

- Use standard Markdown syntax
- Code blocks with syntax highlighting supported
- Images should be placed in `/public/blog/` directory
- Internal links: `[Link Text](/other-page)`
- External links: `[Link Text](https://example.com)`

### Drafts

Create drafts in the `blog/drafts/` folder:
```bash
npm run blog:draft "Work in Progress Title"
```

Drafts won't appear on the live site until moved to the main `blog/` directory and status changed to "published".

## Reading Collection

### Data Structure

A single JSON file (`books.json`) contains all books with their metadata and reading status:

- **Status options**: `want-to-read`, `currently-reading`, `read`
- **Rich metadata**: Personal notes, ratings, tags, categories
- **Flexible structure**: Easy to add new fields

### Managing Your Reading Collection

**Add a new book:**
```bash
npm run reading:add "Book Title" "Author Name" "Category" "Optional description" "Status"
```

**Update book status:**
```bash
npm run reading:status "Book Title" "read" "4.5"  # Mark as read with rating
npm run reading:status "Book Title" "currently-reading"  # Start reading
```

**Manual editing:**
Edit the `books.json` file directly - it's designed to be human-readable and well-structured.

### Book Object Structure

```json
{
  "title": "Book Title",
  "author": "Author Name",
  "category": "Technology",
  "description": "Brief description of the book",
  "personalNotes": "Your personal thoughts and reflections on the book",
  "rating": 4.5,
  "year": 2024,
  "status": "read",
  "dateRead": "2024-01-15",
  "dateStarted": "2024-01-01",
  "dateAdded": "2023-12-01",
  "tags": ["Programming", "Software Engineering"],
  "recommendedBy": "Colleague name or source",
  "coverImage": "/books/book-cover.jpg"
}
```

**Status-specific fields:**
- `want-to-read`: Uses `dateAdded`
- `currently-reading`: Uses `dateStarted`
- `read`: Uses `dateRead` and can have `rating`

## Content Helpers

Use these npm scripts for easy content management:

```bash
# Blog management
npm run blog:new "Post Title"        # Create new published post
npm run blog:draft "Post Title"      # Create new draft post
npm run blog:list                    # List all posts and drafts

# Reading collection management  
npm run reading:add "Title" "Author" "Category" ["Description"] ["Status"]
npm run reading:status "Title" "Status" ["Rating"]  # Update book status
npm run reading:list                 # Show reading collection summary

# Help
npm run content:help                 # Show all available commands
```

## Publishing Workflow

### Blog Posts
1. Create post: `npm run blog:new "Title"` or `npm run blog:draft "Title"`
2. Edit the generated markdown file
3. Set `status: "published"` in frontmatter
4. Commit and push to deploy

### Reading List Updates
1. Add books: `npm run reading:add` or edit JSON files directly
2. Update progress: `npm run reading:progress` or edit JSON
3. Move books between lists by editing JSON files
4. Commit and push to deploy

## Categories

### Blog Categories
- `Engineering/Tech`: Technical articles, programming, architecture
- `Creative/Videography`: Creative projects, visual arts, video production
- `Research`: Academic work, studies, analysis
- `Startup/Business`: Business insights, entrepreneurship
- `Personal`: Life updates, thoughts, reflections

### Reading Categories
- `Technology`: Programming, software engineering, tech industry
- `Science`: Research, academic papers, scientific literature
- `Business`: Entrepreneurship, management, strategy
- `Design`: UX/UI, visual design, design thinking
- `Psychology`: Human behavior, cognitive science
- `Philosophy`: Ethics, logic, existential topics
- `Fiction`: Novels, short stories, creative writing
- `Biography`: Life stories, memoirs, historical figures

## Tips

1. **Keep frontmatter consistent** - This ensures proper parsing and display
2. **Use descriptive filenames** - Helps with organization and SEO
3. **Write good excerpts** - These appear in previews and social shares
4. **Tag thoughtfully** - Tags help readers find related content
5. **Update reading progress regularly** - Keeps the reading list current
6. **Add key takeaways** - Helps you remember and share insights

## Backup

All content is version-controlled with Git, so you have full history and backup of all changes. The file-based approach means you can also easily backup the entire `content/` directory independently.