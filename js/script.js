// Lucid Hills Real Estate Website JavaScript

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize loading screen
    initLoadingScreen();
    
    // Initialize all functionality
    initNavigation();
    initHeroAnimations();
    initSearchFunctionality();
    initPropertyFilters();
    initContactForm();
    initScrollAnimations();
    initMobileMenu();
    initImageLoading();
    initAdvancedAnimations();
    initCounters();
    initPropertySlider();
    initPremiumCards();
    initFeaturedPropertiesSlider();
    
    console.log('Lucid Hills website with advanced animations initialized!');
});

// Navigation Functionality
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar scroll effect with smooth transitions
    let isScrolled = false;
    
    function updateNavbar() {
        const shouldBeScrolled = window.scrollY > 50;
        
        if (shouldBeScrolled && !isScrolled) {
            navbar.classList.add('scrolled');
            isScrolled = true;
        } else if (!shouldBeScrolled && isScrolled) {
            navbar.classList.remove('scrolled');
            isScrolled = false;
        }
    }
    
    window.addEventListener('scroll', updateNavbar, { passive: true });
    
    // Initial check for page load
    updateNavbar();
}

// Hero Section Animations
function initHeroAnimations() {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const searchContainer = document.querySelector('.search-container');
    
    // Animate hero elements on load
    setTimeout(() => {
        if (heroTitle) heroTitle.classList.add('fade-in-up');
    }, 300);
    
    setTimeout(() => {
        if (heroSubtitle) heroSubtitle.classList.add('fade-in-up');
    }, 600);
    
    setTimeout(() => {
        if (searchContainer) searchContainer.classList.add('fade-in-up');
    }, 900);
}

// Search Functionality
function initSearchFunctionality() {
    const searchBtn = document.querySelector('.search-btn');
    const searchInput = document.querySelector('.search-field input');
    const filterSelects = document.querySelectorAll('.filter-select');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            performSearch();
        });
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    // Add change listeners to filter selects
    filterSelects.forEach(select => {
        select.addEventListener('change', function() {
            updateSearchFilters();
        });
    });
    
    function performSearch() {
        const searchQuery = searchInput ? searchInput.value.trim() : '';
        const propertyType = document.querySelector('select[name="property-type"]')?.value || '';
        const priceRange = document.querySelector('select[name="price-range"]')?.value || '';
        const bedrooms = document.querySelector('select[name="bedrooms"]')?.value || '';
        
        // Create search parameters
        const searchParams = {
            query: searchQuery,
            propertyType: propertyType,
            priceRange: priceRange,
            bedrooms: bedrooms
        };
        
        // Show loading state
        searchBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Searching...';
        searchBtn.disabled = true;
        
        // Simulate search (replace with actual API call)
        setTimeout(() => {
            console.log('Search performed with params:', searchParams);
            showSearchResults(searchParams);
            
            // Reset button
            searchBtn.innerHTML = '<i class="fas fa-search"></i> Search Properties';
            searchBtn.disabled = false;
        }, 1500);
    }
    
    function updateSearchFilters() {
        console.log('Filters updated');
        // Add filter update logic here
    }
    
    function showSearchResults(params) {
        // Scroll to properties section
        const propertiesSection = document.getElementById('properties');
        if (propertiesSection) {
            propertiesSection.scrollIntoView({ behavior: 'smooth' });
        }
        
        // Show results notification
        showNotification('Search completed! Showing properties matching your criteria.', 'success');
    }
}

// Property Filters and Interactions
function initPropertyFilters() {
    const propertyCards = document.querySelectorAll('.property-card');
    const viewDetailsButtons = document.querySelectorAll('.view-details-btn');
    const viewAllBtn = document.querySelector('.view-all-btn');
    
    // Property card interactions
    propertyCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        card.addEventListener('click', function() {
            const propertyTitle = this.querySelector('.property-title').textContent;
            showPropertyModal(propertyTitle);
        });
    });
    
    // View details button functionality
    viewDetailsButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const propertyCard = this.closest('.property-card');
            const propertyTitle = propertyCard.querySelector('.property-title').textContent;
            showPropertyDetails(propertyTitle);
        });
    });
    
    // View all properties button
    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', function() {
            showNotification('Redirecting to properties page...', 'info');
            // Add navigation logic here
        });
    }
    
    // Neighborhood explore buttons
    const exploreButtons = document.querySelectorAll('.explore-btn');
    exploreButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const neighborhoodCard = this.closest('.neighborhood-card');
            const neighborhoodName = neighborhoodCard.querySelector('.neighborhood-name').textContent;
            showNeighborhoodDetails(neighborhoodName);
        });
    });
    
    // Amenities enquire button
    const enquireBtn = document.querySelector('.enquire-btn');
    if (enquireBtn) {
        enquireBtn.addEventListener('click', function() {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
                showNotification('Scroll down to get in touch with our team!', 'info');
            }
        });
    }
}

// Property Modal Functions
function showPropertyModal(propertyTitle) {
    showNotification(`Opening details for: ${propertyTitle}`, 'info');
    // Add modal functionality here
}

function showPropertyDetails(propertyTitle) {
    console.log('Showing details for:', propertyTitle);
    showNotification(`Loading detailed information for: ${propertyTitle}`, 'info');
}

function showNeighborhoodDetails(neighborhoodName) {
    console.log('Exploring neighborhood:', neighborhoodName);
    showNotification(`Exploring ${neighborhoodName} neighborhood...`, 'info');
}

// Contact Form Functionality
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    const submitBtn = document.querySelector('.submit-btn');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmission(this);
        });
        
        // Add real-time validation
        const formInputs = contactForm.querySelectorAll('input, select, textarea');
        formInputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                clearFieldError(this);
            });
        });
    }
    
    function handleFormSubmission(form) {
        const formData = new FormData(form);
        const formObject = {};
        
        // Convert FormData to object
        for (let [key, value] of formData.entries()) {
            formObject[key] = value;
        }
        
        // Validate form
        if (!validateForm(form)) {
            showNotification('Please fill in all required fields correctly.', 'error');
            return;
        }
        
        // Show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            console.log('Form submitted:', formObject);
            showNotification('Thank you! Your message has been sent successfully. We will contact you soon.', 'success');
            form.reset();
            
            // Reset button
            submitBtn.innerHTML = 'Send Message';
            submitBtn.disabled = false;
        }, 2000);
    }
    
    function validateForm(form) {
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!validateField(field)) {
                isValid = false;
            }
        });
        
        return isValid;
    }
    
    function validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        
        // Clear previous errors
        clearFieldError(field);
        
        if (field.hasAttribute('required') && !value) {
            showFieldError(field, 'This field is required');
            isValid = false;
        } else if (field.type === 'email' && value && !isValidEmail(value)) {
            showFieldError(field, 'Please enter a valid email address');
            isValid = false;
        } else if (field.type === 'tel' && value && !isValidPhone(value)) {
            showFieldError(field, 'Please enter a valid phone number');
            isValid = false;
        }
        
        return isValid;
    }
    
    function showFieldError(field, message) {
        field.style.borderColor = '#e74c3c';
        
        let errorElement = field.parentNode.querySelector('.field-error');
        if (!errorElement) {
            errorElement = document.createElement('span');
            errorElement.className = 'field-error';
            errorElement.style.color = '#e74c3c';
            errorElement.style.fontSize = '0.85rem';
            errorElement.style.marginTop = '5px';
            errorElement.style.display = 'block';
            field.parentNode.appendChild(errorElement);
        }
        
        errorElement.textContent = message;
    }
    
    function clearFieldError(field) {
        field.style.borderColor = '';
        const errorElement = field.parentNode.querySelector('.field-error');
        if (errorElement) {
            errorElement.remove();
        }
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function isValidPhone(phone) {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
    }
}

// Scroll Animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.property-card, .neighborhood-card, .feature');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
    
    // Optimized parallax effect for hero section
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const heroHeight = hero ? hero.offsetHeight : 0;
        
        if (hero && scrolled < heroHeight) {
            const rate = scrolled * -0.3; // Reduced intensity for smoother effect
            hero.style.transform = `translate3d(0, ${rate}px, 0)`;
        }
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }, { passive: true });
}

// Mobile Menu Functionality
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
            <button class="notification-close">×</button>
        </div>
    `;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '90px',
        right: '20px',
        padding: '15px 20px',
        borderRadius: '8px',
        color: 'white',
        zIndex: '10000',
        minWidth: '300px',
        maxWidth: '400px',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease',
        boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
    });
    
    // Set background color based on type
    const colors = {
        success: '#27ae60',
        error: '#e74c3c',
        info: '#3498db',
        warning: '#f39c12'
    };
    notification.style.backgroundColor = colors[type] || colors.info;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', function() {
        closeNotification(notification);
    });
    
    // Auto close after 5 seconds
    setTimeout(() => {
        closeNotification(notification);
    }, 5000);
    
    function closeNotification(notification) {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }
}

function getNotificationIcon(type) {
    const icons = {
        success: 'check-circle',
        error: 'exclamation-circle',
        info: 'info-circle',
        warning: 'exclamation-triangle'
    };
    return icons[type] || icons.info;
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Loading Screen (if needed)
function showLoadingScreen() {
    const loadingScreen = document.createElement('div');
    loadingScreen.id = 'loading-screen';
    loadingScreen.innerHTML = `
        <div class="loading-content">
            <div class="loading-spinner"></div>
            <h3>Loading Lucid Hills...</h3>
        </div>
    `;
    
    Object.assign(loadingScreen.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'var(--navy-blue)',
        color: 'var(--off-white)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '99999'
    });
    
    document.body.appendChild(loadingScreen);
    
    return loadingScreen;
}

function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.remove();
        }, 500);
    }
}

// Initialize loading screen on page load
window.addEventListener('load', function() {
    hideLoadingScreen();
});

// Error Handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    showNotification('An unexpected error occurred. Please refresh the page.', 'error');
});

// Image Loading and Optimization
function initImageLoading() {
    const images = document.querySelectorAll('img');
    
    // Add loading class to all images initially
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
            this.parentElement.classList.remove('image-loading');
        });
        
        img.addEventListener('error', function() {
            console.warn('Failed to load image:', this.src);
            this.alt = 'Image not available';
            this.style.display = 'none';
        });
        
        // Add loading state if image hasn't loaded yet
        if (!img.complete) {
            img.parentElement.classList.add('image-loading');
        } else {
            img.classList.add('loaded');
        }
    });
    
    // Lazy loading for images (if supported)
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                }
            });
        });
        
        // Observe images with data-src attribute
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Loading Screen
function initLoadingScreen() {
    const loader = document.getElementById('pageLoader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('loaded');
            setTimeout(() => {
                loader.style.display = 'none';
            }, 800);
        }, 3000);
    }
}

// Advanced Animations
function initAdvancedAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.animate-on-scroll, .slide-in-left, .slide-in-right, .scale-in');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
    
    // Mouse parallax effect
    document.addEventListener('mousemove', (e) => {
        const mouseX = (e.clientX / window.innerWidth) * 100;
        const mouseY = (e.clientY / window.innerHeight) * 100;
        
        const parallaxElements = document.querySelectorAll('.mouse-parallax');
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            element.style.transform = `translate(${mouseX * speed}px, ${mouseY * speed}px)`;
        });
    });
}

// Counter Animation
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.target);
                const increment = target / 100;
                let current = 0;
                
                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        counter.textContent = Math.floor(current);
                        setTimeout(updateCounter, 20);
                    } else {
                        counter.textContent = target + '+';
                    }
                };
                
                updateCounter();
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.7 });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// Property Slider Functionality
function initPropertySlider() {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const indicators = document.querySelectorAll('.indicator');
    
    if (!slides.length) return;
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    // Show specific slide
    function showSlide(index) {
        // Hide all slides
        slides.forEach((slide, i) => {
            slide.classList.remove('active', 'prev');
            if (i === index) {
                slide.classList.add('active');
            } else if (i < index) {
                slide.classList.add('prev');
            }
        });
        
        // Update indicators
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
        
        currentSlide = index;
    }
    
    // Next slide
    function nextSlide() {
        const next = (currentSlide + 1) % totalSlides;
        showSlide(next);
    }
    
    // Previous slide
    function prevSlide() {
        const prev = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(prev);
    }
    
    // Event listeners for navigation buttons
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }
    
    // Event listeners for indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showSlide(index);
        });
    });
    
    // Auto-play slider
    let autoplayInterval;
    
    function startAutoplay() {
        autoplayInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }
    
    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }
    
    // Start autoplay
    startAutoplay();
    
    // Pause autoplay on hover
    const sliderContainer = document.querySelector('.slider-container');
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', stopAutoplay);
        sliderContainer.addEventListener('mouseleave', startAutoplay);
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });
    
    // Touch/swipe support for mobile
    let startX = 0;
    let startY = 0;
    
    if (sliderContainer) {
        sliderContainer.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        });
        
        sliderContainer.addEventListener('touchend', (e) => {
            if (!startX || !startY) return;
            
            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;
            
            const deltaX = startX - endX;
            const deltaY = startY - endY;
            
            // Horizontal swipe is more significant than vertical
            if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
                if (deltaX > 0) {
                    nextSlide(); // Swipe left - next slide
                } else {
                    prevSlide(); // Swipe right - previous slide
                }
            }
            
            startX = 0;
            startY = 0;
        });
    }
}

// Smooth Scroll Enhancement
function enhancedSmoothScroll(targetId) {
    const target = document.getElementById(targetId);
    if (target) {
        const offsetTop = target.offsetTop - 70;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Premium Cards Functionality
function initPremiumCards() {
    const premiumCards = document.querySelectorAll('.premium-card');
    
    if (premiumCards.length === 0) {
        console.log('No premium cards found');
        return;
    }
    
    premiumCards.forEach((card, index) => {
        // Add hover interactions
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
        
        // Add click interaction
        card.addEventListener('click', function() {
            const cardTitle = this.querySelector('h4');
            if (cardTitle) {
                console.log(`Premium amenity selected: ${cardTitle.textContent}`);
                
                // Add selection animation
                this.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            }
        });
    });
    
    console.log(`Initialized ${premiumCards.length} premium cards`);
}

// Properties Slider Functionality
function initPropertiesSlider() {
    const track = document.querySelector('.properties-track');
    const prevBtn = document.querySelector('.properties-prev');
    const nextBtn = document.querySelector('.properties-next');
    
    if (!track || !prevBtn || !nextBtn) return;
    
    const cards = track.querySelectorAll('.property-card');
    const totalCards = cards.length;
    let currentIndex = 0;
    let cardsPerView = 3;
    
    // Update cards per view based on screen size
    function updateCardsPerView() {
        if (window.innerWidth <= 768) {
            cardsPerView = 1;
        } else if (window.innerWidth <= 992) {
            cardsPerView = 2;
        } else {
            cardsPerView = 3;
        }
    }
    
    // Update slider position
    function updateSliderPosition() {
        const cardWidth = cards[0].offsetWidth;
        const gap = 30;
        const offset = -(currentIndex * (cardWidth + gap));
        track.style.transform = `translateX(${offset}px)`;
        
        // Update button states
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= totalCards - cardsPerView;
        
        prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
        nextBtn.style.opacity = currentIndex >= totalCards - cardsPerView ? '0.5' : '1';
    }
    
    // Next slide
    nextBtn.addEventListener('click', () => {
        if (currentIndex < totalCards - cardsPerView) {
            currentIndex++;
            updateSliderPosition();
        }
    });
    
    // Previous slide
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSliderPosition();
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
        updateCardsPerView();
        currentIndex = Math.min(currentIndex, Math.max(0, totalCards - cardsPerView));
        updateSliderPosition();
    });
    
    // Initialize
    updateCardsPerView();
    updateSliderPosition();
    
    console.log(`Properties slider initialized with ${totalCards} cards`);
}

// Initialize properties slider
document.addEventListener('DOMContentLoaded', function() {
    initPropertiesSlider();
    initBackToTop();
    initTestimonialsSlider();
});

// Back to Top Button Functionality
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (!backToTopBtn) return;
    
    // Show/hide button based on scroll position
    function toggleBackToTop() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    }
    
    // Scroll to top when clicked
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Listen for scroll events
    window.addEventListener('scroll', toggleBackToTop, { passive: true });
    
    // Initial check
    toggleBackToTop();
}

// Featured Properties Slider Functionality
function initFeaturedPropertiesSlider() {
    const nextBtn = document.querySelector('.slider-next');
    const prevBtn = document.querySelector('.slider-prev');
    const sliderTrack = document.querySelector('.slider-track');
    const sliderSection = document.querySelector('.featured-slider-section');
    
    if (!nextBtn || !prevBtn || !sliderTrack) {
        console.log('Slider elements not found');
        return;
    }
    
    let isAnimating = false;
    let autoPlayInterval = null;
    let userInteracting = false;
    
    function moveNext() {
        if (isAnimating) return;
        isAnimating = true;
        
        const items = document.querySelectorAll('.slider-item');
        if (items.length > 0) {
            sliderTrack.appendChild(items[0]);
        }
        
        setTimeout(() => {
            isAnimating = false;
        }, 500);
    }
    
    function movePrev() {
        if (isAnimating) return;
        isAnimating = true;
        
        const items = document.querySelectorAll('.slider-item');
        if (items.length > 0) {
            sliderTrack.prepend(items[items.length - 1]);
        }
        
        setTimeout(() => {
            isAnimating = false;
        }, 500);
    }
    
    function startAutoPlay() {
        if (userInteracting) return;
        
        stopAutoPlay();
        autoPlayInterval = setInterval(() => {
            if (!userInteracting) {
                moveNext();
            }
        }, 3000); // Reduced from 5000ms to 3000ms (3 seconds)
    }
    
    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
            autoPlayInterval = null;
        }
    }
    
    // Next button click
    nextBtn.addEventListener('click', function(e) {
        e.preventDefault();
        moveNext();
        userInteracting = true;
        stopAutoPlay();
        setTimeout(() => {
            userInteracting = false;
            startAutoPlay();
        }, 8000); // Resume after 8 seconds of no interaction
    });
    
    // Previous button click
    prevBtn.addEventListener('click', function(e) {
        e.preventDefault();
        movePrev();
        userInteracting = true;
        stopAutoPlay();
        setTimeout(() => {
            userInteracting = false;
            startAutoPlay();
        }, 8000); // Resume after 8 seconds of no interaction
    });
    
    // Stop auto-play when user is in the section
    if (sliderSection) {
        sliderSection.addEventListener('mouseenter', function() {
            userInteracting = true;
            stopAutoPlay();
        });
        
        sliderSection.addEventListener('mouseleave', function() {
            userInteracting = false;
            startAutoPlay();
        });
        
        // Also stop on touch/click anywhere in the section
        sliderSection.addEventListener('touchstart', function() {
            userInteracting = true;
            stopAutoPlay();
            setTimeout(() => {
                userInteracting = false;
                startAutoPlay();
            }, 8000);
        });
    }
    
    // Start auto-play
    startAutoPlay();
    
    console.log('Featured Properties Slider initialized successfully!');
}

// ========================================
// TESTIMONIALS SLIDER
// ========================================
function initTestimonialsSlider() {
    const track = document.querySelector('.testimonials-track');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    const cards = document.querySelectorAll('.testimonial-card');
    
    if (!track || !prevBtn || !nextBtn || cards.length === 0) return;
    
    let currentIndex = 0;
    let cardsToShow = 4;
    let isAnimating = false;
    
    // Determine cards to show based on screen width
    function updateCardsToShow() {
        if (window.innerWidth <= 480) {
            cardsToShow = 1;
        } else if (window.innerWidth <= 768) {
            cardsToShow = 2;
        } else if (window.innerWidth <= 1200) {
            cardsToShow = 3;
        } else {
            cardsToShow = 4;
        }
    }
    
    // Update slider position
    function updateSlider() {
        const cardWidth = cards[0].offsetWidth;
        const gap = 30;
        const offset = -(currentIndex * (cardWidth + gap));
        track.style.transform = `translateX(${offset}px)`;
    }
    
    // Next button
    function moveNext() {
        if (isAnimating) return;
        isAnimating = true;
        
        const maxIndex = cards.length - cardsToShow;
        if (currentIndex < maxIndex) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop back to start
        }
        updateSlider();
        
        setTimeout(() => {
            isAnimating = false;
        }, 500);
    }
    
    // Previous button
    function movePrev() {
        if (isAnimating) return;
        isAnimating = true;
        
        const maxIndex = cards.length - cardsToShow;
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = maxIndex; // Loop to end
        }
        updateSlider();
        
        setTimeout(() => {
            isAnimating = false;
        }, 500);
    }
    
    // Event listeners
    nextBtn.addEventListener('click', moveNext);
    prevBtn.addEventListener('click', movePrev);
    
    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            updateCardsToShow();
            currentIndex = 0;
            updateSlider();
        }, 250);
    });
    
    // Initialize
    updateCardsToShow();
    updateSlider();
    
    console.log('Testimonials slider initialized successfully!');
}

// ========================================
// COUNTRY CODE SELECTOR - RESPONSIVE
// ========================================
function updateCountryCodeDisplay() {
    const select = document.querySelector('.country-code-select');
    if (!select) return;
    
    const isMobile = window.innerWidth <= 768;
    const options = select.querySelectorAll('option');
    
    options.forEach(option => {
        const flag = option.getAttribute('data-flag');
        const name = option.getAttribute('data-name');
        const code = option.value;
        
        if (isMobile) {
            // Mobile: Show country name and code
            option.textContent = `${name} ${code}`;
        } else {
            // Desktop: Show flag and code
            option.textContent = `${flag} ${code}`;
        }
    });
}

// Initialize and update on resize
if (document.querySelector('.country-code-select')) {
    updateCountryCodeDisplay();
    
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            updateCountryCodeDisplay();
        }, 250);
    });
}

// Performance Monitoring
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(() => {
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            console.log(`Page loaded in ${loadTime}ms`);
        }, 0);
    });
}