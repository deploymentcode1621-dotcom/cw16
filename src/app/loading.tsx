export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 rounded-full border-4 border-primary-light border-t-primary animate-spin" />
        <p className="text-sm text-ink-soft">Loading...</p>
      </div>
    </div>
  );
}
