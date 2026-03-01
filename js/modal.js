// console.log("Modal.js cargado correctamente");

document.addEventListener('click', function(e) {
    const el = e.target;
    // console.log("Clic en:", el);
    const link = el.closest('.work-item a');

    if (link) {
        e.preventDefault(); 
        // console.log("¡Enlace de trabajo detectado! URL:", link.href);

        const modal = document.getElementById("imageModal");
        const modalImg = document.getElementById("fullImage");
        const captionText = document.getElementById("caption");

        if (modal && modalImg) {
            modal.style.display = "flex";
            modalImg.src = link.href;
            // console.log("Modal abierto con éxito");

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

//cierre de modal con tecla scape
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("imageModal").style.display = "none";
    }
});

document.querySelector('.close').onclick = function() {
    document.getElementById("imageModal").style.display = "none";
};

// Cerrar al hacer click fuera de la imagen
window.onclick = function(event) {
    const modal = document.getElementById("imageModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};