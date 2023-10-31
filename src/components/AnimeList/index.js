import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function AnimeList({ title, image, id }) {
    return (
        <Link href={`/${id}`} className='cursor-pointer'>
            <Image src={image} alt="image anime" width={350} height={350} className='w-full sm:max-h-64 max-h-full object-cover' priority />
            <h3 className='font-bold md:text-xl text-md p-4'>{title}</h3>
        </Link>
    )
}
