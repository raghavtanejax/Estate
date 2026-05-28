import './style.css';
import { getProperties, formatPrice } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    // Scroll Animation Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const observeElements = () => {
        document.querySelectorAll('.animate-on-scroll:not(.is-visible)').forEach((el) => {
            observer.observe(el);
        });
    };
    observeElements();

    // Sticky Header
    const header = document.getElementById('main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('bg-white', 'shadow-md');
                header.classList.remove('bg-transparent', 'py-6');
                header.classList.add('py-4');
                const links = header.querySelectorAll('a, button, span');
                links.forEach(link => {
                    if(!link.classList.contains('bg-primary') && !link.classList.contains('border-white') && !link.closest('#brand-logo')) {
                        link.classList.remove('text-white');
                        link.classList.add('text-black');
                    }
                });
                const logo = header.querySelector('#brand-logo span');
                if(logo && window.location.pathname === '/') {
                    logo.classList.remove('text-white');
                    logo.classList.add('text-black');
                }
            } else {
                header.classList.remove('bg-white', 'shadow-md', 'py-4');
                header.classList.add('bg-transparent', 'py-6');
                const links = header.querySelectorAll('a, button, span');
                links.forEach(link => {
                    if(!link.classList.contains('bg-primary') && window.location.pathname === '/') {
                        link.classList.remove('text-black');
                        link.classList.add('text-white');
                    }
                });
            }
        });
    }

    // Dynamic Rendering
    const properties = getProperties();
    
    function createPropertyCard(property, delay) {
        let priceDisplay = formatPrice(property.price);
        if(isNaN(property.price) || property.price === 0) priceDisplay = "Contact Agent";
        
        return `
            <a href="#" class="group block animate-on-scroll" style="transition-delay: ${delay}ms;">
                <div class="relative overflow-hidden aspect-[4/3] rounded-sm mb-4 bg-gray-900">
                    <img src="${property.image}" alt="${property.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                    <div class="absolute top-4 right-4 bg-primary text-on-primary text-xs font-semibold px-3 py-1 uppercase tracking-wider rounded-sm shadow-md">${property.status}</div>
                </div>
                <h3 class="text-xl font-display mb-1 text-on-background group-hover:text-primary transition-colors">${property.title}</h3>
                <p class="text-on-surface-variant text-sm mb-2 font-light">${property.address}</p>
                <p class="text-lg font-semibold text-primary mb-3">${priceDisplay}</p>
                <div class="flex items-center gap-4 text-on-surface-variant text-sm">
                    <span class="flex items-center gap-1"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg> ${property.bedrooms} Beds</span>
                    <span class="flex items-center gap-1"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg> ${property.bathrooms} Baths</span>
                </div>
            </a>
        `;
    }

    const featuredGrid = document.getElementById('featured-properties-grid');
    if (featuredGrid) {
        // Only show up to 3 featured properties
        const html = properties.slice(0, 3).map((p, i) => createPropertyCard(p, i * 100)).join('');
        featuredGrid.innerHTML = html;
        observeElements();
    }

    const buyGrid = document.getElementById('buy-properties-grid');
    if (buyGrid) {
        const html = properties.map((p, i) => createPropertyCard(p, (i % 3) * 100)).join('');
        buyGrid.innerHTML = html;
        observeElements();
    }
});
