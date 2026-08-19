"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import {
  BarChart3,
  Gift,
  Search,
  Trophy,
  Users,
  Plus,
  House,
} from "lucide-react";

import { giveaways } from "@/data/giveaways";
import { getGiveawayStatus } from "@/lib/giveaway-status";
import CreateGiveawaySheet from "@/components/dashboard/create-giveaway-sheet";
import Container from "@/components/shared/container";
import PerformanceChart from "@/components/dashboard/performance-chart";

const activeGiveaways = giveaways.filter(
  (giveaway) => getGiveawayStatus(giveaway.endDate).status !== "ENDED",
);

const totalParticipants = giveaways.reduce(
  (total, giveaway) => total + giveaway.participants,
  0,
);

const stats = [
  {
    label: "Active",
    value: activeGiveaways.length,
    icon: Gift,
  },
  {
    label: "Entries",
    value: totalParticipants.toLocaleString(),
    icon: Users,
  },
  {
    label: "Winners",
    value: "48",
    icon: Trophy,
  },
  {
    label: "Success",
    value: "98%",
    icon: BarChart3,
  },
];

export default function DashboardPage() {
  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("ALL");

  const filteredGiveaways = useMemo(() => {
    return giveaways
      .filter((giveaway) => {
        const status = getGiveawayStatus(giveaway.endDate).status;

        const matchesSearch = giveaway.title
          .toLowerCase()
          .includes(search.toLowerCase());

        const matchesFilter = filter === "ALL" || status === filter;

        return matchesSearch && matchesFilter;
      })
      .sort((a, b) => {
        const aEnded = getGiveawayStatus(a.endDate).status === "ENDED";

        const bEnded = getGiveawayStatus(b.endDate).status === "ENDED";

        return Number(aEnded) - Number(bEnded);
      });
  }, [search, filter]);

  return (
    <Container>
      <div className="py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-black text-slate-900">
              Campaign Dashboard
            </h1>

            <p className="mt-2 text-slate-500">
              Monitor and manage all giveaway campaigns.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-4 font-semibold text-slate-700 transition-all hover:-translate-y-1"
            >
              <House className="h-5 w-5" />
              Home
            </Link>

            <CreateGiveawaySheet />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="rounded-[28px] border border-slate-100 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
              >
                <Icon className="h-8 w-8 text-violet-600" />

                <h2 className="mt-4 text-3xl font-black">{stat.value}</h2>

                <p className="mt-2 text-slate-500">{stat.label}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12">
          <PerformanceChart />
        </div>

        <div className="mt-10 rounded-[32px] border border-slate-100 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

            <input
              type="text"
              placeholder="Search giveaways..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-14 w-full rounded-2xl border border-slate-200 pl-12 pr-4 outline-none"
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {["ALL", "LIVE", "ENDING SOON", "ENDED"].map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                  filter === item
                    ? "bg-violet-600 text-white"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h2 className="mb-6 text-2xl font-black text-slate-900">
            Recent Campaigns
          </h2>

          <div className="space-y-5">
            {filteredGiveaways.map((giveaway) => {
              const giveawayStatus = getGiveawayStatus(giveaway.endDate);

              return (
                <div
                  key={giveaway.id}
                  className="block rounded-[32px] border border-slate-100 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all hover:-translate-y-1"
                >
                  <div className="flex flex-col gap-5 md:flex-row md:items-center">
                    <Image
                      src={giveaway.image}
                      alt={giveaway.title}
                      width={110}
                      height={110}
                      className="h-28 w-full rounded-3xl object-cover md:w-28"
                    />

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h3 className="text-xl font-bold text-slate-900">
                          {giveaway.title}
                        </h3>

                        <div
                          className={`
                            flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold

                            ${
                              giveawayStatus.status === "LIVE"
                                ? "bg-emerald-100 text-emerald-700"
                                : giveawayStatus.status === "ENDING SOON"
                                  ? "bg-amber-100 text-amber-700"
                                  : "bg-red-100 text-red-700"
                            }
                          `}
                        >
                          <span
                            className={`
                              h-2 w-2 rounded-full

                              ${
                                giveawayStatus.status === "LIVE"
                                  ? "animate-pulse bg-emerald-500"
                                  : giveawayStatus.status === "ENDING SOON"
                                    ? "animate-pulse bg-amber-500"
                                    : "bg-red-500"
                              }
                            `}
                          />

                          {giveawayStatus.status}
                        </div>
                      </div>

                      <div className="mt-5 h-2 rounded-full bg-slate-100">
                        <div
                          className="h-2 rounded-full bg-linear-to-r from-violet-600 to-purple-700"
                          style={{
                            width: `${giveaway.progress}%`,
                          }}
                        />
                      </div>

                      <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                          <span>
                            👥 {giveaway.participants.toLocaleString()}{" "}
                            participants
                          </span>

                          <span>
                            {giveawayStatus.status === "ENDED"
                              ? "🔴 Ended"
                              : `⏳ ${giveawayStatus.daysLeft} days left`}
                          </span>
                        </div>

                        <div className="flex gap-3">
                          <Link
                            href={`/giveaway/${giveaway.id}`}
                            className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold"
                          >
                            View
                          </Link>

                          <Link
                            href="/winner"
                            className="rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white"
                          >
                            Select Winner
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredGiveaways.length === 0 && (
            <div className="rounded-[32px] border border-dashed border-slate-200 bg-white p-16 text-center">
              <div className="text-5xl">🎁</div>

              <h3 className="mt-4 text-2xl font-bold">No giveaways found</h3>

              <p className="mt-2 text-slate-500">
                Try another search or filter.
              </p>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
