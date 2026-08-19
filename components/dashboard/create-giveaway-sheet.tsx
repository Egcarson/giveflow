"use client";

import { Calendar, Gift, ImageIcon, Plus, Trophy, Users } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function CreateGiveawaySheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="flex items-center gap-2 rounded-2xl bg-linear-to-r from-violet-600 to-purple-700 px-5 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1">
          <Plus className="h-5 w-5" />
          Create Giveaway
        </button>
      </SheetTrigger>

      <SheetContent side="right" className="overflow-y-auto px-8 py-8">
        <SheetHeader className="mb-6 border-b border-slate-100 pb-6">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100">
              <Gift className="h-7 w-7 text-violet-600" />
            </div>

            <div>
              <SheetTitle className="text-3xl font-black text-slate-900">
                Create Giveaway
              </SheetTitle>

              <SheetDescription className="mt-1 text-base">
                Launch a new campaign in minutes.
              </SheetDescription>
            </div>
          </div>
        </SheetHeader>

        <form className="space-y-7 py-8 pb-10">
          <div>
            <label className="mb-3 flex items-center gap-2 font-semibold text-slate-800">
              <Trophy className="h-4 w-4 text-violet-600" />
              Giveaway Title
            </label>

            <input
              type="text"
              placeholder="iPhone 17 Pro Giveaway"
              className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 transition-all focus:border-violet-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-violet-100"
            />
          </div>

          <div>
            <label className="mb-3 flex items-center gap-2 font-semibold text-slate-800">
              <Gift className="h-4 w-4 text-violet-600" />
              Prize
            </label>

            <input
              type="text"
              placeholder="Apple iPhone 17 Pro"
              className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 transition-all focus:border-violet-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-violet-100"
            />
          </div>

          <div>
            <label className="mb-3 font-semibold text-slate-800">
              Description
            </label>

            <textarea
              rows={5}
              placeholder="Describe your giveaway..."
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all focus:border-violet-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-violet-100"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-3 flex items-center gap-2 font-semibold text-slate-800">
                <Calendar className="h-4 w-4 text-violet-600" />
                Start Date
              </label>

              <input
                type="date"
                className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-100"
              />
            </div>

            <div>
              <label className="mb-3 flex items-center gap-2 font-semibold text-slate-800">
                <Calendar className="h-4 w-4 text-violet-600" />
                End Date
              </label>

              <input
                type="date"
                className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-100"
              />
            </div>
          </div>

          <div>
            <label className="mb-3 flex items-center gap-2 font-semibold text-slate-800">
              <Users className="h-4 w-4 text-violet-600" />
              Maximum Participants
            </label>

            <input
              type="number"
              placeholder="1000"
              className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-100"
            />
          </div>

          <div>
            <label className="mb-3 flex items-center gap-2 font-semibold text-slate-800">
              <ImageIcon className="h-4 w-4 text-violet-600" />
              Giveaway Image
            </label>

            <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
              <p className="font-semibold text-slate-700">
                Upload giveaway banner
              </p>

              <p className="mt-1 text-sm text-slate-500">PNG, JPG, WEBP</p>

              <input type="file" className="mt-4 w-full" />
            </div>
          </div>

          <div>
            <label className="mb-4 block font-semibold text-slate-800">
              Participation Requirements
            </label>

            <div className="space-y-3">
              {[
                "Follow our page",
                "Like this giveaway",
                "Share this giveaway",
                "Tag 3 friends",
              ].map((requirement) => (
                <label
                  key={requirement}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4 transition-all hover:border-violet-300 hover:bg-violet-50"
                >
                  <input type="checkbox" />

                  {requirement}
                </label>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="h-14 w-full rounded-2xl bg-gradient-to-r from-violet-600 to-purple-700 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:scale-[1.02]"
          >
            Publish Giveaway
          </button>
        </form>
      </SheetContent>
    </Sheet>
  );
}
