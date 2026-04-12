# Ornamenta

Ornamenta is a modern jewellery brand that blends bold design with a refined, masculine aesthetic, offering a seamless platform to explore, search, and discover premium pieces with precision and ease.

## 🌐 Live Demo

🔗 [https://nottkushagra.github.io/Ornamenta/](https://nottkushagra.github.io/Ornamenta/)

## ✨ Features

- **Multi-Page Website** — Landing, Home, Collections, About, and Contact pages
- **API Integration** — Fetches real product data from [DummyJSON API](https://dummyjson.com) across 4 categories
- **Search with Debouncing** — Search products by title or category with a 300ms debounce delay
- **Category Filter** — Dropdown filter for jewelry, watches, and sunglasses
- **Sort** — Sort by price (low/high) or top-rated
- **Static Filter Tabs** — Filter handcrafted collection by rings, chains, pendants, bracelets, and earrings
- **Favorites** — Heart button to save favorite products (persisted via localStorage)
- **Dark / Light Mode** — Toggle theme with preference saved in localStorage
- **Loading Spinner** — Animated spinner shown while API products load
- **FAQ Accordion** — Expandable Q&A section on the Contact page
- **Newsletter Signup** — Email subscription with inline confirmation
- **Contact Form** — Form with validation and success message
- **Heritage Collection** — Exclusive Indian-themed jewelry section (Roots & Regalia)
- **Responsive Design** — Fully responsive across mobile, tablet, and desktop
- **Fade-in Animations** — Scroll-triggered entrance animations using IntersectionObserver

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Structure and semantic markup |
| CSS3 | Styling, animations, responsive design |
| JavaScript (ES5/ES6) | Logic, DOM manipulation, API calls |
| [DummyJSON API](https://dummyjson.com) | Product data source |
| Google Fonts | Typography (Playfair Display, Inter) |
| GitHub Pages | Deployment |

## 📁 Project Structure

```
Ornamenta/
├── index.html          Landing page
├── home.html           Home page with features & bestsellers
├── collection.html     Collections with API products & static catalog
├── about.html          Brand story & values
├── contact.html        Contact form, info & FAQ
├── style.css           Global styles & light/dark mode
├── home.css            Home page specific styles
├── collection.css      Collection page specific styles
├── about.css           About page specific styles
├── contact.css         Contact page specific styles
├── script.js           All JavaScript logic
├── images/             Product images (40 items)
└── README.md
```

## 🚀 Higher-Order Functions Used

| Function | HOF Used | Purpose |
|---|---|---|
| `makeStars()` | `Array().fill().join()` | Build star rating string from numeric rating |
| `renderProducts()` | `.map().join()` | Transform product data into HTML cards |
| `fetchCategory()` | `.concat()` | Merge products from multiple API endpoints |
| Search | `.filter().includes()` | Filter products matching search query |
| Category Filter | `.filter()` | Filter by selected category |
| Sort | `.slice().sort()` | Sort products by price or rating |
| `toggleFavorite()` | `.filter()` | Remove product from favorites array |
| `isFavorited()` | `.find()` | Check if product is in favorites |
| `getFavoritesCount()` | `.reduce()` | Count total favorited items |

## ⭐ Bonus Features Implemented

- ✅ **Debouncing** — Applied to search input (300ms delay) to prevent filtering on every keystroke
- ✅ **Loading Indicator** — Animated CSS spinner shown while fetching API data
- ✅ **Local Storage** — Used for dark/light theme preference and saved favorites

## 💻 How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/nottkushagra/Ornamenta.git
   ```

2. Open `index.html` in your browser — no build step needed.

## 📱 Responsive Breakpoints

- **Desktop** — Full layout with spacious padding
- **Tablet / Mobile (≤768px)** — Stacked navigation, adjusted padding, single-column grids

## 🎨 Design Choices

- **Dark-first design** with a subtle green-black gradient palette
- **Playfair Display** for headings (elegant serif) + **Inter** for body text (clean sans-serif)
- **Minimal color palette** — `#0a0f0a` (background), `#a0a0a0` (accent), `#d4af37` (gold for API products)
- **Micro-interactions** — Hover lifts on cards, underline animations on nav links, grayscale-to-color on images

---

Built by **Kushagra** • 2026
