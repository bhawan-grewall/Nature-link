document.addEventListener('DOMContentLoaded', () => {
    // Tree products data
    const products = [
        {
            id: 1,
            name: 'Maple Tree',
            price: '149.99',
            image: 'https://images.pexels.com/photos/1808329/pexels-photo-1808329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            description: 'Beautiful Maple tree perfect for adding fall colors to your landscape'
        },
        {
            id: 2,
            name: 'Oak Tree',
            price: '199.99',
            image: 'https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            description: 'Majestic Oak tree, known for its strength and longevity'
        },
        {
            id: 3,
            name: 'Pine Tree',
            price: '129.99',
            image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            description: 'Evergreen Pine tree, perfect for year-round greenery'
        },
        {
            id: 4,
            name: 'Cherry Blossom',
            price: '179.99',
            image: 'https://images.pexels.com/photos/1043458/pexels-photo-1043458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            description: 'Beautiful Cherry Blossom tree with stunning spring flowers'
        },
        {
            id: 5,
            name: 'Willow Tree',
            price: '159.99',
            image: 'https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            description: 'Elegant Willow tree with graceful drooping branches'
        },
        {
            id: 6,
            name: 'Palm Tree',
            price: '249.99',
            image: 'https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            description: 'Tropical Palm tree, perfect for creating a paradise feel'
        }
    ];

    // Function to render products
    function renderProducts(productList) {
        const grid = document.getElementById('product-grid');
        grid.innerHTML = ''; // Clear existing content

        productList.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-price">${product.price}</p>
                    <p class="product-description">${product.description}</p>
                    <button class="buy-button" data-id="${product.id}">Buy Now</button>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    // Initial render of products
    renderProducts(products);

    // Search functionality
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
        renderProducts(filteredProducts);
    });

    // Buy button click handler
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('buy-button')) {
            const productId = e.target.getAttribute('data-id');
            const product = products.find(p => p.id === parseInt(productId));
            alert(`Thank you for your interest in the ${product.name}!\nThis would normally proceed to checkout.`);
        }
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
