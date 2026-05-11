// Campos del formulario

const form = document.getElementById("consultaForm");

const nombres = document.getElementById("nombres");
const celular = document.getElementById("celular");
const direccion = document.getElementById("direccion");
const consulta = document.getElementById("consulta");
const deliveryCheck = document.getElementById("deliveryCheck");

// Estados de error

function marcarError(input){
    input.classList.add("error-input");
}

function limpiarError(input){
    input.classList.remove("error-input");
}

// Limpiar errores al escribir

[nombres, celular, direccion, consulta].forEach(input => {

    input.addEventListener("input", () => {
        limpiarError(input);
    });

});

// Validación del formulario

form.addEventListener("submit", (e) => {

    e.preventDefault();

    [nombres, celular, direccion, consulta].forEach(input => {
        limpiarError(input);
    });

    if(nombres.value.trim() === ""){
        marcarError(nombres);
    }

    if(celular.value.trim() === ""){
        marcarError(celular);
    }

    if(consulta.value.trim() === ""){
        marcarError(consulta);
    }

    if(
        nombres.value.trim() === "" ||
        celular.value.trim() === "" ||
        consulta.value.trim() === ""
    ){

        alert("Completa los campos obligatorios.");
        return;

    }

    // Validar dirección para delivery

    if(
        deliveryCheck.checked &&
        direccion.value.trim() === ""
    ){

        marcarError(direccion);

        alert("Ingresa una dirección para coordinar el pedido.");
        return;

    }

    // Envío correcto

    alert("Consulta enviada correctamente.");

    form.reset();

});