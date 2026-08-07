"use client";

import { useEffect, useState } from "react";
import { getTodayMenu } from "@/lib/getTodayMenu";
import BackgroundBlobs from "@/components/BackgroundBlobs";
import TopBar from "@/components/TopBar";
import MealCarousel from "@/components/MealCarousel";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [today, setToday] = useState(() => getTodayMenu());

  useEffect(() => {
    // Recompute against the visitor's local clock once mounted, and again
    // right after local midnight so the app rolls over automatically.
    setToday(getTodayMenu());
    setMounted(true);

    const now = new Date();
    const msToMidnight =
      new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1).getTime() -
      now.getTime() +
      1000;
    const timer = setTimeout(() => setToday(getTodayMenu()), msToMidnight);
    return () => clearTimeout(timer);
  }, []);

  const dateLabel = today.date.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <main className="relative min-h-dvh flex flex-col">
      <BackgroundBlobs />

      <div className="mx-auto w-full max-w-md flex-1 flex flex-col px-5 pt-8 pb-10 sm:px-0">
        <TopBar weekType={today.weekType} />

        <div
          className={`mt-8 flex-1 flex flex-col justify-center transition-opacity duration-500 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          <MealCarousel menu={today.meals} dateLabel={dateLabel} />
        </div>

        <p className="mt-10 text-center font-mono text-[11px] tracking-wide text-lavender-dim dark:text-lavender/70">
          Swipe or tap to move between meals
        </p>
      </div>
    </main>
  );
}
