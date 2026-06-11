// EVENTO: Inicia el JS solo cuando el HTML cargó al 100%
document.addEventListener('DOMContentLoaded', () => {

    /* ===================================================
       1. PANTALLA DE CARGA (LOADER 3D)
       =================================================== */
    const loader = document.getElementById('loader-screen');
    const welcomeMsg = document.getElementById('welcome-msg');
    const continueMsg = document.getElementById('continue-msg');

    if(loader) {
        // Muestra el texto de bienvenida a los 0.5s
        setTimeout(() => { if(welcomeMsg) welcomeMsg.classList.add('show'); }, 500);

        // Muestra el botón de continuar a los 3s
        setTimeout(() => { if(continueMsg) continueMsg.classList.add('show'); }, 3000);

        // Al hacer clic, desaparece el loader con transición CSS
        loader.addEventListener('click', () => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
                document.body.classList.remove('no-scroll'); // Devuelve el scroll
            }, 800);
        });
    }

    /* ===================================================
       2. INICIALIZAR CARRUSEL HERO (BANNER PRINCIPAL)
       =================================================== */
    if (document.querySelector('.hero-swiper')) {
        new Swiper('.hero-swiper', {
            loop: true, // Efecto infinito
            autoplay: { delay: 4000, disableOnInteraction: false }, // Pasa cada 4s
            pagination: { el: '.hero-pagination', clickable: true },
            navigation: { nextEl: '.hero-next', prevEl: '.hero-prev' },
            effect: 'slide',
            speed: 600,
        });
    }

    /* ===================================================
       3. INICIALIZAR CARRUSEL DE CATEGORÍAS
       =================================================== */
    if (document.querySelector('.categories-swiper')) {
        new Swiper('.categories-swiper', {
            slidesPerView: 'auto', // CSS define el ancho exacto de la tarjeta (220px)
            spaceBetween: 20, // Margen entre cada categoría
            navigation: { nextEl: '.cat-next', prevEl: '.cat-prev' },
            grabCursor: true,
        });
    }

    /* ===================================================
       4. NUEVO: CARRUSEL DE NOVEDADES (PRODUCTOS)
       =================================================== */
    if (document.querySelector('.products-swiper')) {
        new Swiper('.products-swiper', {
            loop: true, // Rotación de forma infinita
            autoplay: { delay: 2500, disableOnInteraction: false }, // Se mueve solo cada 2.5s
            navigation: { nextEl: '.prod-next', prevEl: '.prod-prev' },
            grabCursor: true,
            // Los breakpoints le dicen cuántos productos mostrar según el tamaño de pantalla
            breakpoints: {
                // Celulares (0px a 575px) - Muestra 1 y la mitad del siguiente para indicar deslizamiento
                0: { slidesPerView: 1.2, spaceBetween: 15 },
                // Tablets (576px a 991px)
                576: { slidesPerView: 2.5, spaceBetween: 20 },
                // Laptops pequeñas
                992: { slidesPerView: 3.5, spaceBetween: 25 },
                // PC Pantalla Grande (1200px+) - Muestra 5 productos
                1200: { slidesPerView: 5, spaceBetween: 25 }
            }
        });
    }

    /* ===================================================
       5. LÓGICA DEL MENÚ LATERAL MÓVIL (OFF-CANVAS)
       =================================================== */
    const openMenuBtn = document.getElementById('open-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const sideMenu = document.getElementById('side-menu');
    const menuOverlay = document.getElementById('menu-overlay');

    if (openMenuBtn && closeMenuBtn && sideMenu && menuOverlay) {
        
        // Abre el menú y bloquea el scroll trasero
        const openMenu = () => {
            sideMenu.classList.add('open');
            menuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; 
        };

        // Cierra el menú y restaura el scroll
        const closeMenu = () => {
            sideMenu.classList.remove('open');
            menuOverlay.classList.remove('active');
            document.body.style.overflow = 'auto'; 
        };

        // Escucha los clics
        openMenuBtn.addEventListener('click', openMenu);
        closeMenuBtn.addEventListener('click', closeMenu);
        menuOverlay.addEventListener('click', closeMenu); // Cerrar tocando fondo oscuro
    }

});