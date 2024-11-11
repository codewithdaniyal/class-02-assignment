import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
      <header>
        <ul className='flex gap-5 m-3 justify-center text-xl'>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </header>
    </div>
  )
}

export default Header
