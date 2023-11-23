import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";

export default async function Page() {
    const user = await authUserSession();

    return (
        <div className="text-brand-primary flex flex-col items-center">
            <h1>Dashboard</h1>
            <h3>Hello, {user?.name}</h3>
            <Image src={user?.image} alt="ava" width={200} height={200} />
        </div>
    )
}
