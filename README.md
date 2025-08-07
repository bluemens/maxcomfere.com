# Maximilian Comfere - Personal Website

A clean, minimal personal website built with Next.js, TypeScript, and Tailwind CSS. The site showcases Maximilian's professional work, creative projects, and thoughts on engineering and creativity.

## Features

### Core Pages
- **Important Links** - Polished "link in bio" style hub for professional, creative, and contact links
- **Resume** - Clean HTML version with on-page preview and downloadable PDF
- **Published Papers** - List of academic and public works with titles, authors, venue/year, and summaries
- **Current Projects** - Grid/list of active projects with titles, descriptions, status, and relevant links
- **Blog** - Categorized posts (Engineering/Tech, Startup/Business, Creative/Videography) with featured images and excerpts

### Design Features
- Minimalist black and white design theme
- Mobile-first responsive design
- Clean typography using Inter font
- Ample whitespace and subtle animations
- Sticky navigation with social links
- Optimized for readability

### Technical Features
- Built with Next.js 14 and TypeScript
- Styled with Tailwind CSS
- MDX support for blog posts (ready for implementation)
- SEO optimized with proper metadata
- Accessibility compliant
- Fast loading and optimized performance

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── blog/              # Blog pages
│   ├── projects/          # Projects page
│   ├── published-work/    # Published work page
│   ├── resume/            # Resume page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page (Important Links)
├── components/            # Reusable React components
│   ├── Layout.tsx         # Main layout wrapper
│   ├── Navigation.tsx     # Sticky navigation
│   └── Footer.tsx         # Footer component
└── content/              # MDX blog posts (future)
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/maxcomfere/maxcomfere.com.git
cd maxcomfere.com
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Customization

### Content Updates

1. **Home Page Links**: Edit `src/app/page.tsx` to update the link categories and items
2. **Resume**: Replace the placeholder content in `src/app/resume/page.tsx` with actual resume data
3. **Published Work**: Update the publications array in `src/app/published-work/page.tsx`
4. **Projects**: Modify the projects array in `src/app/projects/page.tsx`
5. **Blog Posts**: Add new posts to the blogPosts object in `src/app/blog/page.tsx`

### Styling

The site uses Tailwind CSS with custom design tokens. Key styling decisions:

- **Colors**: Black and white theme with gray accents
- **Typography**: Inter font family with optimized line heights
- **Spacing**: Consistent spacing using Tailwind's spacing scale
- **Components**: Reusable button and card components

### Adding Blog Posts

To add new blog posts:

1. Create a new MDX file in `src/content/blog/`
2. Add frontmatter with metadata (title, date, category, etc.)
3. Write content using MDX syntax
4. Update the blog listing page to include the new post

Example MDX post:
```mdx
---
title: "My New Blog Post"
date: "2024-01-15"
category: "Engineering/Tech"
excerpt: "A brief description of the post"
tags: ["JavaScript", "React", "Web Development"]
---

# My New Blog Post

Your content here...
```

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and deploy
3. Configure custom domain in Vercel dashboard

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Self-hosted servers

## Performance

The site is optimized for performance with:
- Next.js App Router for optimal routing
- Tailwind CSS for minimal CSS bundle
- Optimized images and assets
- Proper caching headers
- SEO optimization

## Accessibility

The site follows accessibility best practices:
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- High contrast ratios
- Screen reader compatibility

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, contact Maximilian Comfere at maximilian@comfere.com
