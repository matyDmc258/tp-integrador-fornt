document.addEventListener("DOMContentLoaded", function () {
    const ticketsResumen = document.querySelector("#btnResumen");
    ticketsResumen.addEventListener("click", function (evento) {
        evento.preventDefault(); // Evita la recarga de la página

        const cantidadTickets = Number(document.querySelector("#inputCantidad").value);

        if (cantidadTickets) {
            const totalPagar = calcularTotalPagar(cantidadTickets);
            actualizarResultado(`Total a pagar: $${totalPagar}`);
        } else {
            manejarErrorInput(document.querySelector("#inputCantidad"));
        }
    });

    const ticketsBorrar = document.querySelector("#btnBorrar");
    ticketsBorrar.addEventListener("click", borrarResultado);

    const ticketsCantidad = document.querySelector("#inputCantidad");
    ticketsCantidad.addEventListener("input", limpiarInputCantidad);

    function calcularTotalPagar(cantidad) {
        // Sin descuentos basados en categorías
        return 200 * cantidad;
    }

    function actualizarResultado(mensaje) {
        document.querySelector("#alerta").textContent = mensaje;
    }

    function borrarResultado() {
        actualizarResultado("Total a pagar:");
        limpiarInputCantidad();
        // Restablecer el borde del input
        actualizarEstiloInput(ticketsCantidad, "1px solid var(--gris-300)");
    }

    function limpiarInputCantidad() {
        actualizarEstiloInput(ticketsCantidad, "1px solid var(--gris-300)");
    }

    function manejarErrorInput(inputElemento) {
        inputElemento.style.border = "2px solid red";
        inputElemento.value = "";
        inputElemento.placeholder = "Ingrese una cantidad";
    }

    function actualizarEstiloInput(inputElemento, estilo) {
        inputElemento.style.border = estilo;
    }
});
