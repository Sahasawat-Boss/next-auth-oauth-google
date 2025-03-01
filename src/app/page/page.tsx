"use client";
import BackButton from "../components/backbutton";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
    const { data: session } = useSession();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <BackButton />
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm text-center">
                {session ? (
                    <>

                        <h2 className="text-xl font-semibold text-gray-800">Welcome, {session.user?.name || session.user?.email}</h2>
                        <p className="text-gray-600 mt-2">You are signed in.</p>
                        <button
                            onClick={() => signOut()}
                            className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                        >
                            Sign Out
                        </button>
                    </>
                ) : (
                    <>
                        <h2 className="text-xl font-semibold text-gray-800">Not Signed In</h2>
                        <p className="text-gray-600 mt-2">Please sign in to continue.</p>
                        <button
                            onClick={() => signIn()}
                            className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                        >
                            Sign In
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}