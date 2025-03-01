import Link from "next/link";

export default function Page() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-100">
      <header className="w-full max-w-3xl flex justify-between items-center p-4 bg-white shadow-md rounded-lg">
        <h1 className="text-xl font-bold text-gray-800">Welcome</h1>
        <nav>
          <Link href="/page" className="text-blue-500 hover:underline">Sign In?</Link>
        </nav>
      </header>

      <main className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-semibold text-gray-800">Google OAuth Authentication</h1>
        <p className="text-gray-600 mt-2">Securely sign in using your Google account.</p>

        <Link href="/page">
          <button className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
            Authenticate with Google
          </button>
        </Link>
      </main>

      <footer className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} by Boss</footer>
    </div>
  );
}
