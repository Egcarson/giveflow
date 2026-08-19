"use client";

export default function SectionGlow() {
  return (
    <>
      <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-violet-200/30 blur-3xl" />

      <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />
    </>
  );
}
