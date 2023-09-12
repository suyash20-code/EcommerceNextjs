import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col bg-slate-900 items-center justify-between p-24 ${inter.className}`}
    >
<h1 className={`text-3xl`}>Suyash Padwal</h1>
        <button className={`text-3xl`}>click me</button>
        <h1>Suyash</h1>
    </main>
  )
}
