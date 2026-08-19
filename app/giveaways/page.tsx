import Container from "@/components/shared/container";
import FeaturedGiveaways from "@/components/landing/featured-giveaways";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function GiveawaysPage() {
  return (
    <main className="py-16">
      <Container>
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-violet-600"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="mb-12 text-center">
          <h1 className="text-5xl font-black text-slate-900">All Giveaways</h1>

          <p className="mt-4 text-slate-600">
            Discover active giveaways and join your favorites.
          </p>
        </div>

        <FeaturedGiveaways />
      </Container>
    </main>
  );
}
