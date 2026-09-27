export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  light = false,
}: {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} mb-12`}>
      <h2
        className={`font-display font-bold text-3xl md:text-[2.25rem] leading-tight ${
          light ? "text-white" : "text-secondary"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-base md:text-lg ${light ? "text-white/80" : "text-ink-soft"}`}>{subtitle}</p>
      )}
    </div>
  );
}
