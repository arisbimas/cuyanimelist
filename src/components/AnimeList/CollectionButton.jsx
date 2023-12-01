'use client'

import { useState } from "react";

export default function CollectionButton({ animeMalId, userEmail }) {
    const [isCreated, setIsCreated] = useState(false)
    const handleClick = async (event) => {
        event.preventDefault();
        const data = {
            anime_mal_id: animeMalId,
            user_email: userEmail
        }
        const response = await fetch('/api/v1/collection', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const collection = await response.json();
        if (collection?.isCreated) {
            setIsCreated(collection.isCreated)
        }
        return
    }
    return (
        <>
            {
                isCreated ?
                    <p className="text-brand-primary">Berhasil ditambahkan ke koleksi</p>
                    :
                    (<button
                        type="button"
                        className="px-4 py-2 bg-brand-accent text-white rounded"
                        onClick={handleClick}
                    >Add to Collection</button>)
            }
        </>
    )
}
