"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { day: "Mon", entries: 120 },
  { day: "Tue", entries: 280 },
  { day: "Wed", entries: 430 },
  { day: "Thu", entries: 580 },
  { day: "Fri", entries: 720 },
  { day: "Sat", entries: 900 },
  { day: "Sun", entries: 1245 },
];

export default function PerformanceChart() {
  return (
    <div className="rounded-[32px] border border-slate-100 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
      <h2 className="mb-8 text-2xl font-bold">Campaign Performance</h2>

      <div className="h-75">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid />

            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip />

            <Line type="monotone" dataKey="entries" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
