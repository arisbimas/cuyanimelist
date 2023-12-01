import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import { ArrowSquareLeft } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
    const user = await authUserSession();
    const collections = await prisma.collection.findMany({
        where: { user_email: user?.email }
    })
    return (
        <section className="mt-4 w-full px-4">
            <Header title="My Collection" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    collections?.map((collection, index) => (
                        <Link key={index} href={`/anime/${collection?.anime_mal_id}`} className="relative border border-brand-accent">
                            <Image src="https://picsum.photos/200" alt="image" width={200} height={200} className="w-full" />
                            <div className="absolute bottom-0 flex justify-center items-center w-full bg-brand-accent">
                                <h5 className="text-xl text-center text-brand-primary">Judul</h5>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </section>
    )
}
