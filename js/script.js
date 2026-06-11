// EVENTO PRINCIPAL: Se ejecuta cuando todo el HTML ha sido leído y procesado por el navegador
document.addEventListener('DOMContentLoaded', () => {

    /* ===================================================
       1. LÓGICA DEL LOADER (Manzana 3D)
       =================================================== */
    // Localizamos los elementos visuales del loader en el HTML (Buenas prácticas: guardar en constantes)
    const loader = document.getElementById('loader-screen');
    const welcomeMsg = document.getElementById('welcome-msg');
    const continueMsg = document.getElementById('continue-msg');

    // Validación de seguridad para no ejecutar código si el loader no está en la página
    if(loader) {
        
        // Temporizador 1: Activa la animación del mensaje de bienvenida al medio segundo
        setTimeout(() => {
            if(welcomeMsg) welcomeMsg.classList.add('show');
        }, 500);

        // Temporizador 2: Muestra la instrucción de hacer clic a los 3 segundos
        setTimeout(() => {
            if(continueMsg) continueMsg.classList.add('show');
        }, 3000);

        // Evento Click: Desvanece la pantalla negra y devuelve la funcionalidad a la página
        loader.addEventListener('click', () => {
            loader.style.opacity = '0'; // Dispara la transición del CSS
            
            // Espera a que termine la opacidad antes de quitarlo completamente del flujo (display: none)
            setTimeout(() => {
                loader.style.display = 'none';
                document.body.classList.remove('no-scroll'); // Permite hacer scroll libremente
            }, 800);
        });
    }

    /* ===================================================
       2. INICIALIZAR CARRUSEL PRINCIPAL (HERO) CON SWIPER
       =================================================== */
    // Busca si la clase '.hero-swiper' existe antes de inicializar la librería
    if (document.querySelector('.hero-swiper')) {
        const heroSwiper = new Swiper('.hero-swiper', {
            loop: true, // Vuelve al inicio cuando llega a la última imagen
            autoplay: {
                delay: 4000, // Transición automática cada 4000 ms (4s)
                disableOnInteraction: false, // Evita que se pause si el usuario toca la pantalla
            },
            pagination: {
                el: '.hero-pagination', // Activa los puntos indicadores inferiores
                clickable: true,
            },
            navigation: {
                nextEl: '.hero-next', // Asocia las flechas a las funciones de retroceder/avanzar
                prevEl: '.hero-prev',
            },
            effect: 'slide', // Efecto nativo estándar
            speed: 600, // Duración de la animación del cambio (600ms)
        });
    }

    /* ===================================================
       3. INICIALIZAR CARRUSEL DE CATEGORÍAS CON SWIPER
       =================================================== */
    if (document.querySelector('.categories-swiper')) {
        const catSwiper = new Swiper('.categories-swiper', {
            slidesPerView: 'auto', // Permite que cada tarjeta tenga un ancho propio dependiente del CSS
            spaceBetween: 15, // Gap o espaciado entre tarjetas
            navigation: {
                nextEl: '.cat-next',
                prevEl: '.cat-prev',
            },
            grabCursor: true, // Estética: El cursor cambia a una mano "agarrando" en ordenadores
        });
    }

    /* ===================================================
       4. LÓGICA DEL MENÚ LATERAL (OFF-CANVAS)
       =================================================== */
    // Captura los controles para deslizar el menú en móviles
    const openMenuBtn = document.getElementById('open-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const sideMenu = document.getElementById('side-menu');
    const menuOverlay = document.getElementById('menu-overlay');

    if (openMenuBtn && closeMenuBtn && sideMenu && menuOverlay) {
        
        // Método que inserta las clases para mostrar el bloque blanco y el fondo oscuro
        const openMenu = () => {
            sideMenu.classList.add('open');
            menuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Evita scroll de fondo tras abrir el menú
        };

        // Método que retira las clases para regresar al estado normal
        const closeMenu = () => {
            sideMenu.classList.remove('open');
            menuOverlay.classList.remove('active');
            document.body.style.overflow = 'auto'; // Restaura el scroll principal
        };

        // Escucha los eventos "click" y dispara los métodos
        openMenuBtn.addEventListener('click', openMenu);
        closeMenuBtn.addEventListener('click', closeMenu);
        // Si el usuario toca el fondo oscurecido, equivale a presionar "Cerrar"
        menuOverlay.addEventListener('click', closeMenu);
    }

});