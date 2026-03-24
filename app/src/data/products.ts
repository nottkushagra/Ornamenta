export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  material: string;
  description: string;
  badge?: string;
  featured?: boolean;
}

export const categories = [
  "All",
  "Rings",
  "Bracelets",
  "Necklaces",
  "Cufflinks",
  "Pendants",
  "Chains",
];

export const products: Product[] = [
  {
    id: "1",
    name: "Obsidian Signet Ring",
    category: "Rings",
    price: 1290,
    material: "18K Black Gold",
    description:
      "A bold signet ring crafted from 18K black gold with a hand-engraved geometric crest. A statement of authority and refined taste.",
    badge: "Bestseller",
    featured: true,
  },
  {
    id: "2",
    name: "Forge Titan Bracelet",
    category: "Bracelets",
    price: 890,
    material: "Sterling Silver",
    description:
      "Heavy-link sterling silver bracelet with a matte brushed finish. Engineered for those who wear strength on their wrist.",
    badge: "New",
    featured: true,
  },
  {
    id: "3",
    name: "Sovereign Chain",
    category: "Chains",
    price: 2150,
    material: "22K Gold",
    description:
      "A solid 22K gold Cuban link chain, each link precision-cut and hand-polished to a mirror shine. Uncompromising luxury.",
    featured: true,
  },
  {
    id: "4",
    name: "Eclipse Cufflinks",
    category: "Cufflinks",
    price: 420,
    material: "Platinum & Onyx",
    description:
      "Platinum cufflinks set with natural black onyx stones. The perfect emblem of boardroom power.",
    badge: "New",
  },
  {
    id: "5",
    name: "Apex Pendant",
    category: "Pendants",
    price: 680,
    material: "18K Gold",
    description:
      "An angular 18K gold pendant inspired by the geometry of mountain peaks. Sharp lines, timeless form.",
  },
  {
    id: "6",
    name: "Iron Cross Ring",
    category: "Rings",
    price: 750,
    material: "Tungsten Carbide",
    description:
      "Tungsten carbide ring with a beveled edge and matte finish. Virtually indestructible — built to last a lifetime.",
  },
  {
    id: "7",
    name: "Meridian Necklace",
    category: "Necklaces",
    price: 1480,
    material: "White Gold & Diamond",
    description:
      "A sleek white gold necklace with a single conflict-free diamond set in a geometric bezel. Quiet confidence.",
    badge: "Limited",
    featured: true,
  },
  {
    id: "8",
    name: "Bastion Cuff",
    category: "Bracelets",
    price: 560,
    material: "Titanium",
    description:
      "Aerospace-grade titanium cuff with a hammered texture that catches the light. Lightweight yet formidable.",
  },
  {
    id: "9",
    name: "Monolith Band",
    category: "Rings",
    price: 390,
    material: "Matte Black Titanium",
    description:
      "A pure matte black titanium band — no embellishment needed. Power is in the simplicity.",
  },
  {
    id: "10",
    name: "Raptor Chain",
    category: "Chains",
    price: 1750,
    material: "Sterling Silver",
    description:
      "Bold figaro chain in sterling silver with a rhodium finish for lasting brilliance. Substantial weight, serious presence.",
  },
  {
    id: "11",
    name: "Crest Pendant",
    category: "Pendants",
    price: 820,
    material: "18K Gold & Ruby",
    description:
      "Shield-shaped 18K gold pendant with a deep red ruby centerpiece. Heritage meets modern edge.",
    badge: "Limited",
  },
  {
    id: "12",
    name: "Vanguard Bracelet",
    category: "Bracelets",
    price: 1100,
    material: "18K Gold",
    description:
      "A solid 18K gold rope bracelet with diamond-cut links. The mark of someone who has arrived.",
  },
];

export const featuredProducts = products.filter((p) => p.featured);
