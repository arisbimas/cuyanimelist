import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
    const user = await authUserSession();

    return (
        <div className="mt-8 text-brand-primary flex flex-col items-center">
            <h1>Dashboard</h1>
            <h3>Hello, {user?.name}</h3>
            <Image src={user?.image} alt="ava" width={200} height={200} />
            <div className="flex flex-wrap gap-4 my-6">
                <Link
                    href="/user/dashboard/collection"
                    className="px-4 py-2 bg-brand-accent text-brand-dark rounded-sm font-semibold"
                >My Collection</Link>
                <Link
                    href="/user/dashboard/comment"
                    className="px-4 py-2 bg-brand-accent text-brand-dark rounded-sm font-semibold"
                >My Apa ya</Link>
            </div>
        </div>
    )
}
