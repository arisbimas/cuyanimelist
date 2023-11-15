import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/services/api";

export default async function Page() {
  const topAnime = await getAnimeResponse('top/anime', 'limit=5')
  let recomendationsAnime = await getNestedAnimeResponse('recommendations/anime', 'entry')
  recomendationsAnime = reproduce(recomendationsAnime, 5)
  console.log(recomendationsAnime);
  return (
    <div>
      <section>
        <Header title="Pupuler" linkHref="/populer" linkTitle="Lihat semua" />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title="Rekomendasi" />
        <AnimeList api={recomendationsAnime} />
      </section>
    </div>
  )
}
