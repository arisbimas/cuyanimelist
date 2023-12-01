"use client"
import { FileSearch } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'

export default function Page() {
    const router = useRouter()
    return (
        <div className='min-h-screen max-w-xl mx-auto flex justify-center items-center'>
            <div className='flex justify-center items-center gap-4 flex-col'>
                <FileSearch size={32} className='text-brand-accent ' />
                <h3 className='text-brand-accent text-4xl font-bold'>Not Found</h3>
                <button onClick={() => router.back()} className='text-brand-primary hover:text-brand-accent underline'>Kembali</button>
            </div>
        </div>
    )
}
