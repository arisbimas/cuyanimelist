import Link from 'next/link'
import React from 'react'

export default function Header({ title, linkHref, linkTitle }) {
    return (
        <div className="flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold text-brand-primary">{title}</h1>
            {(linkHref && linkTitle) && (<div>
                <Link href={linkHref} className="md:text-xl text-sm underline text-brand-primary hover:text-brand-accent transition-all">{linkTitle}</Link>
            </div>)}
        </div>
    )
}
