
// Función para limpiar el efecto de desenfoque/active
function clearMenuEffects() {
    const navLinks = document.querySelectorAll('.menu-link');
    navLinks.forEach(l => {
        l.classList.remove('is-active', 'is-blurred');
        l.style.filter = "none"; // Forzamos limpieza
        l.style.opacity = "1";
    });
}


document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    const allLinks = document.querySelectorAll('.menu-link, .logo');

    // Abrir/Cerrar menú hamburguesa
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('is-active');
        navMenu.classList.toggle('active');
    });

    // Al hacer click en cualquier link (Desktop o Móvil)
    allLinks.forEach(link => {
        link.addEventListener('click', () => {
            
            if (window.innerWidth <= 768) {
                clearMenuEffects();
                menuToggle.classList.remove('is-active');
                navMenu.classList.remove('active');
            }
            menuToggle.classList.remove('is-active');
            navMenu.classList.remove('active');



            // Llamamos a función de reset
            if (typeof resetSectionsState === "function") {
                resetSectionsState();
            }
        });
    });
});


/*script de activacion de secciones*/

document.addEventListener('DOMContentLoaded', () => {
    const triggers = document.querySelectorAll('.menu-link, .logo, .btn, .footer-link, .hero');
    const sections = document.querySelectorAll('section');

    function switchSection(targetId) {
        if (!targetId || targetId === '#') return;
        sections.forEach(section => {
            section.classList.remove('section-active');
        });

        // Activamos la elegida
        const activeSection = document.querySelector(targetId);
        if (activeSection) {
            activeSection.classList.add('section-active');
        } else {
            console.error(`La sección ${targetId} no existe en el HTML`);
        }
    }

    //Event Listeners
    triggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            const id = trigger.getAttribute('href');
            
            // Solo actua si el href empieza con #
            if (id && id.startsWith('#')) {
                e.preventDefault();
                switchSection(id);
                
                //menú móvil, se cierra aquí
                if (typeof navMenu !== 'undefined') {
                    navMenu.classList.remove('active');
                    menuToggle.classList.remove('is-active');
                }
            }
        });
    });

    switchSection('.hero');
});

//script para difuminar el menú
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.menu-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            
            const targetId = this.getAttribute('href');
            if (!targetId.startsWith('#')) return;

            // e.preventDefault();

            //RECORRE TODOS LOS LINKS
            navLinks.forEach(l => {
                l.classList.remove('is-active', 'is-blurred');

                if (l === this) {
                    l.classList.add('is-active');
                } else {
                    l.classList.add('is-blurred');
                }
            });
        });
    });


    document.querySelector('.logo').addEventListener('click', () => {
        navLinks.forEach(l => {
            l.classList.remove('is-active', 'is-blurred');
        });
    });
});

//script reseteo de secciones
const mainNavLinks = document.querySelectorAll('.menu-link, .logo');

mainNavLinks.forEach(link => {
    link.addEventListener('click', function(e) {

        resetSectionsState();

        const targetId = this.getAttribute('href');
        
        document.querySelectorAll('section').forEach(s => s.classList.remove('section-active'));
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.classList.add('section-active');
        }
    });
});

//funcion de evitar copiado de texto
window.addEventListener('scroll', function() {
    var element = document.querySelector('.fixed-whatsapp-button');
    var windowHeight = window.innerHeight;
    var elementTop = element.getBoundingClientRect().top;
    if (elementTop + element.offsetHeight < windowHeight) {
      element.style.top = windowHeight - element.offsetHeight - 10 + 'px';
    } else {
      element.style.top = null;
    }
  });

  document.addEventListener('selectstart', (e) => e.preventDefault());

  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && ['c', 'x', 'v', 'a'].includes(e.key.toLowerCase())) {
        e.preventDefault();
    }
});