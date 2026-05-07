// BOTONES DE COMPRA

const buyButtons = document.querySelectorAll('.buy-btn');

buyButtons.forEach((button) => {

    button.addEventListener('click', () => {

        alert('Producto agregado al carrito 🛒');

    });

});

// BUSCADOR

const searchInput =
    document.getElementById('searchInput');

const products =
    document.querySelectorAll('.product-item');

searchInput.addEventListener('keyup', () => {

    const text =
        searchInput.value.toLowerCase();

    products.forEach((product) => {

        const title =
            product.innerText.toLowerCase();

        if (title.includes(text)) {

            product.style.display = 'block';

        } else {

            product.style.display = 'none';

        }

    });

});