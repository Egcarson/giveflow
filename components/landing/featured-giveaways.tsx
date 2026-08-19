"use client";
import { giveaways } from "@/data/giveaways";

import Container from "../shared/container";

import GiveawayCard from "./giveaway-card";
import SectionGlow from "../shared/section-glow";
import Link from "next/link";

export default function FeaturedGiveaways({ limit }: { limit?: number }) {
  const displayedGiveaways = limit ? giveaways.slice(0, limit) : giveaways;

  return (
    <section className="py-20">
      <SectionGlow />

      <Container>
        {limit && (
          <div className="mb-10 flex items-center justify-between">
            <div>
              <h2 className="text-4xl font-black text-slate-900">
                Featured Giveaways
              </h2>

              <p className="mt-2 text-slate-500">
                Discover active campaigns and win amazing prizes.
              </p>
            </div>

            <Link
              href="/giveaways"
              className="hidden rounded-2xl border border-slate-200 px-6 py-3 font-semibold text-slate-700 transition-all hover:-translate-y-1 md:block"
            >
              View More →
            </Link>
          </div>
        )}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayedGiveaways.map((giveaway) => (
            <GiveawayCard key={giveaway.id} giveaway={giveaway} />
          ))}
        </div>

        {limit && (
          <div className="mt-10 flex justify-center md:hidden">
            <Link
              href="/giveaways"
              className="rounded-2xl bg-linear-to-r from-violet-600 to-purple-700 px-8 py-4 font-semibold text-white"
            >
              View All Giveaways
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}
