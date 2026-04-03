import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

/**
 * Using Plus Jakarta Sans as a Gilroy-equivalent (same geometric humanist DNA).
 * To switch to Gilroy: replace this with next/font/local pointing to your woff2
 * files in /public/fonts/ — the CSS variable name stays the same.
 */
const gilroy = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-gilroy',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Poulber — Turning Idle Farms Into Living Economies',
  description:
    'Poulber provides zero-capital access to rehabilitated poultry facilities, connecting ambitious farmers with idle infrastructure — backed by insurance, data, and expertise.',
  keywords: [
    'agrifintech',
    'poultry',
    'Nigeria',
    'farm-as-a-service',
    'agriculture',
    'farming',
  ],
  openGraph: {
    title: 'Poulber — Turning Idle Farms Into Living Economies',
    description:
      'Zero-capital access to rehabilitated poultry facilities in Nigeria.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={gilroy.variable}>
      <body className="font-gilroy bg-white text-gray-900">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
