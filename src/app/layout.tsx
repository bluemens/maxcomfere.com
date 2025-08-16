import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/lib/theme'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Maximilian Comfere',
  description: 'Personal website of Maximilian Comfere',
  keywords: ['Maximilian Comfere', 'Engineering', 'Technology', 'Writing', 'Reading'],
  authors: [{ name: 'Maximilian Comfere' }],
  openGraph: {
    title: 'Maximilian Comfere',
    description: 'Personal website of Maximilian Comfere',
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
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
