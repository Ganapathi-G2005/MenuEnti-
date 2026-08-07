export default function BackgroundBlobs() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 overflow-hidden -z-10"
    >
      <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-turmeric/25 dark:bg-turmeric/20 blur-[80px] animate-drift" />
      <div className="absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-chili/20 dark:bg-chili/25 blur-[90px] animate-driftSlow" />
      <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-lavender/20 dark:bg-plum-light/40 blur-[80px] animate-drift" />
    </div>
  );
}
