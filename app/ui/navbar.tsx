import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className=' flex justify-between'>
        <Link href='/'>Home</Link>
        <ul>
            <li>
                <Link href='/notes'>Notes</Link>
            </li>
        </ul>
    </div>
  )
}
