"use client";

import { useState, useMemo } from "react";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function CollectionPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState<"default" | "price-asc" | "price-desc">(
    "default"
  );
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    let result = products;

    if (selectedCategory !== "All") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.material.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    if (sortBy === "price-asc") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [selectedCategory, sortBy, searchQuery]);

  return (
    <main className="pt-16">
      {/* Page Header */}
      <div className="bg-[var(--charcoal)] border-b border-[var(--charcoal-border)] py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[var(--gold)]" />
            <span className="text-xs tracking-[0.25em] uppercase text-[var(--gold)] font-medium">
              Ornamenta
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight uppercase text-[var(--foreground)] mb-3">
            The Collection
          </h1>
          <p className="text-[var(--muted)] text-base max-w-xl">
            Every piece is a declaration. Browse our curated range of premium
            jewellery built for strength and precision.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-16 z-40 bg-[var(--background)]/95 backdrop-blur-md border-b border-[var(--charcoal-border)] px-6 lg:px-12 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          {/* Search */}
          <div className="relative w-full md:w-72">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search collection..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[var(--charcoal)] border border-[var(--charcoal-border)] text-sm text-[var(--foreground)] placeholder-[var(--muted)] focus:border-[var(--gold)] focus:outline-none transition-colors duration-200"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            {/* Category filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs tracking-[0.12em] uppercase font-bold border transition-all duration-200 ${
                    selectedCategory === cat
                      ? "bg-[var(--gold)] border-[var(--gold)] text-[var(--background)]"
                      : "border-[var(--charcoal-border)] text-[var(--muted)] hover:border-[var(--gold)] hover:text-[var(--gold)]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(
                  e.target.value as "default" | "price-asc" | "price-desc"
                )
              }
              className="px-3 py-1.5 bg-[var(--charcoal)] border border-[var(--charcoal-border)] text-xs text-[var(--muted)] focus:border-[var(--gold)] focus:outline-none tracking-wide cursor-pointer"
            >
              <option value="default">Sort: Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        {/* Results count */}
        <p className="text-xs text-[var(--muted)] tracking-wider uppercase mb-8">
          {filtered.length} {filtered.length === 1 ? "piece" : "pieces"} found
          {selectedCategory !== "All" ? ` in ${selectedCategory}` : ""}
        </p>

        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <span className="text-5xl text-[var(--gold)] mb-6">◈</span>
            <h3 className="text-xl font-bold uppercase tracking-wide text-[var(--foreground)] mb-2">
              No pieces found
            </h3>
            <p className="text-[var(--muted)] text-sm">
              Try adjusting your filters or search terms.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
                setSortBy("default");
              }}
              className="mt-6 px-6 py-2.5 text-xs tracking-[0.15em] uppercase font-bold border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--background)] transition-all duration-200"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <div id={`product-${product.id}`} key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
