import * as actions from "@/actions";
import { auth } from "@/auth";
import Image from "next/image";

const ServerComponentApproach = async () => {
  const session = await auth();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">React Server Component</h1>
      {session && session.user ? (
        <div className="flex flex-col items-center">
          {session.user.name && session.user.image && (
            <div className="flex mb-8 gap-3">
              <Image
                src={session.user.image}
                alt={session.user.name}
                width={32}
                height={32}
              />
              <span>{session.user.name}</span>
            </div>
          )}
          <form action={actions.handleGitHubSignOut}>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded"
              type="submit"
            >
              Sign Out
            </button>
          </form>
        </div>
      ) : (
        <form action={actions.handleGitHubSignIn}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
            SignIn
          </button>
        </form>
      )}
    </main>
  );
};

export default ServerComponentApproach;
