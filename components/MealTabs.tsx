"use client";

import { motion } from "framer-motion";
import { MealKey, MEAL_LABEL, MEAL_ORDER } from "@/lib/getTodayMenu";

interface Props {
  active: MealKey;
  onChange: (key: MealKey) => void;
}

export default function MealTabs({ active, onChange }: Props) {
  return (
    <div
      role="tablist"
      aria-label="Choose a meal"
      className="relative flex gap-1 rounded-full glass bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 p-1 shadow-glass-light dark:shadow-glass"
    >
      {MEAL_ORDER.map((key) => {
        const isActive = key === active;
        return (
          <button
            key={key}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(key)}
            className={`relative flex-1 rounded-full px-3 py-2.5 text-sm font-medium font-body transition-colors duration-200 focus:outline-none ${
              isActive
                ? "text-night dark:text-night"
                : "text-night/60 dark:text-cream/60"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="meal-tab-pill"
                className="absolute inset-0 rounded-full bg-turmeric shadow-[0_2px_12px_rgba(242,169,59,0.5)]"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <span className="relative z-10">{MEAL_LABEL[key]}</span>
          </button>
        );
      })}
    </div>
  );
}
