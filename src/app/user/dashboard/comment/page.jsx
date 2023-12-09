import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth-libs";
import Link from "next/link";

export default async function Page() {
    const user = await authUserSession();
    const comments = await prisma.comment.findMany({
        where: {
            user_email: user?.email
        }
    })
    return (
        <section className="w-full mt-4  px-4">
            <Header title="My Comments" />
            <div className="grid grid-cols-1 gap-4 py-2">
                {
                    comments?.map((comment, index) => (
                        <Link href={`/anime/${comment.anime_mal_id}`} key={index} className="bg-brand-primary p-4 text-brand-dark">
                            <p className="text-base">{comment.anime_title}</p>
                            <p className="italic">{comment.comment}</p>
                        </Link>
                    ))
                }
            </div>
        </section>
    )
}
