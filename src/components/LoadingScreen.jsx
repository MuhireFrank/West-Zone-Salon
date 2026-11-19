export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#fff8f8]">
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-6">
          <div className="absolute inset-0 rounded-full bg-red-500/15 blur-2xl" />
          <div className="relative flex h-28 w-28 items-center justify-center rounded-full border-[3px] border-red-600 bg-white shadow-[0_20px_80px_rgba(215,31,31,0.18)]">
            <span className="font-display text-[3.2rem] font-bold leading-none text-red-600">
              W
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-red-600">
            Luxury Grooming
          </p>
          <h2 className="font-display text-5xl tracking-[0.12em] text-[#121212]">
            WESTZONE
          </h2>
          <p className="text-[11px] font-semibold uppercase tracking-[0.7em] text-[#4b4b4b]">
            SALON
          </p>
        </div>

        <div className="mt-8 flex items-center gap-3">
          {[0, 1, 2].map((dot) => (
            <span
              key={dot}
              className="h-2.5 w-2.5 rounded-full bg-red-600 animate-pulse"
              style={{ animationDelay: `${dot * 150}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
