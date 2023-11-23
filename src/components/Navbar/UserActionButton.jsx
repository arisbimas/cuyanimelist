import { authUserSession } from '@/libs/auth-libs';
import Link from 'next/link'
import React from 'react'

export default async function UserActionButton() {
    const user = await authUserSession();
    const actionLabel = user ? 'Sign Out' : 'Sign In'
    const actionUrl = user ? '/api/auth/signout' : '/api/auth/signin'
    return (
        <div className='flex gap-2 justify-between items-center py-2'>
            {user ? <Link href={'/user/dashboard'}>Dashboard</Link> : null}
            <Link href={actionUrl} className='bg-brand-dark text-brand-accent px-6 py-2'>{actionLabel}</Link>
        </div>
    )
}
