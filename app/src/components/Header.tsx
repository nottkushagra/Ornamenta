"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Collection", href: "/collection" },
  { label: "About", href: "#about" },
  { label: "Craft", href: "#craft" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--charcoal-border)] bg-[var(--background)]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 border border-[var(--gold)] rotate-45 flex items-center justify-center group-hover:bg-[var(--gold)] transition-colors duration-300">
            <div className="w-2.5 h-2.5 bg-[var(--gold)] group-hover:bg-[var(--background)] rotate-0 transition-colors duration-300" />
          </div>
          <span className="text-xl font-bold tracking-[0.15em] text-[var(--foreground)] uppercase">
            Ornamenta
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm tracking-[0.12em] uppercase text-[var(--muted)] hover:text-[var(--gold)] transition-colors duration-200 font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/collection"
            className="px-5 py-2 text-xs tracking-[0.15em] uppercase font-bold bg-[var(--gold)] text-[var(--background)] hover:bg-[var(--gold-light)] transition-colors duration-200"
          >
            Shop Now
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span
            className={`block w-6 h-0.5 bg-[var(--foreground)] transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[var(--foreground)] transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[var(--foreground)] transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--charcoal)] border-t border-[var(--charcoal-border)]">
          <nav className="flex flex-col px-6 py-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm tracking-[0.12em] uppercase text-[var(--muted)] hover:text-[var(--gold)] transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/collection"
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-5 py-2.5 text-xs tracking-[0.15em] uppercase font-bold bg-[var(--gold)] text-[var(--background)] text-center hover:bg-[var(--gold-light)] transition-colors duration-200"
            >
              Shop Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
