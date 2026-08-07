"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const STORAGE_KEY = "mess-menu-theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const initial = stored === "dark" ? "dark" : "light";
    setTheme(initial);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("light", theme === "light");
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme, mounted]);

  return (
    <button
      type="button"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
      className="relative flex h-10 w-10 items-center justify-center rounded-full glass bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 shadow-glass-light dark:shadow-glass focus:outline-none focus-visible:ring-2 focus-visible:ring-turmeric"
    >
      <motion.span
        key={theme}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="text-base"
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </motion.span>
    </button>
  );
}
