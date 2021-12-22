import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="sticky bg-sky-600 text-white w-full">
      <div className="container flex justify-between mx-auto px-4 py-5">
        <div>Logo</div>
        <div className="flex flex-row space-x-4">
          <div>
            <Link href="/">
              <a>Home</a>
            </Link>
          </div>
          <div>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </div>
          <div>
            <Link href="/about">
              <a>About</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a>Contact</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
