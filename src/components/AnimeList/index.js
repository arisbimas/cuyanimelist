import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function AnimeList({ api }) {
    return (
        <div className="grid  lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-2 px-4">
            {api.data.map((item) => {
                return (
                    <Link href={`/${item.mal_id}`} className='cursor-pointer text-brand-primary hover:text-brand-accent transition-all ' key={item.mal_id}>
                        <Image
                            src={item.images.webp.image_url}
                            alt="image anime"
                            width={350}
                            height={350}
                            className='w-full sm:max-h-80 max-h-full object-cover' priority />
                        <h3 className='font-bold md:text-xl text-md p-4'>{item.title}</h3>
                    </Link>
                )
            })}
        </div>
    )
}
