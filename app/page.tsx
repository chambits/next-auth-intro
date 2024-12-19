import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">NextAuth Authentication</h1>
      <div className="mt-8 space-y-4">
        <Link href="/server" className="text-blue-500 hover:underline block">
          React Server Component Example
        </Link>
        <p>
          This page is server-rendered as a{" "}
          <strong>React Server Component</strong>. It gets the session data on
          the server using the <code>auth()</code> method.
        </p>
        <Link href="/client" className="text-blue-500 hover:underline block">
          Client Component Example
        </Link>
        <p>
          This page fetches session data client-side using the{" "}
          <code>useSession</code> React Hook. It needs the{" "}
          <code>&apos;use client&apos;</code> directive at the top of the file
          to enable client-side rendering, and the <code>SessionProvider</code>{" "}
          component to provide the session data.
        </p>
      </div>
    </main>
  );
}
