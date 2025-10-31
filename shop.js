const productListContainer = document.querySelector('.wadah-kartu');


async function fetchProducts() {
    try {
        
        const response = await fetch('products.json'); 
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const products = await response.json();


        renderProducts(products);

    } catch (error) {
        console.error('Failed to fetch products:', error);
        productListContainer.innerHTML = '<p>Gagal memuat produk. Coba lagi nanti.</p>';
    }
}


function renderProducts(products) {

    productListContainer.innerHTML = ''; 

    
    const productCards = products.map(product => {
        
        return `
            <div class="product-card">
                <img src="${product.imageUrl}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Rp ${product.price.toLocaleString('id-ID')}</p>
            </div>
        `;
    }).join(''); 

    
    productListContainer.innerHTML = productCards;
}

fetchProducts();