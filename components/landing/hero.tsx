"use client";

import { motion } from "framer-motion";

import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

import Container from "../shared/container";

import AnimatedBackground from "../shared/animated-background";

import DashboardPreview from "./dashboard-preview";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-14 md:py-20">
      <AnimatedBackground />

      <Container>
        <div className="relative z-10 grid items-center gap-20 lg:grid-cols-2">
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700">
              <Sparkles className="h-4 w-4" />
              Trusted giveaway platform
            </div>

            <h1 className="mt-6 text-5xl font-black leading-[0.9] tracking-tight text-slate-900 md:text-7xl">
              Run giveaways people actually trust.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Create, manage, verify, and reward your community with a platform
              built for creators, influencers, brands, and businesses.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/dashboard">
                <button className="rounded-2xl bg-violet-600 px-8 py-4 font-semibold text-white shadow-lg">
                  Start Giveaway
                </button>
              </Link>

              <button className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-8 py-4 font-semibold text-slate-900">
                Explore Giveaways
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-8 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600" />

              <span className="text-sm text-slate-600">
                Trusted by 10,000+ participants
              </span>
            </div>
            {/* <div className="mt-8 flex flex-wrap gap-3">
              <div className="rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700">
                ⭐ 10,000+ participants
              </div>

              <div className="rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700">
                🎁 500+ giveaways
              </div>

              <div className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
                ✓ 98% verified entries
              </div>
            </div> */}
          </motion.div>

          <DashboardPreview />
        </div>
      </Container>
    </section>
  );
}
