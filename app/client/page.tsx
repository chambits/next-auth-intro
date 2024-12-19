"use client";
import SignInButton from "@/components/SignInButton";
import SignOutButton from "@/components/SignOutButton";
import { useSession } from "next-auth/react";
import Image from "next/image";

const ClientComponentApproach = () => {
  const session = useSession();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Client Component</h1>
      {session.status === "authenticated" ? (
        <div className="flex flex-col items-center">
          <div className="flex mb-8 gap-3">
            <Image
              src={session.data.user?.image ?? ""}
              alt={session.data.user?.name ?? ""}
              width={32}
              height={32}
            />
            <span>{session.data.user?.name}</span>
          </div>
          <SignOutButton />
        </div>
      ) : (
        <SignInButton />
      )}
    </main>
  );
};

export default ClientComponentApproach;
