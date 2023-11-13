document.addEventListener("DOMContentLoaded", function () {
    const ticketsResumen = document.querySelector("#btnResumen");
    ticketsResumen.addEventListener("click", function (evento) {
        evento.preventDefault(); // Evita la recarga de la página

        const cantidadTickets = Number(document.querySelector("#inputCantidad").value);

        if (cantidadTickets) {
            const totalPagar = calcularTotalPagar(cantidadTickets, document.querySelector("#selectCategoria").value);
            actualizarResultado(`Total a pagar: $${totalPagar}`);
        } else {
            manejarErrorInput(document.querySelector("#inputCantidad"));
        }
    });

    const ticketsBorrar = document.querySelector("#btnBorrar");
    ticketsBorrar.addEventListener("click", borrarResultado);

    const ticketsCantidad = document.querySelector("#inputCantidad");
    ticketsCantidad.addEventListener("input", limpiarInputCantidad);

    const ticketsCategoria = document.querySelector("#selectCategoria");
    ticketsCategoria.addEventListener("click", aplicarDescuento);

    const descuentoEstudiante = document.querySelector("#descuentoEstudiante");
    descuentoEstudiante.addEventListener("click", actualizarCategoria);

    const descuentoTrainee = document.querySelector("#descuentoTrainee");
    descuentoTrainee.addEventListener("click", actualizarCategoria);

    const descuentoJunior = document.querySelector("#descuentoJunior");
    descuentoJunior.addEventListener("click", actualizarCategoria);

    function calcularTotalPagar(cantidad, categoria) {
        let descuento;
        switch (categoria) {
            case "Estudiante":
                descuento = 0.2;
                break;
            case "Trainee":
                descuento = 0.5;
                break;
            case "Junior":
                descuento = 0.85;
                break;
        }
        return 200 * cantidad * descuento;
    }

    function actualizarResultado(mensaje) {
        document.querySelector("#alerta").textContent = mensaje;
    }

    function borrarResultado() {
        actualizarResultado("Total a pagar:");
        limpiarInputCantidad();
    }

    function actualizarCategoria(evento) {
        const categoria = evento.target.parentNode.id;
        const mapaCategorias = {
            descuentoEstudiante: 0,
            descuentoTrainee: 1,
            descuentoJunior: 2,
        };
        const indiceSeleccionado = mapaCategorias[categoria];

        document.querySelector("#selectCategoria").options.selectedIndex = indiceSeleccionado;

        const elementosDescuento = [descuentoEstudiante, descuentoTrainee, descuentoJunior];

        for (const descuentoElemento of elementosDescuento) {
            if (descuentoElemento === evento.target) {
                actualizarEstiloInput(descuentoElemento, "#f2f2f2");
            } else {
                actualizarEstiloInput(descuentoElemento, "transparent");
            }
        }
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

    function aplicarDescuento() {
        // Lógica para aplicar descuento, si es necesario
        // Puedes implementar esta función según tus necesidades
        console.log("Descuento aplicado");
    }
});
