console.log("Modal.js cargado correctamente");

document.addEventListener('click', function(e) {
    // 1. Detectamos en qué elemento exacto se hizo clic
    const el = e.target;
    console.log("Clic en:", el);

    // 2. Buscamos si ese elemento es el link de la imagen o está dentro de uno
    const link = el.closest('.work-item a');

    if (link) {
        e.preventDefault(); // Detenemos cualquier acción por defecto
        console.log("¡Enlace de trabajo detectado! URL:", link.href);

        const modal = document.getElementById("imageModal");
        const modalImg = document.getElementById("fullImage");
        const captionText = document.getElementById("caption");

        if (modal && modalImg) {
            modal.style.display = "flex";
            modalImg.src = link.href;
            console.log("Modal abierto con éxito");

            // Buscamos el título H4
            const container = link.closest('.work-item');
            const h4 = container.querySelector('h4');
            if (h4 && captionText) {
                captionText.innerText = h4.innerText;
            }
        } else {
            console.error("Error: No se encontró el elemento #imageModal o #fullImage en el HTML");
        }
    }
});

// Lógica de cierre mejorada
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("imageModal").style.display = "none";
    }
});