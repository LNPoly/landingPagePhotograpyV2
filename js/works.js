document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.sub-menu-link');
    const sections = document.querySelectorAll('.works-section');

    // Función para cambiar de pestaña
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            links.forEach(l => l.classList.remove('active-link'));
            sections.forEach(s => s.classList.remove('active'));

            link.classList.add('active-link');

            const targetId = link.getAttribute('href'); 
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });  

    // Opcional: Activar la primera pestaña por defecto al cargar la página
    // if (links.length > 0) {
    //     links[0].click();
    // }
});  


document.addEventListener('DOMContentLoaded', () => {
    const subLinks = document.querySelectorAll('.sub-menu-link');
    const eraSections = document.querySelectorAll('.works-section');
    const worksContainer = document.getElementById('works');

    const hideAllEras = () => {
        eraSections.forEach(section => {
            section.classList.remove('active');
        });
    };

    subLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href'); 
            const targetSection = document.querySelector(targetId);

            if (!targetSection) return;


            subLinks.forEach(l => l.classList.remove('is-active'));
            this.classList.add('is-active');

            requestAnimationFrame(() => {
                worksContainer.classList.add('era-selected');
            });
            setTimeout(() => {
                hideAllEras();
                targetSection.classList.add('active');
                targetSection.scrollLeft = 0; 
            }, 500);
        });
    });
});

//script de reseteo de la section

function resetSectionsState() {

    const worksContainer = document.getElementById('works');
    if (worksContainer) {
        worksContainer.classList.remove('era-selected');
    }

    const eraSections = document.querySelectorAll('.works-section');
    eraSections.forEach(era => {
        era.classList.remove('active');
    });

    const subLinks = document.querySelectorAll('.sub-menu-link');
    subLinks.forEach(link => {
        link.classList.remove('is-active', 'is-blurred');
        
        link.style.opacity = "";
        link.style.fontWeight = "";
    });

    window.scrollTo(0, 0);
}