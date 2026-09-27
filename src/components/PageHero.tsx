export default function PageHero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary to-primary-dark">
      <div className="blob-accent bg-accent/25 h-72 w-72 -top-16 -right-10" />
      <div className="container-content relative z-10 py-14 md:py-20 text-center">
        <h1 className="font-display font-bold text-3xl md:text-5xl text-white">{title}</h1>
        {subtitle && <p className="mt-4 text-white/80 max-w-2xl mx-auto text-base md:text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}
