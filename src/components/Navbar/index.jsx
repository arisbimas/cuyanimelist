import Link from 'next/link'
import React from 'react'
import InputSearch from '@/components/Navbar/InputSearch'

export default function Navbar() {
    return (
        <header className='bg-brand-accent'>
            <div className='flex md:flex-row flex-col justify-between md:items-center p-4 '>
                <Link href={"/"} className='font-bold text-2xl'>CUY ANIME LIST</Link>
                <InputSearch />
            </div>
        </header>
    )
}
