"use client";

import Link from "next/link";
import Image from "next/image";

import { ArrowLeft, Check, Clock, Users } from "lucide-react";
import { getGiveawayStatus } from "@/lib/giveaway-status";

interface GiveawayProps {
  giveaway: {
    title: string;
    prize: string;
    description: string;
    participants: number;
    endDate: string;
    progress: number;
    requirements: string[];
    image: string;
  };
}

export default function GiveawayDetails({ giveaway }: GiveawayProps) {
  const giveawayStatus = getGiveawayStatus(giveaway.endDate);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <Link
        href="/giveaways"
        className="inline-flex items-center gap-2 text-slate-500 transition hover:text-violet-600"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to giveaways
      </Link>

      <h1 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
        {giveaway.title}
      </h1>

      <div className="mt-6 flex flex-wrap gap-3">
        <div className="rounded-full bg-amber-100 px-4 py-2 text-amber-700">
          {/* <Clock className="mr-2 inline h-4 w-4" /> */}
          <span>
            {giveawayStatus.status === "ENDED"
              ? "🔴 Ended"
              : `⏳ ${giveawayStatus.daysLeft} days left`}
          </span>
        </div>

        <div className="rounded-full bg-violet-100 px-4 py-2 text-violet-700">
          <Users className="mr-2 inline h-4 w-4" />
          {giveaway.participants.toLocaleString()} participants
        </div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-[32px] bg-linear-to-br from-violet-600 to-purple-700 p-10 text-center text-white shadow-2xl">
          <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-[32px] bg-white/15 backdrop-blur-sm">
            <Image
              src={giveaway.image}
              alt={giveaway.title}
              width={250}
              height={250}
              className="mx-auto object-contain"
            />
          </div>

          <h2 className="mt-8 text-4xl font-black">{giveaway.prize}</h2>

          <p className="mt-4 text-lg text-white/80">{giveaway.description}</p>

          <div className="mt-8">
            <div className="mb-3 flex justify-between text-sm">
              <span>Entries</span>

              <span>{giveaway.progress}%</span>
            </div>

            <div className="h-3 rounded-full bg-white/20">
              <div
                className="h-3 rounded-full bg-white"
                style={{
                  width: `${giveaway.progress}%`,
                }}
              />
            </div>
          </div>
        </div>

        <div className="rounded-[32px] border border-slate-100 bg-white p-10 shadow-xl">
          <h3 className="text-2xl font-bold text-slate-900">
            Participation Requirements
          </h3>

          <div className="mt-8 space-y-4">
            {giveaway.requirements.map((requirement) => (
              <div
                key={requirement}
                className="flex items-center gap-4 rounded-2xl border border-slate-100 p-4 transition hover:border-violet-300"
              >
                <div className="rounded-full bg-emerald-100 p-2">
                  <Check className="h-4 w-4 text-emerald-600" />
                </div>

                <span>{requirement}</span>
              </div>
            ))}
          </div>

          <button className="mt-10 w-full rounded-2xl bg-linear-to-r from-violet-600 to-purple-700 py-4 text-lg font-semibold text-white transition hover:scale-[1.02]">
            Join Giveaway
          </button>
        </div>
      </div>
    </div>
  );
}
