// import { Inter } from 'next/font/google'
import './globals.css'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Developer Portfolio',
  description: 'A modern developer portfolio showcasing my skills and projects',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`bg-[#0a0a0a] text-white`}>
        {children}
      </body>
    </html>
  )
}
