fetch("/api/categorias")

.then(res => res.json())

.then(data => {

    let html = '';

    data.forEach(categoria => {

        const categoriaId =
            categoria.nombre
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "");

        html += `
        
        <div class="col-6 col-md-3">

            <a
                href="productos.html#${categoriaId}"
                class="category-link"
            >

                <div class="category-card ${categoria.clase}">

                    <img 
                        src="${categoria.imagen}" 
                        alt="${categoria.nombre}" 
                        class="category-image"
                    >

                    <h5 class="category-title">
                        ${categoria.nombre}
                    </h5>

                </div>

            </a>

        </div>
        `;
    });

    document.getElementById("servicios").innerHTML = html;

})

.catch(error => console.log(error));