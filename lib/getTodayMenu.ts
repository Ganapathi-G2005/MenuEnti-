import { DAY_ORDER, DayMenu, DayName, MENUS, MealKey, Meal } from "./menuData";

export type { MealKey, Meal, DayMenu, DayName };

// If your mess's real-world "odd/even week" labelling runs opposite to
// ISO week parity, flip this to false.
const EVEN_ISO_WEEK_MEANS_EVEN_MENU = false;

/**
 * ISO-8601 week number (1-53) for a given date, based on the date's
 * OWN local calendar fields (not UTC-shifted), so this respects the
 * user's local date rather than their timezone offset from UTC.
 */
function isoWeekNumber(date: Date): number {
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  // ISO: Monday = 1 ... Sunday = 7
  const dayNum = d.getDay() === 0 ? 7 : d.getDay();
  // Shift to the Thursday of this week (ISO week is defined by its Thursday)
  d.setDate(d.getDate() + 4 - dayNum);
  const yearStart = new Date(d.getFullYear(), 0, 1);
  const diffDays = Math.round((d.getTime() - yearStart.getTime()) / 86400000);
  return Math.ceil((diffDays + 1) / 7);
}

export function getWeekType(date: Date): "even" | "odd" {
  const week = isoWeekNumber(date);
  const isEvenIsoWeek = week % 2 === 0;
  if (EVEN_ISO_WEEK_MEANS_EVEN_MENU) {
    return isEvenIsoWeek ? "even" : "odd";
  }
  return isEvenIsoWeek ? "odd" : "even";
}

export function getDayName(date: Date): DayName {
  return DAY_ORDER[date.getDay()];
}

export interface TodayMenu {
  date: Date;
  dayName: DayName;
  weekType: "even" | "odd";
  meals: DayMenu | null;
}

export function getTodayMenu(date: Date = new Date()): TodayMenu {
  const weekType = getWeekType(date);
  const dayName = getDayName(date);
  const week = MENUS[weekType];
  const meals = week?.[dayName] ?? null;
  return { date, dayName, weekType, meals };
}

export const MEAL_LABEL: Record<MealKey, string> = {
  breakfast: "Breakfast",
  lunch: "Lunch",
  snacks: "Snacks",
  dinner: "Dinner",
};

export const MEAL_ORDER: MealKey[] = ["breakfast", "lunch", "snacks", "dinner"];

export function getMealForKey(menu: DayMenu | null, key: MealKey): Meal | null {
  if (!menu) return null;
  return menu[key] ?? null;
}
