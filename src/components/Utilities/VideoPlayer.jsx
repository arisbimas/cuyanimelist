"use client"

import { XCircle } from "@phosphor-icons/react"
import { useState } from "react"
import YouTube from "react-youtube"

export default function VideoPlayer({ videoId }) {
    const [isOpen, setIsOpen] = useState(false)
    const handleTogglePlayer = () => {
        setIsOpen(prev => !prev)
    }
    const options = {
        width: "300",
        height: "250"
    }

    const Player = () => {
        return (
            <div className="fixed bottom-2 right-2">
                <button
                    className="text-brand-primary float-right bg-brand-secondary px-3 mb-1"
                    onClick={handleTogglePlayer}
                ><XCircle size={32} /></button>
                <YouTube
                    videoId={videoId}
                    onReady={(event) => event.target.pauseVideo()}
                    opts={options}
                />
            </div>
        )
    }
    return isOpen ? <Player /> : <button className="fixed bottom-5 right-5 w-32 bg-brand-primary text-brand-dark rounded" onClick={handleTogglePlayer}>Tonton Trailer</button>
}
