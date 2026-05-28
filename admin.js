import './style.css';
import { getProperties, addProperty, updateProperty, deleteProperty, formatPrice } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    
    const tableBody = document.getElementById('property-table-body');
    const modal = document.getElementById('property-modal');
    const addBtn = document.getElementById('add-property-btn');
    const closeBtn = document.getElementById('close-modal-btn');
    const cancelBtn = document.getElementById('cancel-modal-btn');
    const saveBtn = document.getElementById('save-property-btn');
    
    // Form Inputs
    const formId = document.getElementById('prop-id');
    const formTitle = document.getElementById('prop-title');
    const formAddress = document.getElementById('prop-address');
    const formPrice = document.getElementById('prop-price');
    const formStatus = document.getElementById('prop-status');
    const formBeds = document.getElementById('prop-beds');
    const formBaths = document.getElementById('prop-baths');
    const formImage = document.getElementById('prop-image');
    
    const modalTitle = document.getElementById('modal-title');

    // Render Table
    function renderTable() {
        const properties = getProperties();
        tableBody.innerHTML = '';
        
        properties.forEach(prop => {
            let priceDisplay = formatPrice(prop.price);
            if(isNaN(prop.price) || prop.price === 0) priceDisplay = "Contact Agent";
            
            const tr = document.createElement('tr');
            tr.className = 'hover:bg-surface-container-highest transition-colors group';
            tr.innerHTML = `
                <td class="px-6 py-4 flex items-center gap-4">
                    <img src="${prop.image}" alt="" class="w-16 h-12 object-cover rounded-sm border border-outline-variant/30">
                    <div>
                        <p class="font-display font-medium text-on-background">${prop.title}</p>
                        <p class="text-xs text-on-surface-variant">${prop.bedrooms} Bed • ${prop.bathrooms} Bath</p>
                    </div>
                </td>
                <td class="px-6 py-4 text-sm text-on-surface-variant">${prop.address}</td>
                <td class="px-6 py-4 text-sm font-medium text-primary">${priceDisplay}</td>
                <td class="px-6 py-4">
                    <span class="inline-block px-3 py-1 bg-surface-container text-primary text-xs font-semibold uppercase tracking-wider rounded-full">${prop.status}</span>
                </td>
                <td class="px-6 py-4 text-right opacity-0 group-hover:opacity-100 transition-opacity">
                    <button data-id="${prop.id}" class="edit-btn text-on-surface-variant hover:text-primary transition-colors p-2" title="Edit">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                    </button>
                    <button data-id="${prop.id}" class="delete-btn text-on-surface-variant hover:text-error transition-colors p-2" title="Delete">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                    </button>
                </td>
            `;
            tableBody.appendChild(tr);
        });

        // Attach event listeners to new buttons
        document.querySelectorAll('.edit-btn').forEach(btn => {
            btn.addEventListener('click', (e) => openModal(e.currentTarget.dataset.id));
        });
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                if(confirm('Are you sure you want to delete this property?')) {
                    deleteProperty(e.currentTarget.dataset.id);
                    renderTable();
                }
            });
        });
    }

    // Modal Logic
    function openModal(id = null) {
        if (id) {
            modalTitle.textContent = 'Edit Property';
            const properties = getProperties();
            const prop = properties.find(p => p.id === id);
            if (prop) {
                formId.value = prop.id;
                formTitle.value = prop.title;
                formAddress.value = prop.address;
                formPrice.value = prop.price || '';
                formStatus.value = prop.status;
                formBeds.value = prop.bedrooms;
                formBaths.value = prop.bathrooms;
                formImage.value = prop.image;
            }
        } else {
            modalTitle.textContent = 'Add New Property';
            document.getElementById('property-form').reset();
            formId.value = '';
        }
        modal.classList.remove('hidden');
    }

    function closeModal() {
        modal.classList.add('hidden');
    }

    // Event Listeners
    addBtn.addEventListener('click', () => openModal());
    closeBtn.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', closeModal);
    
    saveBtn.addEventListener('click', () => {
        // Simple Validation
        if(!formTitle.value || !formAddress.value || !formImage.value) {
            alert("Please fill in all required fields (Title, Address, Image)");
            return;
        }

        const propertyData = {
            title: formTitle.value,
            address: formAddress.value,
            price: parseFloat(formPrice.value) || 0,
            status: formStatus.value,
            bedrooms: parseFloat(formBeds.value) || 0,
            bathrooms: parseFloat(formBaths.value) || 0,
            image: formImage.value
        };

        if (formId.value) {
            updateProperty(formId.value, propertyData);
        } else {
            addProperty(propertyData);
        }

        closeModal();
        renderTable();
    });

    // Initial Render
    renderTable();
});
