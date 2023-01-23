import Link from "next/link"


const NAv = () => {
  return (
    <nav>
        <Link href="/">
        <a>Home</a>
        
        </Link>
        <Link href="/contact">
        <a>Contact</a>
        
        </Link>
        <Link href="/blog">
        <a>Blog</a>
        
        </Link>
    </nav>
  )
}

export default NAv