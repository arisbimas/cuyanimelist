"use client";

import { ArrowSquareLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
export default function Header({ title }) {
    const router = useRouter();
    const handleBack = () => {
        router.back()
    }
    return (
        <div className="flex justify-between items-center mb-4">
            <span className="text-brand-primary cursor-pointer" onClick={handleBack}>
                <ArrowSquareLeft size={32} />
            </span>
            <h3 className="text-2xl font-semibold text-brand-primary">{title}</h3>
        </div>
    )
}
