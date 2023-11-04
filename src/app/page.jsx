import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "@/services/api";

export default async function Page() {
  const topAnime = await getAnimeResponse('top/anime', 'limit=5')
  return (
    <div>
      <section>
        <Header title="Pupuler" linkHref="/populer" linkTitle="Lihat semua" />
        <AnimeList api={topAnime} />
      </section>
    </div>
  )
}
