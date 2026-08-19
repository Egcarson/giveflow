"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import { Users } from "lucide-react";

const participants = [
  "John",
  "Sarah",
  "Daniel",
  "Michael",
  "Grace",
  "Mary",
  "Esther",
  "David",
  "Joseph",
  "Emmanuel",
  "Rebecca",
  "Joy",
];

export default function ParticipantWheel() {
  const [winner, setWinner] = useState("");
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);

  const selectWinner = () => {
    if (spinning) return;

    setSpinning(true);

    const selected =
      participants[Math.floor(Math.random() * participants.length)];

    const extraRotation = rotation + 360 * 8 + Math.random() * 360;

    setRotation(extraRotation);

    setTimeout(() => {
      setWinner(selected);

      setSpinning(false);
    }, 5000);
  };

  return (
    <div className="space-y-8 text-center">
      <motion.div
        animate={{
          rotate: rotation,
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
        }}
        className="relative mx-auto flex h-80 w-80 items-center justify-center rounded-full border-[18px] border-violet-600 bg-white shadow-[0_30px_100px_rgba(15,23,42,0.12)]"
      >
        <div className="absolute -top-4 h-8 w-8 rotate-45 bg-violet-600" />

        <div>
          <Users className="mx-auto h-14 w-14 text-violet-600" />

          <p className="mt-4 text-3xl font-black">{participants.length}</p>

          <p className="text-slate-500">Participants</p>
        </div>
      </motion.div>

      <button
        onClick={selectWinner}
        disabled={spinning}
        className="rounded-2xl bg-linear-to-r from-violet-600 to-purple-700 px-10 py-5 font-bold text-white shadow-xl"
      >
        {spinning ? "Selecting Winner..." : "Pick Winner"}
      </button>

      {winner && (
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="rounded-[32px] bg-white p-10 shadow-[0_20px_60px_rgba(15,23,42,0.12)]"
        >
          <h2 className="text-5xl">🏆</h2>

          <h3 className="mt-4 text-4xl font-black">{winner}</h3>

          <p className="mt-3 text-slate-500">Congratulations!</p>
        </motion.div>
      )}
    </div>
  );
}
