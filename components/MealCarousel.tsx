"use client";

import { useState } from "react";
import { AnimatePresence, motion, PanInfo } from "framer-motion";
import { DayMenu } from "@/lib/menuData";
import { MEAL_ORDER, MealKey, getMealForKey } from "@/lib/getTodayMenu";
import MealCard from "./MealCard";
import MealTabs from "./MealTabs";

interface Props {
  menu: DayMenu | null;
  dateLabel: string;
}

const SWIPE_THRESHOLD = 60;

export default function MealCarousel({ menu, dateLabel }: Props) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const activeKey = MEAL_ORDER[index];

  function goTo(nextIndex: number) {
    if (nextIndex < 0 || nextIndex > MEAL_ORDER.length - 1) return;
    setDirection(nextIndex > index ? 1 : -1);
    setIndex(nextIndex);
  }

  function handleTabChange(key: MealKey) {
    goTo(MEAL_ORDER.indexOf(key));
  }

  function handleDragEnd(_: any, info: PanInfo) {
    if (info.offset.x < -SWIPE_THRESHOLD) {
      goTo(index + 1);
    } else if (info.offset.x > SWIPE_THRESHOLD) {
      goTo(index - 1);
    }
  }

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0, scale: 0.97 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0, scale: 0.97 }),
  };

  return (
    <div className="w-full">
      <MealTabs active={activeKey} onChange={handleTabChange} />

      <div className="relative mt-5 select-none">
        {/* desktop nav arrows */}
        <button
          aria-label="Previous meal"
          onClick={() => goTo(index - 1)}
          disabled={index === 0}
          className="hidden sm:flex absolute -left-14 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full glass bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-turmeric"
        >
          ‹
        </button>
        <button
          aria-label="Next meal"
          onClick={() => goTo(index + 1)}
          disabled={index === MEAL_ORDER.length - 1}
          className="hidden sm:flex absolute -right-14 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full glass bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-turmeric"
        >
          ›
        </button>

        <div className="overflow-hidden">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={activeKey}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.6}
              onDragEnd={handleDragEnd}
            >
              <MealCard
                mealKey={activeKey}
                meal={getMealForKey(menu, activeKey)}
                dateLabel={dateLabel}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* katori (bowl) progress indicators */}
      <div className="mt-6 flex items-center justify-center gap-3">
        {MEAL_ORDER.map((key, i) => (
          <button
            key={key}
            aria-label={`Go to ${key}`}
            onClick={() => goTo(i)}
            className="group relative h-5 w-6"
          >
            <svg viewBox="0 0 24 16" className="h-full w-full overflow-visible">
              <path
                d="M2 4 H22 A10 10 0 0 1 2 4 Z"
                className={`transition-all duration-300 ${
                  i === index
                    ? "fill-turmeric"
                    : "fill-none stroke-night/30 dark:stroke-cream/30"
                }`}
                strokeWidth={i === index ? 0 : 1.5}
              />
            </svg>
          </button>
        ))}
      </div>
    </div>
  );
}
