const productForm = document.getElementById("productForm");
const tablaProductos = document.getElementById("tablaProductos");
let contador = 1;

productForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const precio = document.getElementById("precio").value;
    const categoria = document.getElementById("categoria").value;

    const fila = document.createElement("tr");
    fila.innerHTML = `
        <td>${contador}</td>
        <td>${nombre}</td>
        <td>S/ ${precio}</td>
        <td>${categoria}</td>
        <td class="text-end">
            <button class="action-btn">
                <i class="bi bi-pencil"></i> Editar
            </button>
            <button class="eliminar">
                <i class="bi bi-trash"></i> Eliminar
            </button>
        </td>
    `;

    tablaProductos.appendChild(fila);
    contador++;
    productForm.reset();

    fila.querySelector(".eliminar").addEventListener("click", () => fila.remove());
});