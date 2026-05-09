fetch("/api/servicios")
    .then(res => res.json())
    .then(data => {

        let html = '';

        data.forEach(servicio => {

            html += `
        
        <div class="col-6 col-md-3">

            <div class="category-card">

                <img 
                    src="${servicio.imagen}" 
                    alt="${servicio.nombre}" 
                    class="category-image"
                >

                <h5 class="category-title">
                    ${servicio.nombre}
                </h5>

            </div>

        </div>

        `;

        });

        document.getElementById("servicios").innerHTML = html;

    })
    .catch(error => console.log(error));