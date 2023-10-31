import { Inter } from 'next/font/google'
import '@/app/globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CUY ANIME LIST',
  description: 'Website dari YT Bang Dea',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressContentEditableWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
