import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
     <div className='bg-gray-800 text-center p-3'>
        <Link href="https://abiodunsamuel.com/">
           <span className="text-white cursor-pointer text-sm hover:text-yellow-400"> Copyright © {new Date().getFullYear()} Abiodun Digital Hub</span>
        </Link>
    </div>
  )
}

export default Footer