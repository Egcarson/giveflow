"use client";

import { CheckCircle2, Trophy, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="rounded-[32px] border border-slate-100 bg-white p-6 shadow-[0_20px_80px_rgba(15,23,42,0.12)]"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">Active Giveaway</p>

          <h3 className="mt-1 text-xl font-bold text-slate-900">
            iPhone 17 Giveaway
          </h3>
        </div>

        <div className="rounded-2xl bg-violet-100 p-3">
          <Trophy className="h-6 w-6 text-violet-600" />
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <div className="rounded-2xl bg-slate-50 p-4">
          <div className="mb-2 flex justify-between">
            <span className="text-sm text-slate-600">Participants</span>

            <span className="font-semibold text-slate-900">1,245</span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-slate-200">
            <div className="h-full w-4/5 rounded-full bg-violet-600" />
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-1 rounded-2xl bg-slate-50 p-4">
            <Users className="mb-2 h-5 w-5 text-violet-600" />

            <p className="text-2xl font-bold text-slate-900">98%</p>

            <p className="text-sm text-slate-500">Verified</p>
          </div>

          <div className="flex-1 rounded-2xl bg-slate-50 p-4">
            <CheckCircle2 className="mb-2 h-5 w-5 text-violet-600" />

            <p className="text-2xl font-bold text-slate-900">3</p>

            <p className="text-sm text-slate-500">Days Left</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
