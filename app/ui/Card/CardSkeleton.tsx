export default function CardSkelton() {
  const shimmer = `before:from-background before:via-foreground before:to-background before:absolute before:inset-0 before:animate-[shimmer_1.5s_infinite] before:bg-linear-to-r`;

  return (
    <div
      className={`bg-background flex h-50 w-35 flex-col gap-0 overflow-hidden rounded-2xl transition-shadow duration-100 ease-linear hover:shadow-[15px_4px_15px_-3px_rgba(0,0,0,0.9)]`}
    >
      <div
        className={`${shimmer} relative isolate h-30 overflow-hidden border-b-2 border-b-slate-600 bg-cover px-3`}
      >
        {/* Now I have my Image Tag */}

        {/* Title Span */}
        <span
          className={`${shimmer} absolute right-0 bottom-0 z-5 w-full bg-black/60 px-3 text-center text-lg`}
        ></span>
      </div>
      <div className={`relative ${shimmer} h-20 w-full`}></div>
    </div>
  );
}
