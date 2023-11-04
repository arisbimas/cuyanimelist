
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "@/services/api";
import Link from "next/link";

export default async function Page({ params }) {
    const { keyword } = params
    const decodedKeyword = decodeURI(keyword)
    const searchAnime = await getAnimeResponse('anime', `q=${keyword}`)

    return (
        <div>
            <section>
                <Header title={`Pencarian untuk ${decodedKeyword}...`} />
                <AnimeList api={searchAnime} />
            </section>
        </div>
    )
}

