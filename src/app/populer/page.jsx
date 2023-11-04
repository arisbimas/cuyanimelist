"use client"

import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import { getAnimeResponse } from "@/services/api";
import { useEffect, useState } from "react";

export default function Populer() {
    const [page, setPage] = useState(1)
    const [topAnime, setTopAnime] = useState([])
    const fetchData = async () => {
        const anime = await getAnimeResponse('top/anime', `page=${page}`)
        setTopAnime(anime)
    }

    useEffect(() => {
        fetchData()
    }, [page])


    return (
        <>
            <HeaderMenu title={`Anime Populer #${page}`} />
            <AnimeList api={topAnime} />
            <Pagination page={page} lastPage={topAnime?.pagination?.last_visible_page} setPage={setPage} />
        </>
    )
}
