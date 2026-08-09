import "./style.css";


// =====================================
// OBTENER LOS BOTONES
// =====================================

const botones = document.querySelectorAll(
    "[data-seccion]"
);


// =====================================
// OBTENER LAS SECCIONES
// =====================================

const secciones = document.querySelectorAll(
    ".seccion"
);


// =====================================
// ESCUCHAR LOS CLICS
// =====================================

botones.forEach((boton) => {

    boton.addEventListener("click", () => {


        // =================================
        // 1. OCULTAR TODAS LAS SECCIONES
        // =================================

        secciones.forEach((seccion) => {

            seccion.classList.remove("activa");

        });


        // =================================
        // 2. SABER QUÉ SECCIÓN QUIERE
        // =================================

        const nombreSeccion =
            boton.dataset.seccion;


        // =================================
        // 3. BUSCAR ESA SECCIÓN
        // =================================

        const seccionSeleccionada =
            document.getElementById(nombreSeccion);


        // =================================
        // 4. MOSTRARLA
        // =================================

        seccionSeleccionada.classList.add("activa");

    });

});