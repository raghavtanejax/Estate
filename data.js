// data.js - Handles property data via localStorage

const DEFAULT_PROPERTIES = [
    {
        id: 'prop_1',
        title: 'The Belvedere Estate',
        address: '124 Premium Blvd, Beverly Hills',
        price: 12500000,
        bedrooms: 5,
        bathrooms: 4,
        status: 'For Sale',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 'prop_2',
        title: 'Coastal Retreat',
        address: '88 Ocean Drive, Malibu',
        price: 8950000,
        bedrooms: 4,
        bathrooms: 3,
        status: 'Just Listed',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop'
    },
    {
        id: 'prop_3',
        title: 'Architectural Masterpiece',
        address: '45 Zenith Way, Hollywood Hills',
        price: 15000000,
        bedrooms: 6,
        bathrooms: 5.5,
        status: 'Under Offer',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop'
    }
];

// Initialize data if empty
export function initData() {
    const data = localStorage.getItem('luminous_properties');
    if (!data) {
        localStorage.setItem('luminous_properties', JSON.stringify(DEFAULT_PROPERTIES));
    }
}

// Get all properties
export function getProperties() {
    initData();
    return JSON.parse(localStorage.getItem('luminous_properties')) || [];
}

// Add a property
export function addProperty(property) {
    const properties = getProperties();
    property.id = 'prop_' + Date.now();
    properties.push(property);
    localStorage.setItem('luminous_properties', JSON.stringify(properties));
}

// Update a property
export function updateProperty(id, updatedData) {
    let properties = getProperties();
    const index = properties.findIndex(p => p.id === id);
    if (index !== -1) {
        properties[index] = { ...properties[index], ...updatedData };
        localStorage.setItem('luminous_properties', JSON.stringify(properties));
    }
}

// Delete a property
export function deleteProperty(id) {
    let properties = getProperties();
    properties = properties.filter(p => p.id !== id);
    localStorage.setItem('luminous_properties', JSON.stringify(properties));
}

// Format price utility
export function formatPrice(price) {
    if (isNaN(price)) return price; // For cases like 'Contact Agent'
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(price);
}
