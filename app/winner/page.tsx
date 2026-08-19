import Container from "@/components/shared/container";
import ParticipantWheel from "@/components/winner/participant-wheel";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function WinnerPage() {
  return (
    <Container>
      <div className="py-20">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-slate-500 transition hover:text-violet-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to dashboard
        </Link>

        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50 px-5 py-2 text-sm font-semibold text-violet-700">
            🎁 Transparent Giveaway System
          </div>

          <h1 className="mt-6 text-6xl font-black text-slate-900">
            Winner Selection
          </h1>

          <p className="mt-4 text-xl text-slate-500">
            Fair, transparent, and completely random.
          </p>
        </div>

        <div className="mt-16">
          <ParticipantWheel />
        </div>
      </div>
    </Container>
  );
}
