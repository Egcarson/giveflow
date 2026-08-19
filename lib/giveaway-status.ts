export function getGiveawayStatus(endDate: string) {
  const today = new Date();

  const end = new Date(endDate);

  const difference = end.getTime() - today.getTime();

  const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));

  if (daysLeft <= 0) {
    return {
      status: "ENDED",
      daysLeft: 0,
    };
  }

  if (daysLeft <= 2) {
    return {
      status: "ENDING SOON",
      daysLeft,
    };
  }

  return {
    status: "LIVE",
    daysLeft,
  };
}
