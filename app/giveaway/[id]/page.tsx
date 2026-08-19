import { notFound } from "next/navigation";

import GiveawayDetails from "@/components/giveaway/giveaway-details";

import { giveaways } from "@/data/giveaways";

export default async function GiveawayPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const giveaway = giveaways.find((item) => item.id === Number(id));

  if (!giveaway) {
    notFound();
  }

  return <GiveawayDetails giveaway={giveaway} />;
}
