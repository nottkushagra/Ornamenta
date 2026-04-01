// wait for the page to fully load before doing anything
document.addEventListener('DOMContentLoaded', function () {

    // --- Scroll fade-in effect ---
    // elements with class 'fade-in' will appear as user scrolls down
    var fadeElements = document.querySelectorAll('.fade-in');

    var observer = new IntersectionObserver(function (entries) {
        for (var i = 0; i < entries.length; i++) {
            if (entries[i].isIntersecting) {
                entries[i].target.classList.add('visible');
                observer.unobserve(entries[i].target); // stop watching once visible
            }
        }
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    });

    // observe each fade-in element
    for (var i = 0; i < fadeElements.length; i++) {
        observer.observe(fadeElements[i]);
    }


    // --- Collection page filter tabs ---
    var filterButtons = document.querySelectorAll('.filter-tab');
    var productCards = document.querySelectorAll('.collection-grid .card');

    filterButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            // remove active from all tabs first
            filterButtons.forEach(function (b) {
                b.classList.remove('active');
            });
            // set clicked one as active
            btn.classList.add('active');

            var selectedFilter = btn.getAttribute('data-filter');

            // show/hide cards based on category
            productCards.forEach(function (card) {
                var category = card.getAttribute('data-category');

                if (selectedFilter === 'all' || category === selectedFilter) {
                    card.classList.remove('hidden');
                    // small animation when cards reappear
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


    // --- Contact form handling ---
    var contactForm = document.getElementById('contactForm');
    var successMsg = document.getElementById('formSuccess');

    if (contactForm && successMsg) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            successMsg.classList.add('show');
            contactForm.reset();

            // hide success message after 4 seconds
            setTimeout(function () {
                successMsg.classList.remove('show');
            }, 4000);
        });
    }


    // --- Newsletter signup ---
    var newsletterForm = document.getElementById('newsletterForm');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var emailInput = newsletterForm.querySelector('input');
            emailInput.value = '';
            emailInput.placeholder = "You're in! ✦";

            // reset placeholder after a bit
            setTimeout(function () {
                emailInput.placeholder = 'Your email address';
            }, 3000);
        });
    }


    // --- FAQ accordion ---
    var faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(function (item) {
        var questionBtn = item.querySelector('.faq-question');

        questionBtn.addEventListener('click', function () {
            var alreadyOpen = item.classList.contains('open');

            // close all FAQ items first
            faqItems.forEach(function (faq) {
                faq.classList.remove('open');
            });

            // if it wasn't open, open it now
            if (!alreadyOpen) {
                item.classList.add('open');
            }
        });
    });

});
