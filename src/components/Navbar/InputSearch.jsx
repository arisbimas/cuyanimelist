"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

export default function InputSearch() {
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (e) => {
        e.preventDefault()
        const keyword = searchRef.current.value;
        if (!keyword) return
        router.push(`/search/${keyword}`)
    }

    return (
        <div className="relative">
            <input
                placeholder="cari anime..."
                className="p-2 rounded w-full"
                ref={searchRef}
                onKeyDown={(e) => {
                    if (e.code === "Enter") handleSearch(e)
                }}
            />
            <button className="absolute top-2 end-2" onClick={handleSearch}>
                <MagnifyingGlass size={24} />
            </button>
        </div>
    )
}
