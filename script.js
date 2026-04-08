document.addEventListener('DOMContentLoaded', function () {

    var fadeElements = document.querySelectorAll('.fade-in');

    var observer = new IntersectionObserver(function (entries) {
        for (var i = 0; i < entries.length; i++) {
            if (entries[i].isIntersecting) {
                entries[i].target.classList.add('visible');
                observer.unobserve(entries[i].target);
            }
        }
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    });

    for (var i = 0; i < fadeElements.length; i++) {
        observer.observe(fadeElements[i]);
    }


    // Filter Tabs
    var filterButtons = document.querySelectorAll('.filter-tab');
    var productCards = document.querySelectorAll('.collection-grid .card');

    for (var i = 0; i < filterButtons.length; i++) {
        filterButtons[i].addEventListener('click', function () {
            for (var j = 0; j < filterButtons.length; j++) {
                filterButtons[j].classList.remove('active');
            }
            this.classList.add('active');

            var selectedFilter = this.getAttribute('data-filter');

            for (var k = 0; k < productCards.length; k++) {
                var card = productCards[k];
                var category = card.getAttribute('data-category');

                if (selectedFilter === 'all' || category === selectedFilter) {
                    card.classList.remove('hidden');
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(function (c) {
                        c.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                        c.style.opacity = '1';
                        c.style.transform = 'translateY(0)';
                    }, 10, card);
                } else {
                    card.classList.add('hidden');
                }
            }
        });
    }


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

    for (var i = 0; i < faqItems.length; i++) {
        faqItems[i].querySelector('.faq-question').addEventListener('click', function () {
            var thisItem = this.parentElement;
            var alreadyOpen = thisItem.classList.contains('open');

            for (var j = 0; j < faqItems.length; j++) {
                faqItems[j].classList.remove('open');
            }

            if (!alreadyOpen) {
                thisItem.classList.add('open');
            }
        });
    }


    // DummyJSON API
    var apiGrid = document.getElementById("product-grid");
    var loadingText = document.getElementById("loading");
    var allProducts = [];

    var apiUrls = [
        "https://dummyjson.com/products/category/womens-jewellery",
        "https://dummyjson.com/products/category/mens-watches",
        "https://dummyjson.com/products/category/womens-watches",
        "https://dummyjson.com/products/category/sunglasses"
    ];

    function makeStars(rating) {
        var stars = "";
        var fullStars = Math.floor(rating);
        for (var i = 0; i < fullStars; i++) {
            stars = stars + "★";
        }
        if (rating - fullStars >= 0.5) {
            stars = stars + "½";
        }
        var remaining = 5 - fullStars - (rating - fullStars >= 0.5 ? 1 : 0);
        for (var i = 0; i < remaining; i++) {
            stars = stars + "☆";
        }
        return stars;
    }

    function toINR(price) {
        var inr = Math.round(price * 83);
        return "₹ " + inr.toLocaleString("en-IN");
    }

    function renderProducts(products) {
        if (!apiGrid) return;

        if (products.length === 0) {
            apiGrid.innerHTML = '<p class="no-results">No products found.</p>';
            return;
        }

        var html = "";

        for (var i = 0; i < products.length; i++) {
            var item = products[i];
            var price = toINR(item.price);
            var stars = makeStars(item.rating);
            var ratingNum = Math.round(item.rating * 10) / 10;
            var categoryName = item.category.split("-").join(" ");

            var discountHTML = "";
            if (item.discountPercentage > 5) {
                discountHTML = '<span class="api-discount">-' + Math.round(item.discountPercentage) + '%</span>';
            }

            var stockHTML = "";
            var stockClass = "";
            if (item.availabilityStatus === "Low Stock") {
                stockHTML = '<span class="stock-badge">Few Left</span>';
                stockClass = " low-stock";
            }

            html = html + '<div class="card api-card fade-in' + stockClass + '">';
            html = html + discountHTML;
            html = html + stockHTML;
            html = html + '<img src="' + item.thumbnail + '" alt="' + item.title + '">';
            html = html + '<h3>' + item.title + '</h3>';
            html = html + '<div class="api-rating">' + stars + ' <span>' + ratingNum + '</span></div>';
            html = html + '<p class="api-price">' + price + '</p>';
            html = html + '<span class="api-category">' + categoryName + '</span>';
            html = html + '</div>';
        }

        apiGrid.innerHTML = html;

        var newCards = apiGrid.querySelectorAll('.fade-in');
        for (var i = 0; i < newCards.length; i++) {
            observer.observe(newCards[i]);
        }
    }

    var completedFetches = 0;

    function fetchCategory(url) {
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                for (var i = 0; i < data.products.length; i++) {
                    allProducts.push(data.products[i]);
                }

                completedFetches = completedFetches + 1;

                if (completedFetches === apiUrls.length) {
                    if (loadingText) loadingText.style.display = "none";
                    renderProducts(allProducts);
                }
            })
            .catch(function () {
                completedFetches = completedFetches + 1;
                if (completedFetches === apiUrls.length) {
                    if (loadingText) {
                        loadingText.innerText = "Failed to load some products.";
                    }
                    if (allProducts.length > 0) {
                        renderProducts(allProducts);
                    }
                }
            });
    }

    if (apiGrid) {
        for (var i = 0; i < apiUrls.length; i++) {
            fetchCategory(apiUrls[i]);
        }
    }


    // Search
    var searchInput = document.getElementById("searchInput");

    if (searchInput) {
        searchInput.addEventListener("input", function () {
            var value = searchInput.value.toLowerCase();
            var filtered = [];

            for (var i = 0; i < allProducts.length; i++) {
                var title = allProducts[i].title.toLowerCase();
                var category = allProducts[i].category.toLowerCase();

                if (title.indexOf(value) !== -1 || category.indexOf(value) !== -1) {
                    filtered.push(allProducts[i]);
                }
            }

            renderProducts(filtered);
        });
    }


    // Sort
    var sortSelect = document.getElementById("sortSelect");

    if (sortSelect) {
        sortSelect.addEventListener("change", function () {
            var value = sortSelect.value;

            var sorted = [];
            for (var i = 0; i < allProducts.length; i++) {
                sorted.push(allProducts[i]);
            }

            if (value === "low-high") {
                sorted.sort(function (a, b) {
                    return a.price - b.price;
                });
            } else if (value === "high-low") {
                sorted.sort(function (a, b) {
                    return b.price - a.price;
                });
            } else if (value === "rating") {
                sorted.sort(function (a, b) {
                    return b.rating - a.rating;
                });
            }

            renderProducts(sorted);
        });
    }

});
