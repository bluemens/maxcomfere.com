import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Maximilian Comfere',
  description: 'Personal website of Maximilian Comfere - Engineer, Creator, and Innovator',
  keywords: ['Maximilian Comfere', 'Engineering', 'Technology', 'Creative', 'Videography'],
  authors: [{ name: 'Maximilian Comfere' }],
  openGraph: {
    title: 'Maximilian Comfere',
    description: 'Personal website of Maximilian Comfere - Engineer, Creator, and Innovator',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
