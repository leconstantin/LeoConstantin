export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-zinc-50 dark:bg-black overflow-hidden">
      <div className="bg-white/60 dark:bg-zinc-900 dark:ring-zinc-300/20 dark:ring-1 min-h-screen lg:mx-16 sm:mx-7 shadow-lg">
        <div className="px-7 md:px-16 ">{children}</div>
      </div>
    </div>
  );
}
