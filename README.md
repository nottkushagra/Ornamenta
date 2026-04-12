# Ornamenta

Ornamenta is a modern jewellery brand that blends bold design with a refined, masculine aesthetic, offering a seamless platform to explore, search, and discover premium pieces with precision and ease.
A masculine/unisex jewelry website I built as my web development project. The idea was to create something that actually looks and feels like a real brand — not just a basic HTML page with some buttons.

Ornamenta lets you browse handcrafted jewelry, search through API-fetched products, save favorites, toggle dark/light mode, and more.

**Live Site:** [https://nottkushagra.github.io/Ornamenta/](https://nottkushagra.github.io/Ornamenta/)

---

## What It Does

- 5 pages — Landing, Home, Collections, About, Contact
- Pulls real product data from [DummyJSON API](https://dummyjson.com) (jewelry, watches, sunglasses)
- Search bar with **debouncing** so it doesn't filter on every single keystroke
- Filter by category + sort by price or rating
- Static collection with tab filters (rings, chains, pendants, bracelets, earrings)
- Favorite/heart button that saves to localStorage
- Dark and light mode (also saved in localStorage)
- Animated loading spinner while API data loads
- FAQ accordion, newsletter signup, contact form
- Heritage section with Indian-themed jewelry (Roots & Regalia)
- Fully responsive — works on phone, tablet, desktop
- Scroll-triggered fade-in animations

## Tech Used

- HTML, CSS, JavaScript (vanilla, no frameworks)
- [DummyJSON API](https://dummyjson.com) for product data
- Google Fonts (Playfair Display + Inter)
- Deployed on GitHub Pages

## Project Structure

```
Ornamenta/
├── index.html          # Landing page
├── home.html           # Home — features, bestsellers, newsletter
├── collection.html     # Collections — API products + static catalog
├── about.html          # Brand story and values
├── contact.html        # Contact form, info, FAQ
├── style.css           # Global styles + dark/light mode
├── home.css            # Home page styles
├── collection.css      # Collection page styles
├── about.css           # About page styles
├── contact.css         # Contact page styles
├── script.js           # All the JS logic
├── images/             # 40 product images
└── README.md
```

## Higher-Order Functions I Used

This was a key requirement for the project, so here's where I used them:

| Where | HOF | What it does |
|---|---|---|
| Star ratings | `Array().fill().join()` | Turns a number like 4.5 into ★★★★½☆ |
| Rendering cards | `.map().join()` | Converts product data array into HTML |
| Merging API data | `.concat()` | Combines products from 4 different API categories |
| Search | `.filter().includes()` | Filters products that match the search query |
| Category filter | `.filter()` | Keeps only products from the selected category |
| Sorting | `.slice().sort()` | Sorts products by price or rating without mutating original |
| Remove favorite | `.filter()` | Removes a product ID from the favorites array |
| Check favorite | `.find()` | Checks if a product is already favorited |
| Count favorites | `.reduce()` | Counts total favorited items |

## Bonus Features

- **Debouncing** — search input waits 300ms before filtering (avoids unnecessary work)
- **Loading Spinner** — animated spinner while API products are being fetched
- **localStorage** — saves theme preference and favorite items across sessions

## How to Run

Just clone it and open `index.html`:

```bash
git clone https://github.com/nottkushagra/Ornamenta.git
```

No npm, no build tools, nothing to install. It's plain HTML/CSS/JS.

---

Made by Kushagra · 2026
