import { Gabarito } from 'next/font/google'
import '@/app/globals.css'
import Navbar from '@/components/Navbar'

const gabarito = Gabarito({ subsets: ['latin'] })

export const metadata = {
  title: 'CUY ANIME LIST',
  description: 'Website dari YT Bang Dea',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} bg-brand-dark`} suppressContentEditableWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
