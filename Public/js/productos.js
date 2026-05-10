const container =
    document.getElementById("productos-container");

const searchInput =
    document.getElementById("searchInput");

let productos = [];

fetch("/api/productos")

.then(res => res.json())

.then(data => {

    productos = data;

    mostrarProductos(productos);

})

.catch(error => {

    console.log("Error:", error);

});

/* NORMALIZAR TEXTO */

function normalizar(texto){

    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

/* MOSTRAR PRODUCTOS */

function mostrarProductos(lista){

    const categorias = {};

    lista.forEach(producto => {

        if(!categorias[producto.categoria]){

            categorias[producto.categoria] = [];
        }

        categorias[producto.categoria]
            .push(producto);
    });

    let html = "";

    for(const categoria in categorias){

        const categoriaId =
            normalizar(categoria);

        html += `

        <div
            class="category-block"
            id="${categoriaId}"
        >

            <h2 class="category-title">
                ${categoria}
            </h2>

            <div class="row g-4">

        `;

        categorias[categoria].forEach(producto => {

            html += `

            <div class="col-lg-2 col-md-3 col-6">

                <div class="product-card">

                    <img
                        src="${producto.imagen}"
                        class="product-image"
                        alt="${producto.nombre}"
                    >

                    <div class="product-content">

                        <h6 class="product-name">
                            ${producto.nombre}
                        </h6>

                        <p class="product-price">
                            ${producto.precio}
                        </p>

                    </div>

                </div>

            </div>

            `;
        });

        html += `
            </div>
        </div>
        `;
    }

    container.innerHTML = html;

/* SCROLL A CATEGORIA */

const hash = window.location.hash;

if(hash){

    const elemento =
        document.querySelector(hash);

    if(elemento){

        elemento.scrollIntoView({
            behavior:"smooth"
        });
    }
}
}

/* BUSCADOR */

searchInput.addEventListener("input", () => {

    const texto =
        normalizar(searchInput.value);

    const filtrados = productos.filter(producto => {

        return (
            normalizar(producto.nombre)
                .includes(texto)

            ||

            normalizar(producto.categoria)
                .includes(texto)
        );

    });

    mostrarProductos(filtrados);

});