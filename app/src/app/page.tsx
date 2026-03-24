import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { featuredProducts } from "@/data/products";

const craftPoints = [
  {
    icon: "◈",
    title: "Premium Materials",
    description:
      "Only the finest metals and stones — gold, platinum, titanium, and conflict-free gemstones sourced from certified suppliers.",
  },
  {
    icon: "⊕",
    title: "Precision Craft",
    description:
      "Each piece is hand-finished by master artisans with decades of experience. No shortcuts. No compromises.",
  },
  {
    icon: "◆",
    title: "Bold Design",
    description:
      "Our design language is built on geometry, strength, and restraint. Jewellery that makes a statement without saying a word.",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-[var(--background)] overflow-hidden pt-16">
        {/* Background geometric elements */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[800px] h-[800px] border border-[var(--charcoal-border)] rounded-full opacity-30" />
          <div className="absolute w-[600px] h-[600px] border border-[var(--charcoal-border)] rounded-full opacity-20 rotate-45" />
          <div className="absolute w-[400px] h-[400px] border border-[var(--gold)] opacity-5 rotate-12" />
          <div className="absolute w-[200px] h-[200px] border border-[var(--gold)] opacity-10 rotate-45" />
        </div>

        {/* Top-left decorative lines */}
        <div className="absolute top-24 left-8 hidden lg:block">
          <div className="h-32 w-px bg-gradient-to-b from-transparent to-[var(--gold)] opacity-40" />
        </div>
        <div className="absolute top-24 right-8 hidden lg:block">
          <div className="h-32 w-px bg-gradient-to-b from-transparent to-[var(--gold)] opacity-40" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-[var(--gold)]" />
            <span className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] font-medium">
              Premium Jewellery
            </span>
            <div className="h-px w-12 bg-[var(--gold)]" />
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-6 uppercase">
            <span className="block text-[var(--foreground)]">Wear Your</span>
            <span className="block gold-shimmer">Strength</span>
          </h1>

          <p className="max-w-xl mx-auto text-base md:text-lg text-[var(--muted)] leading-relaxed mb-12 tracking-wide">
            Jewellery forged for those who command respect. Bold design.
            Uncompromising materials. Precision craftsmanship.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/collection"
              className="px-10 py-4 text-sm tracking-[0.2em] uppercase font-bold bg-[var(--gold)] text-[var(--background)] hover:bg-[var(--gold-light)] transition-colors duration-200"
            >
              Explore Collection
            </Link>
            <a
              href="#craft"
              className="px-10 py-4 text-sm tracking-[0.2em] uppercase font-bold border border-[var(--charcoal-border)] text-[var(--foreground)] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-200"
            >
              Our Craft
            </a>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            {[
              { value: "12+", label: "Designs" },
              { value: "6", label: "Categories" },
              { value: "100%", label: "Handcrafted" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-black text-[var(--gold)]">
                  {stat.value}
                </div>
                <div className="text-xs tracking-[0.15em] uppercase text-[var(--muted)] mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--muted)]">
          <span className="text-[10px] tracking-[0.25em] uppercase">
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-[var(--muted)] to-transparent" />
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-6 lg:px-12 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-8 bg-[var(--gold)]" />
                <span className="text-xs tracking-[0.25em] uppercase text-[var(--gold)] font-medium">
                  Curated Selection
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight uppercase text-[var(--foreground)]">
                Featured Pieces
              </h2>
            </div>
            <Link
              href="/collection"
              className="text-xs tracking-[0.15em] uppercase font-bold text-[var(--gold)] hover:text-[var(--gold-light)] transition-colors duration-200 flex items-center gap-2 self-start md:self-auto"
            >
              View All
              <span className="text-base">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--charcoal-border)] to-transparent" />
      </div>

      {/* Craft Section */}
      <section id="craft" className="py-24 px-6 lg:px-12 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-8 bg-[var(--gold)]" />
              <span className="text-xs tracking-[0.25em] uppercase text-[var(--gold)] font-medium">
                The Ornamenta Standard
              </span>
              <div className="h-px w-8 bg-[var(--gold)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight uppercase text-[var(--foreground)]">
              Built Different
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {craftPoints.map((point) => (
              <div
                key={point.title}
                className="group border border-[var(--charcoal-border)] p-8 hover:border-[var(--gold)] transition-colors duration-300 bg-[var(--charcoal)]"
              >
                <span className="text-3xl text-[var(--gold)] block mb-5 group-hover:scale-110 transition-transform duration-300">
                  {point.icon}
                </span>
                <h3 className="text-lg font-bold tracking-wide uppercase text-[var(--foreground)] mb-3">
                  {point.title}
                </h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Brand Statement */}
      <section
        id="about"
        className="py-24 px-6 lg:px-12 bg-[var(--charcoal)] border-y border-[var(--charcoal-border)]"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-12 h-12 border border-[var(--gold)] rotate-45 mx-auto mb-12 flex items-center justify-center">
            <div className="w-4 h-4 bg-[var(--gold)] rotate-0" />
          </div>
          <blockquote className="text-2xl md:text-4xl font-black tracking-tight leading-tight uppercase text-[var(--foreground)] mb-8">
            &ldquo;Strength is not worn.{" "}
            <span className="text-[var(--gold)]">It is forged.</span>&rdquo;
          </blockquote>
          <p className="text-base text-[var(--muted)] leading-relaxed max-w-2xl mx-auto">
            Ornamenta was born from a belief that men&apos;s jewellery should be
            as uncompromising as the men who wear it. Every piece in our
            collection is designed to project authority, precision, and an
            unwavering sense of self.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/collection"
              className="px-10 py-4 text-sm tracking-[0.2em] uppercase font-bold bg-[var(--gold)] text-[var(--background)] hover:bg-[var(--gold-light)] transition-colors duration-200"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
