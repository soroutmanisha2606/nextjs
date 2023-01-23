import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <nav>
        <Link href="/">
        Home
        
        </Link>
        <Link href="/contact">
       Contact
        
        </Link>
        <Link href="/blog">
     Blog
        
        </Link>
    </nav>
    </>
  )
}
