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
        <section className="w-full mt-4  px-4">
            <Header title="My Collection" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    collections?.map((collection, index) => (
                        <Link key={index} href={`/anime/${collection?.anime_mal_id}`} className="relative">
                            <Image src={collection?.anime_image} alt={collection?.anime_title} width={200} height={200} className="w-full" />
                            <div className="absolute bottom-0 flex justify-center items-center w-full bg-brand-accent">
                                <h5 className="text-xl text-center text-brand-primary">{collection?.anime_title}</h5>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </section>
    )
}
