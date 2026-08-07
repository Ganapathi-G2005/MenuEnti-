import { Meal, MealKey } from "@/lib/menuData";
import { MEAL_LABEL } from "@/lib/getTodayMenu";

const MEAL_GLYPH: Record<MealKey, string> = {
  breakfast: "☕",
  lunch: "🍛",
  dinner: "🌙",
};

const MEAL_NOTE: Record<MealKey, string> = {
  breakfast: "To start the day",
  lunch: "The midday thali",
  dinner: "To close it out",
};

interface Props {
  mealKey: MealKey;
  meal: Meal | null;
  dateLabel: string;
}

export default function MealCard({ mealKey, meal, dateLabel }: Props) {
  return (
    <div className="relative w-full rounded-4xl glass bg-white/15 dark:bg-white/[0.06] border border-white/25 dark:border-white/10 shadow-glass-light dark:shadow-glass overflow-hidden">
      {/* steam wisps, purely decorative */}
      <div aria-hidden className="pointer-events-none absolute top-0 left-0 right-0 h-24 overflow-hidden opacity-60">
        <span className="absolute left-10 top-8 h-10 w-3 rounded-full bg-white/40 dark:bg-white/20 blur-md animate-steam" />
        <span className="absolute left-1/2 top-10 h-10 w-3 rounded-full bg-white/40 dark:bg-white/20 blur-md animate-steam [animation-delay:0.8s]" />
        <span className="absolute right-14 top-6 h-10 w-3 rounded-full bg-white/40 dark:bg-white/20 blur-md animate-steam [animation-delay:1.6s]" />
      </div>

      <div className="relative px-6 pt-7 pb-8 sm:px-9 sm:pt-9 sm:pb-10">
        <div className="flex items-center justify-between gap-3 mb-1">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-black/10 dark:bg-white/10 px-3 py-1 text-xs font-mono tracking-wide text-night/70 dark:text-cream/70">
            {dateLabel}
          </span>
          <span className="text-2xl leading-none">{MEAL_GLYPH[mealKey]}</span>
        </div>

        <h2 className="mt-3 font-display text-4xl sm:text-5xl font-semibold tracking-tight text-night dark:text-cream">
          {MEAL_LABEL[mealKey]}
        </h2>
        <p className="mt-1 font-display italic text-lavender-dim dark:text-lavender text-sm sm:text-base">
          {MEAL_NOTE[mealKey]}
        </p>

        <div className="mt-6 h-px w-full bg-gradient-to-r from-turmeric/60 via-chili/40 to-transparent" />

        {meal ? (
          <>
            <ul className="mt-6 space-y-3">
              {meal.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-turmeric" />
                  <span className="font-body text-[15px] sm:text-base leading-snug text-night/90 dark:text-cream/90">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {meal.beverages && meal.beverages.length > 0 && (
              <div className="mt-7 pt-5 border-t border-black/10 dark:border-white/10">
                <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-lavender-dim dark:text-lavender mb-2.5">
                  Also on the table
                </p>
                <div className="flex flex-wrap gap-2">
                  {meal.beverages.map((b, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-chili/10 dark:bg-chili/15 border border-chili/20 dark:border-chili/25 px-3 py-1 text-xs font-body text-night/80 dark:text-cream/85"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="mt-10 flex flex-col items-center text-center gap-2 py-6">
            <span className="text-3xl">🍽️</span>
            <p className="font-display text-lg text-night/80 dark:text-cream/80">
              No menu available today
            </p>
            <p className="font-body text-sm text-lavender-dim dark:text-lavender">
              Check back for the next meal, or ask the mess committee.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
