import VideoPlayer from "@/components/Utilities/VideoPlayer"
import { getAnimeResponse } from "@/services/api"
import Image from "next/image"

export default async function Page({ params: { id } }) {
    const anime = await getAnimeResponse(`anime/${id}`)
    return (
        <>
            <div className="pt-4 px-4">
                <h3 className="text-2xl text-brand-primary">{anime?.data.title} - {anime?.data.year}</h3>
            </div>
            <div className="pt-4 px-4 flex gap-2 text-brand-primary overflow-x-auto">
                <div className="w-36 flex flex-col justify-center items-center rounded border border-brand-primary p-2">
                    <h3>Peringkat</h3>
                    <p>{anime.data.rank}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-brand-primary p-2">
                    <h3>Skor</h3>
                    <p>{anime.data.score}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-brand-primary p-2">
                    <h3>Anggota</h3>
                    <p>{anime.data.members}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-brand-primary p-2">
                    <h3>Episodes</h3>
                    <p>{anime.data.episodes}</p>
                </div>

            </div>
            <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-brand-accent">
                <Image
                    src={anime.data.images.webp.image_url}
                    alt={anime.data.images.jpg.image_url}
                    width={250}
                    height={250}
                    className="w-full rounded object-cover"
                />
                <p className="text-justify text-xl text-brand-primary">{anime.data.synopsis}</p>
            </div>
            <div>
                <VideoPlayer
                    videoId={anime.data.trailer.youtube_id}
                />
            </div>
        </>
    )
}
