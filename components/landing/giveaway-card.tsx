"use client";

import { ArrowRight, Clock, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getGiveawayStatus } from "@/lib/giveaway-status";
interface GiveawayCardProps {
  giveaway: {
    id: number;
    title: string;
    description: string;
    participants: number;
    progress: number;
    image: string;
    endDate: string;
  };
}

export default function GiveawayCard({ giveaway }: GiveawayCardProps) {
  const giveawayStatus = getGiveawayStatus(giveaway.endDate);

  return (
    <div className="overflow-hidden rounded-[32px] border border-slate-100 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-2">
      <div className="relative h-56">
        <Image
          src={giveaway.image}
          alt={giveaway.title}
          fill
          className="object-cover"
        />

        <div
          className={`absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold backdrop-blur ${
            giveawayStatus.status === "LIVE"
              ? "text-emerald-700"
              : giveawayStatus.status === "ENDING SOON"
                ? "text-amber-700"
                : "text-red-700"
          }`}
        >
          <div
            className={`h-2 w-2 rounded-full ${
              giveawayStatus.status === "LIVE"
                ? "animate-pulse bg-emerald-500"
                : giveawayStatus.status === "ENDING SOON"
                  ? "animate-pulse bg-amber-500"
                  : "bg-red-500"
            }`}
          />

          {giveawayStatus.status}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-3xl font-black text-slate-900">{giveaway.title}</h3>

        <p className="mt-3 text-slate-500">{giveaway.description}</p>

        <div className="mt-5 flex justify-between text-sm text-slate-500">
          <span>👥 {giveaway.participants.toLocaleString()}</span>

          <span>⏳ {giveawayStatus.daysLeft} days left</span>
        </div>

        <div className="mt-5 h-2 rounded-full bg-slate-100">
          <div
            className="h-2 rounded-full bg-linear-to-r from-violet-600 to-purple-700"
            style={{
              width: `${giveaway.progress}%`,
            }}
          />
        </div>

        <Link
          href={`/giveaway/${giveaway.id}`}
          className="mt-6 flex h-14 items-center justify-center rounded-2xl bg-linear-to-r from-violet-600 to-purple-700 font-semibold text-white"
        >
          View Giveaway
        </Link>
      </div>
    </div>
  );
}
