const form = document.getElementById("consultaForm");

const nombres = document.getElementById("nombres");
const celular = document.getElementById("celular");
const direccion = document.getElementById("direccion");
const consulta = document.getElementById("consulta");
const deliveryCheck = document.getElementById("deliveryCheck");

/* MARCAR ERROR */

function marcarError(input){

    input.classList.add("error-input");

}

/* LIMPIAR ERROR */

function limpiarError(input){

    input.classList.remove("error-input");

}

/* QUITAR ROJO AL ESCRIBIR */

[nombres, celular, direccion, consulta].forEach(input => {

    input.addEventListener("input", () => {

        limpiarError(input);

    });

});

/* VALIDAR FORMULARIO */

form.addEventListener("submit", (e) => {

    e.preventDefault();

    /* LIMPIAR ERRORES */

    [nombres, celular, direccion, consulta].forEach(input => {

        limpiarError(input);

    });

    /* CAMPOS OBLIGATORIOS */

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

    /* VALIDAR DIRECCION SI HAY DELIVERY */

    if(
        deliveryCheck.checked &&
        direccion.value.trim() === ""
    ){

        marcarError(direccion);

        alert("Ingresa una dirección para coordinar el pedido.");
        return;

    }

    /* ENVIO CORRECTO */

    alert("Consulta enviada correctamente.");

    form.reset();

});