document.addEventListener('DOMContentLoaded', () => {
    // State
    let currentCategory = 'all';
    let searchQuery = '';
    let sortOption = 'featured';

    // DOM Elements
    const grid = document.getElementById('products-grid');
    const searchInput = document.getElementById('search-input');
    const sortSelect = document.getElementById('sort-select');
    const categoryFiltersContainer = document.getElementById('category-filters');
    const noResults = document.getElementById('no-results');
    const productCount = document.getElementById('product-count');
    const clearFiltersBtn = document.getElementById('clear-filters-btn');

    // Initialize
    initCategories();
    renderProducts();

    // Event Listeners
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        renderProducts();
    });

    sortSelect.addEventListener('change', (e) => {
        sortOption = e.target.value;
        renderProducts();
    });

    clearFiltersBtn.addEventListener('click', () => {
        currentCategory = 'all';
        searchQuery = '';
        searchInput.value = '';

        // Reset radio button
        const allRadio = document.querySelector('input[name="category"][value="all"]');
        if (allRadio) allRadio.checked = true;

        renderProducts();
    });

    // Helper: Initialize Category Filters dynamically
    function initCategories() {
        // Get unique categories
        const categories = [...new Set(window.products.map(p => p.category))].sort();

        categories.forEach(cat => {
            const label = document.createElement('label');
            label.className = 'flex items-center space-x-3 cursor-pointer group';
            label.innerHTML = `
                <input type="radio" name="category" value="${cat}" class="form-radio text-sethBlue focus:ring-sethBlue h-4 w-4">
                <span class="text-gray-700 group-hover:text-sethBlue transition-colors">${cat}</span>
            `;

            // Add listener to the new input
            const input = label.querySelector('input');
            input.addEventListener('change', (e) => {
                if (e.target.checked) {
                    currentCategory = e.target.value;
                    renderProducts();
                }
            });

            categoryFiltersContainer.appendChild(label);
        });

        // Add listener to the 'All' radio that exists in HTML
        const allRadio = document.querySelector('input[name="category"][value="all"]');
        if (allRadio) {
            allRadio.addEventListener('change', (e) => {
                if (e.target.checked) {
                    currentCategory = 'all';
                    renderProducts();
                }
            });
        }
    }

    // Core: Render Products
    function renderProducts() {
        // Filter
        let filtered = window.products.filter(product => {
            // Category Filter
            const matchesCategory = currentCategory === 'all' || product.category === currentCategory;

            // Search Filter (Name or Description)
            const matchesSearch = product.name.toLowerCase().includes(searchQuery) ||
                product.description.toLowerCase().includes(searchQuery);

            return matchesCategory && matchesSearch;
        });

        // Sort
        if (sortOption === 'name-asc') {
            filtered.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortOption === 'name-desc') {
            filtered.sort((a, b) => b.name.localeCompare(a.name));
        }
        // 'featured' logic could just be default index order

        // Update UI
        updateGrid(filtered);
        updateCount(filtered.length);
    }

    function updateGrid(items) {
        grid.innerHTML = '';

        if (items.length === 0) {
            noResults.classList.remove('hidden');
            grid.classList.add('hidden');
            return;
        }

        noResults.classList.add('hidden');
        grid.classList.remove('hidden');

        items.forEach(product => {
            const card = document.createElement('div');
            card.className = 'bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group';

            card.innerHTML = `
                <div class="h-48 overflow-hidden relative bg-gray-50 flex items-center justify-center p-4">
                    <img src="${product.image}" alt="${product.name}" class="object-contain h-full w-full group-hover:scale-105 transition-transform duration-500">
                    <div class="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
                </div>
                
                <div class="p-5">
                    <div class="text-xs font-semibold text-sethBlue mb-2 uppercase tracking-wide bg-blue-50 inline-block px-2 py-1 rounded-md">
                        ${product.category}
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-sethBlue transition-colors">${product.name}</h3>
                    <p class="text-gray-600 text-sm line-clamp-2 mb-4 h-10">${product.description}</p>
                    
                    <a href="product.html?id=${product.id}" class="block w-full text-center bg-gray-900 text-white font-medium py-2 rounded-lg hover:bg-sethBlue transition-colors shadow-md hover:shadow-lg">
                        View Details
                    </a>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    function updateCount(count) {
        if (count === window.products.length) {
            productCount.textContent = `Showing all ${count} products`;
        } else {
            productCount.textContent = `Showing ${count} result${count !== 1 ? 's' : ''}`;
        }
    }
});
