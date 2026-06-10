import Link from "next/link"

export default function NotFound() {
  return (
    <div className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 text-center">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[400px] w-[600px] rounded-full bg-violet-600/10 blur-[120px]" />
      </div>
      <div className="relative z-10">
        <p className="mb-4 text-6xl font-bold text-violet-400">404</p>
        <h1 className="mb-4 text-2xl font-semibold text-white">Page not found</h1>
        <p className="mb-8 text-gray-400">
          This page doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Back home
        </Link>
      </div>
    </div>
  )
}
