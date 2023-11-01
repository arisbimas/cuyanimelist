import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import Link from "next/link";

export default async function Page() {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=4`)
  const topAnime = await response.json()

  return (
    <div>
      <section>
        <Header title="Pupuler" linkHref="/pupuler" linkTitle="Lihat semua" />
        <AnimeList api={topAnime} />
      </section>
    </div>
  )
}
