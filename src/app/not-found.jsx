"use client"
import { FileSearch } from '@phosphor-icons/react'
import Link from 'next/link'

export default function Page() {
    return (
        <div className='min-h-screen max-w-xl mx-auto flex justify-center items-center'>
            <div className='flex justify-center items-center gap-4 flex-col'>
                <FileSearch size={32} className='text-brand-accent ' />
                <h3 className='text-brand-accent text-4xl font-bold'>Not Found</h3>
                <Link href={"/"} className='text-brand-primary hover:text-brand-accent underline'>Kembali</Link>
            </div>
        </div>
    )
}
