"use client";

import { motion } from "framer-motion";

import { CirclePlus, ClipboardList, Link2, Trophy, Users } from "lucide-react";

import Container from "../shared/container";
import SectionGlow from "../shared/section-glow";

const steps = [
  {
    title: "Create",
    description: "Launch your giveaway campaign.",
    icon: CirclePlus,
  },
  {
    title: "Set Rules",
    description: "Define participation requirements.",
    icon: ClipboardList,
  },
  {
    title: "Share",
    description: "Distribute your giveaway link.",
    icon: Link2,
  },
  {
    title: "Track",
    description: "Monitor entries in real time.",
    icon: Users,
  },
  {
    title: "Reward",
    description: "Select a verified winner.",
    icon: Trophy,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-50 py-24">
      <SectionGlow />

      <Container>
        <div className="text-center">
          <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700">
            Simple workflow
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            How GiveFlow Works
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Manage your entire giveaway lifecycle from a single platform.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid gap-6 md:grid-cols-5">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                className="group rounded-[28px] border border-slate-100 bg-white p-8 shadow-[0_8px_30px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <step.icon className="h-7 w-7 text-violet-600" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
