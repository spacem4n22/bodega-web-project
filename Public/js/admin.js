// Formulario de productos

const productoForm = document.getElementById("productoForm");
const productosAgregados = document.getElementById("productosAgregados");

productoForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const nombre = document.getElementById("nombreProducto").value;
    const categoria = document.getElementById("categoriaProducto").value;
    const precio = document.getElementById("precioProducto").value;
    const imagen = document.getElementById("imagenProducto").value;

    const productoHTML = `
        <div class="producto-item">

            <div>
                <strong>${nombre}</strong>
                <p>${categoria} - ${precio}</p>
            </div>

            <button
                class="delete-btn"
                onclick="this.parentElement.remove()"
            >
                Eliminar
            </button>

        </div>
    `;

    productosAgregados.innerHTML += productoHTML;

    alert("Producto agregado correctamente");

    productoForm.reset();

});

// Cerrar sesión

const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", () => {

    localStorage.removeItem("adminLogin");

    window.location.href = "login_admin.html";

});