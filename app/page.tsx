import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Solana Blink Example</h1>
      <p className="text-xl">
        This is a Solana Blink example for transferring SOL.
      </p>
      <Link
        href="solana-action:https://your-domain.com/api/actions/transfer-sol"
        className="text-blue-500 underline"
      >
        Try the Blink
      </Link>
    </main>
  );
}
