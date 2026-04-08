document.addEventListener('DOMContentLoaded', function () {

    // Fade-in Observer
    var fadeElements = document.querySelectorAll('.fade-in');

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    });

    fadeElements.forEach(function (el) {
        observer.observe(el);
    });


    // Dark / Light Mode Toggle
    var themeToggle = document.getElementById('themeToggle');
    var savedTheme = localStorage.getItem('ornamenta-theme') || 'dark';

    document.body.setAttribute('data-theme', savedTheme);
    if (themeToggle) {
        themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

        themeToggle.addEventListener('click', function () {
            var current = document.body.getAttribute('data-theme');
            var next = current === 'dark' ? 'light' : 'dark';

            document.body.setAttribute('data-theme', next);
            localStorage.setItem('ornamenta-theme', next);
            themeToggle.textContent = next === 'dark' ? '☀️' : '🌙';
        });
    }


    // Filter Tabs (static collection cards)
    var filterButtons = document.querySelectorAll('.filter-tab');
    var productCards = document.querySelectorAll('.collection-grid .card');

    filterButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            filterButtons.forEach(function (b) {
                b.classList.remove('active');
            });
            btn.classList.add('active');

            var selectedFilter = btn.getAttribute('data-filter');

            productCards.forEach(function (card) {
                var category = card.getAttribute('data-category');

                if (selectedFilter === 'all' || category === selectedFilter) {
                    card.classList.remove('hidden');
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(function () {
                        card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });


    // Contact Form
    var contactForm = document.getElementById('contactForm');
    var successMsg = document.getElementById('formSuccess');

    if (contactForm && successMsg) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            successMsg.classList.add('show');
            contactForm.reset();

            setTimeout(function () {
                successMsg.classList.remove('show');
            }, 4000);
        });
    }


    // Newsletter
    var newsletterForm = document.getElementById('newsletterForm');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var emailInput = newsletterForm.querySelector('input');
            emailInput.value = '';
            emailInput.placeholder = "You're in! ✦";

            setTimeout(function () {
                emailInput.placeholder = 'Your email address';
            }, 3000);
        });
    }


    // FAQ Accordion
    var faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(function (item) {
        item.querySelector('.faq-question').addEventListener('click', function () {
            var alreadyOpen = item.classList.contains('open');

            faqItems.forEach(function (faq) {
                faq.classList.remove('open');
            });

            if (!alreadyOpen) {
                item.classList.add('open');
            }
        });
    });


    // DummyJSON API
    var apiGrid = document.getElementById("product-grid");
    var loadingText = document.getElementById("loading");
    var allProducts = [];
    var favorites = JSON.parse(localStorage.getItem('ornamenta-favorites') || '[]');

    var apiUrls = [
        "https://dummyjson.com/products/category/womens-jewellery",
        "https://dummyjson.com/products/category/mens-watches",
        "https://dummyjson.com/products/category/womens-watches",
        "https://dummyjson.com/products/category/sunglasses"
    ];

    // Higher-Order Function: .map() to build star string using Array
    function makeStars(rating) {
        var fullStars = Math.floor(rating);
        var hasHalf = (rating - fullStars) >= 0.5;
        var emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

        var stars = Array(fullStars).fill('★').join('')
                  + (hasHalf ? '½' : '')
                  + Array(emptyStars).fill('☆').join('');
        return stars;
    }

    function toINR(price) {
        var inr = Math.round(price * 83);
        return "₹ " + inr.toLocaleString("en-IN");
    }

    function isFavorited(productId) {
        return favorites.find(function (id) { return id === productId; }) !== undefined;
    }

    function toggleFavorite(productId) {
        if (isFavorited(productId)) {
            favorites = favorites.filter(function (id) { return id !== productId; });
        } else {
            favorites.push(productId);
        }
        localStorage.setItem('ornamenta-favorites', JSON.stringify(favorites));
    }

    // Higher-Order Function: .map().join() to render product cards
    function renderProducts(products) {
        if (!apiGrid) return;

        if (products.length === 0) {
            apiGrid.innerHTML = '<p class="no-results">No products found.</p>';
            return;
        }

        var html = products.map(function (item) {
            var price = toINR(item.price);
            var stars = makeStars(item.rating);
            var ratingNum = (Math.round(item.rating * 10) / 10).toFixed(1);
            var categoryName = item.category.split("-").join(" ");
            var favClass = isFavorited(item.id) ? ' favorited' : '';

            var discountHTML = item.discountPercentage > 5
                ? '<span class="api-discount">-' + Math.round(item.discountPercentage) + '%</span>'
                : '';

            var stockHTML = '';
            var stockClass = '';
            if (item.availabilityStatus === "Low Stock") {
                stockHTML = '<span class="stock-badge">Few Left</span>';
                stockClass = ' low-stock';
            }

            return '<div class="card api-card fade-in' + stockClass + '">'
                + '<button class="fav-btn' + favClass + '" data-id="' + item.id + '" title="Add to favorites">♥</button>'
                + discountHTML
                + stockHTML
                + '<img src="' + item.thumbnail + '" alt="' + item.title + '">'
                + '<h3>' + item.title + '</h3>'
                + '<div class="api-rating">' + stars + ' <span>' + ratingNum + '</span></div>'
                + '<p class="api-price">' + price + '</p>'
                + '<span class="api-category">' + categoryName + '</span>'
                + '</div>';
        }).join("");

        apiGrid.innerHTML = html;

        // Reapply fade-in observer to new cards
        apiGrid.querySelectorAll('.fade-in').forEach(function (card) {
            observer.observe(card);
        });

        // Attach favorite button click handlers
        apiGrid.querySelectorAll('.fav-btn').forEach(function (btn) {
            btn.addEventListener('click', function () {
                var productId = Number(btn.getAttribute('data-id'));
                toggleFavorite(productId);
                btn.classList.toggle('favorited');
            });
        });
    }

    // Fetch all categories and merge using .concat()
    var completedFetches = 0;

    function fetchCategory(url) {
        fetch(url)
            .then(function (response) { return response.json(); })
            .then(function (data) {
                allProducts = allProducts.concat(data.products);
                completedFetches++;

                if (completedFetches === apiUrls.length) {
                    if (loadingText) loadingText.style.display = "none";
                    renderProducts(allProducts);
                }
            })
            .catch(function () {
                completedFetches++;
                if (completedFetches === apiUrls.length) {
                    if (loadingText) loadingText.innerText = "Failed to load some products.";
                    if (allProducts.length > 0) renderProducts(allProducts);
                }
            });
    }

    if (apiGrid) {
        apiUrls.forEach(function (url) {
            fetchCategory(url);
        });
    }


    // Search — Higher-Order Function: .filter() with .includes()
    var searchInput = document.getElementById("searchInput");

    if (searchInput) {
        searchInput.addEventListener("input", function () {
            var query = searchInput.value.toLowerCase();

            var filtered = allProducts.filter(function (item) {
                return item.title.toLowerCase().includes(query)
                    || item.category.toLowerCase().includes(query);
            });

            applySort(filtered);
        });
    }


    // Category Filter Dropdown — Higher-Order Function: .filter()
    var categoryFilter = document.getElementById("categoryFilter");

    if (categoryFilter) {
        categoryFilter.addEventListener("change", function () {
            applyFilters();
        });
    }


    // Sort — Higher-Order Function: .slice().sort()
    var sortSelect = document.getElementById("sortSelect");

    if (sortSelect) {
        sortSelect.addEventListener("change", function () {
            applyFilters();
        });
    }

    // Combined filter + sort pipeline using HOFs
    function applyFilters() {
        var query = searchInput ? searchInput.value.toLowerCase() : '';
        var category = categoryFilter ? categoryFilter.value : 'all';

        // Step 1: .filter() by search query
        var results = allProducts.filter(function (item) {
            return item.title.toLowerCase().includes(query)
                || item.category.toLowerCase().includes(query);
        });

        // Step 2: .filter() by category
        if (category !== 'all') {
            results = results.filter(function (item) {
                return item.category === category;
            });
        }

        // Step 3: apply sort
        applySort(results);
    }

    function applySort(products) {
        var value = sortSelect ? sortSelect.value : 'default';

        // .slice() to copy, then .sort()
        var sorted = products.slice().sort(function (a, b) {
            if (value === "low-high") return a.price - b.price;
            if (value === "high-low") return b.price - a.price;
            if (value === "rating") return b.rating - a.rating;
            return 0;
        });

        renderProducts(sorted);
    }

    // Favorites count using .reduce()
    function getFavoritesCount() {
        return favorites.reduce(function (count) {
            return count + 1;
        }, 0);
    }

});
