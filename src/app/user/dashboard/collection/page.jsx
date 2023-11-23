import Header from "@/components/Dashboard/Header";
import { ArrowSquareLeft } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <section className="mt-4 w-full px-4">
            <Header title="My Collection" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/user/dashboard/collection/1" className="relative border border-brand-accent">
                    <Image src="https://picsum.photos/200" alt="image" width={200} height={200} className="w-full" />
                    <div className="absolute bottom-0 flex justify-center items-center w-full bg-brand-accent">
                        <h5 className="text-xl text-center text-brand-primary">Judul</h5>
                    </div>
                </Link>

            </div>
        </section>
    )
}
