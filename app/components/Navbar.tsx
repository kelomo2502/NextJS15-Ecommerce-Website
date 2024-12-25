"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="flex justify-between p-4 bg-blue-500 text-white">
      <div>
        <Link href="/">Home</Link>
      </div>
      <div>
        {session ? (
          <>
            <span className="mr-4">Hello, {session.user?.name}</span>
            <button
              onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
              className="px-4 py-2 bg-red-500 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <Link href="/auth/login">Login</Link>
        )}
      </div>
      <button><Link href={"/auth/register"}>Register</Link></button>
    </nav>
  );
}
