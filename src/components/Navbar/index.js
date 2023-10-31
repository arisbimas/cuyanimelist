import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <header className='bg-amber-700'>
            <div className='flex md:flex-row flex-col justify-between p-4 '>
                <Link href={"/"} className='font-bold text-white text-2xl'>CUY ANIME LIST</Link>
                <input placeholder='cari anime...' className='' />
            </div>
        </header>
    )
}
