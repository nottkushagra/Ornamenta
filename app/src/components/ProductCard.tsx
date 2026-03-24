import Link from "next/link";
import { type Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const categoryIcons: Record<string, string> = {
  Rings: "◈",
  Bracelets: "⊗",
  Necklaces: "⊕",
  Cufflinks: "◆",
  Pendants: "◇",
  Chains: "⊞",
};

export default function ProductCard({ product }: ProductCardProps) {
  const icon = categoryIcons[product.category] ?? "◈";

  return (
    <div className="group relative bg-[var(--charcoal)] border border-[var(--charcoal-border)] hover:border-[var(--gold)] transition-all duration-300 flex flex-col">
      {/* Product Visual */}
      <div className="relative aspect-square bg-[var(--charcoal-light)] flex items-center justify-center overflow-hidden">
        {/* Geometric decorative background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 group-hover:opacity-10 transition-opacity duration-500">
          <div className="w-48 h-48 border border-[var(--gold)] rotate-45" />
          <div className="absolute w-32 h-32 border border-[var(--gold)] rotate-12" />
          <div className="absolute w-16 h-16 border border-[var(--gold)] rotate-0" />
        </div>

        {/* Category Icon */}
        <div className="relative flex flex-col items-center gap-3">
          <span className="text-5xl text-[var(--gold)] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
            {icon}
          </span>
          <span className="text-[10px] tracking-[0.25em] uppercase text-[var(--muted)] font-medium">
            {product.material}
          </span>
        </div>

        {/* Corner accents */}
        <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[var(--gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[var(--gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[var(--gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[var(--gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 left-4">
            <span className="px-2.5 py-1 text-[10px] tracking-[0.15em] uppercase font-bold bg-[var(--gold)] text-[var(--background)]">
              {product.badge}
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-base font-bold tracking-wide text-[var(--foreground)] leading-tight group-hover:text-[var(--gold)] transition-colors duration-200">
            {product.name}
          </h3>
        </div>

        <p className="text-xs text-[var(--muted)] leading-relaxed mb-4 flex-1">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-[var(--charcoal-border)]">
          <div>
            <span className="text-xs text-[var(--muted)] block mb-0.5 tracking-wider uppercase">
              {product.category}
            </span>
            <span className="text-lg font-bold text-[var(--gold)]">
              ${product.price.toLocaleString()}
            </span>
          </div>
          <Link
            href={`/collection#product-${product.id}`}
            className="px-4 py-2 text-xs tracking-[0.12em] uppercase font-bold border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--background)] transition-all duration-200"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
