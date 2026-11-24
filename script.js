document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal-reserva");
    const botonesReservar = document.querySelectorAll(".btn-reservar");
    const btnCerrar = document.querySelector(".cerrar-modal");
    const btnConfirmar = document.getElementById("btn-confirmar");
    
    const vistaFormulario = document.getElementById("formulario-reserva");
    const vistaExito = document.getElementById("mensaje-exito");
    const inputFecha = document.getElementById("fecha-hora");

    
    botonesReservar.forEach(boton => {
        boton.addEventListener("click", () => {
        
            inputFecha.value = "";
            vistaFormulario.classList.remove("oculto");
            vistaExito.classList.add("oculto");
            modal.classList.remove("oculto");
        });
    });


    btnCerrar.addEventListener("click", () => {
        modal.classList.add("oculto");
    });


    window.addEventListener("click", (e) => ¨{
        if (e.target === modal) {
            modal.classList.add("oculto");
        }
    });


    btnConfirmar.addEventListener("click", () => {
        if (inputFecha.value === "") {
            alert("Por favor, selecciona una fecha y horario antes de confirmar.");
            return;
        }

    
        vistaFormulario.classList.add("oculto");
        vistaExito.classList.remove("oculto");

    
        setTimeout(() => {
            modal.classList.add("oculto");
        }, 3000);
    });
});