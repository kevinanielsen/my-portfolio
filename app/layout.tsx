import Providers from './Providers'
import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { Toaster } from 'react-hot-toast'
import { Metadata } from 'next'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kevin Alex Nielsen',
  description: 'The portfolio of Kevin Alex Nielsen, frontend developer.',
  keywords: [
    'Kevin',
    'Alex',
    'Nielsen',
    'Kevin Nielsen',
    'Kevin Alex Nielsen',
    'Portfolio',
    'Web developer',
    'Frontend Developer',
    'Backend Developer',
    'React Developer',
    'NextJS',
    'Next.JS',
    'Developer Portfolio'
  ],
  authors: [{ name: 'Kevin Alex Nielsen' }],
  creator: 'Kevin Alex Nielsen',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      follow: true,
      index: true
    }
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script defer data-domain="kevinanielsen.com" src="https://plausible.io/js/script.js"></script>
      </head>
      <body className={inter.className}>
        <Toaster />
        <Providers>{children}</Providers>
        <Analytics mode="production" />
      </body>
    </html>
  )
}
