import ThemeToggle from "./ThemeToggle";

interface Props {
  weekType: "even" | "odd";
}

export default function TopBar({ weekType }: Props) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-lavender-dim dark:text-lavender">
          {weekType === "even" ? "Even week" : "Odd week"} menu
        </p>
        <h1 className="font-display text-2xl sm:text-3xl font-semibold text-night dark:text-cream -mt-0.5">
          What&apos;s Cooking
        </h1>
      </div>
      <ThemeToggle />
    </div>
  );
}
