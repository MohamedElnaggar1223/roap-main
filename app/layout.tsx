import { Inter } from 'next/font/google'
import './globals.css'
import localFont from 'next/font/local'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

// Initialize Monument font
const monument = localFont({
  src: [
    {
      path: '../public/fonts/monument.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-monument',
})

// Initialize Impala font
const impala = localFont({
  src: [
    {
      path: '../public/fonts/impala.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-impala',
})

export const metadata = {
  title: 'ROAP',
  description: 'Your Athletic Search Engine',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${monument.variable} ${impala.variable}`}>
      <body className="antialiased font-inter">
        {children}
        <Toaster />
      </body>
    </html>
  )
}