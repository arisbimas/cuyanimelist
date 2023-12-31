import CollectionButton from "@/components/AnimeList/CollectionButton"
import CommentInput from "@/components/AnimeList/CommentInput"
import { CommentList } from "@/components/AnimeList/CommentList"
import VideoPlayer from "@/components/Utilities/VideoPlayer"
import { authUserSession } from "@/libs/auth-libs"
import prisma from "@/libs/prisma"
import { getAnimeResponse } from "@/services/api"
import Image from "next/image"

export default async function Page({ params: { id } }) {
    const anime = await getAnimeResponse(`anime/${id}`)
    const user = await authUserSession()
    const collection = await prisma.collection.findFirst({
        where: { user_email: user?.email, anime_mal_id: id }
    })
    return (
        <>
            <div className="pt-4 px-4">
                <h3 className="text-2xl text-brand-primary">{anime?.data.title} - {anime?.data.year}</h3>
                {!collection && user &&
                    <CollectionButton
                        animeMalId={id}
                        userEmail={user?.email}
                        animeImage={anime.data.images.webp.image_url}
                        animeTitle={anime?.data.title}
                    />}
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
            <div className="p-4">
                <h3 className="text-2xl text-brand-primary mb-2">Komentar</h3>
                <CommentList animeMalId={id} />
                {user && <CommentInput animeMalId={id} userEmail={user?.email} username={user?.name} animeTitle={anime?.data.title} />}
            </div>
            <div>
                <VideoPlayer
                    videoId={anime.data.trailer.youtube_id}
                />
            </div>
        </>
    )
}
