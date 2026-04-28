import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rishan | Web Developer & UI/UX Designer',
  description: 'Premium web development, UI/UX design, AI integration, and vibe coding services by Rishan.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}