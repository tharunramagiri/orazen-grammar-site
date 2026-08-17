import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Orazen Grammar | Privacy-First Grammar Checker',
  description:
    'A fast, privacy-first grammar checker for teams and businesses. Runs entirely in your browser — nothing you write is ever sent to a server. Built on the open-source Harper engine, packaged and supported by Orazen.',
  openGraph: {
    title: 'Orazen Grammar | Privacy-First Grammar Checker',
    description: 'Grammar checking that never leaves your browser.',
    type: 'website',
  },
}

import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-ink">{children}</body>
    </html>
  )
}
