import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Orbis.Nft",
  description: "Start a conversation with Orbis.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-bg-space text-[#EFF4FF] flex items-center justify-center px-5 text-center">
      <div>
        <h1 className="font-[var(--font-anton)] uppercase text-4xl sm:text-6xl tracking-[-0.02em] mb-4">
          Contact <span className="text-[#6FFF00]">.</span>
        </h1>
        <p className="font-[var(--font-mono)] text-sm text-[#EFF4FF]/60">
          hello@orbis.nft
        </p>
      </div>
    </main>
  );
}