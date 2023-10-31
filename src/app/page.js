import AnimeList from "@/components/AnimeList";
import Link from "next/link";

export default async function Home() {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=6`)
  const anime = await response.json()

  return (
    <div>
      <div className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Populer</h1>
        <div>
          <Link href={"/populer"} className="md:text-xl text-sm underline hover:text-amber-500 transition-all">Lihat semua</Link>
        </div>
      </div>
      <div className="grid lg:grid-cols-6 sm:grid-cols-3 grid-cols-1 gap-2 px-4">
        {anime.data.map((item) => {
          return (<div key={item.mal_id} className="shadow-xl">
            <AnimeList title={item.title} image={item.images.webp.image_url} id={item.mal_id} />
          </div>)
        })}
      </div>
    </div>
  )
}
