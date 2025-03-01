"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
    const router = useRouter();

    return (
        <button
            onClick={() => router.back()}
            className="absolute top-4 left-10 mt-4 px-2 py-0.5 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-lg transition duration-300"
        >
            ← Back
        </button>
    );
}