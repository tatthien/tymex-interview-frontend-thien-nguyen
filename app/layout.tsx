import type { Metadata } from 'next'
import { Barlow_Condensed, Inter } from 'next/font/google'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import { Provider } from './provider'

import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const barlow = Barlow_Condensed({
  variable: '--font-barlow',
  subsets: ['latin'],
  weight: ['500', '700'],
})

export const metadata: Metadata = {
  title: 'NFT Marketplace',
  description: 'NFT Marketplace',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${barlow.variable}`}>
        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
