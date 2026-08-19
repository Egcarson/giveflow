"use client";

import Link from "next/link";
import { Gift, Menu } from "lucide-react";
import { motion } from "framer-motion";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Browse",
    href: "/giveaways",
  },
  {
    name: "How it works",
    href: "#how-it-works",
  },
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Winner",
    href: "/winner",
  },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative z-50 w-full border-b border-slate-100 bg-white/90 backdrop-blur-md lg:sticky lg:top-0"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <motion.div
            whileHover={{
              rotate: 15,
              scale: 1.05,
            }}
            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-violet-600 to-purple-700 text-white shadow-lg"
          >
            <Gift size={24} />
          </motion.div>

          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              GiveFlow
            </h1>

            <p className="hidden text-xs text-slate-500 sm:block">
              Smart giveaway management
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-violet-600"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/dashboard">
            <button className="rounded-2xl bg-linear-to-r from-violet-600 to-purple-700 px-6 py-3 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5">
              Start Giveaway
            </button>
          </Link>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="rounded-2xl border border-slate-200 p-3">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="w-full p-8">
              <div className="mt-12 flex flex-col gap-4">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="rounded-2xl border border-slate-100 p-4 text-lg font-medium text-slate-700 transition hover:bg-violet-50 hover:text-violet-600"
                  >
                    {link.name}
                  </Link>
                ))}

                <Link href="/dashboard">
                  <button className="mt-4 w-full rounded-2xl bg-linear-to-r from-violet-600 to-purple-700 py-4 font-semibold text-white">
                    Start Giveaway
                  </button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
