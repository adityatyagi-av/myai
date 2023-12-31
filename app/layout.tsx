import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

const font = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MY AI',
  description: 'One and only one AI for you',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={font.className}>
       
        {children}
   
        </body>
    </html>
    </ClerkProvider>
  )
}
