"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CommentInput({ animeMalId, userEmail, username, animeTitle }) {
    const [comment, setComment] = useState("")
    const [isCreated, setIsCreated] = useState(false)
    const [isLoadingPosting, setIsLoadingPosting] = useState(false)
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoadingPosting(true)
        const data = {
            anime_mal_id: animeMalId,
            user_email: userEmail,
            comment: comment,
            username: username,
            anime_title: animeTitle
        }
        const response = await fetch('/api/v1/comment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const collection = await response.json();
        setIsLoadingPosting(false)
        if (collection?.isCreated) {
            setIsCreated(collection.isCreated)
            setComment("")
            router.refresh()
        }
        return
    }
    return (
        <div className="flex flex-col gap-2">
            {isCreated && (
                <p className="text-brand-primary">Posting success!</p>
            )}
            <textarea
                className="h-32 w-full p-4 text-xl "
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            <button
                className="w-52 px-2 py-3 bg-brand-accent text-brand-dark rounded"
                onClick={handleSubmit}
                disabled={isLoadingPosting}
            >
                {isLoadingPosting ? "Posting..." : "Post"}
            </button>
        </div>
    )
}
