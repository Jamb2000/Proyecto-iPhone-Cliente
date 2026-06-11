// EVENTO BASE: Evita ejecutar JS antes de que todo el HTML se haya cargado
document.addEventListener('DOMContentLoaded', () => {

    /* ===================================================
       1. PANTALLA DE CARGA (LOADER 3D)
       =================================================== */
    const loader = document.getElementById('loader-screen');
    const welcomeMsg = document.getElementById('welcome-msg');
    const continueMsg = document.getElementById('continue-msg');

    if(loader) {
        // Ejecuta transiciones CSS añadiendo la clase "show" con retraso
        setTimeout(() => { if(welcomeMsg) welcomeMsg.classList.add('show'); }, 500);
        setTimeout(() => { if(continueMsg) continueMsg.classList.add('show'); }, 3000);

        // Limpia el loader del DOM al hacer click
        loader.addEventListener('click', () => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
                document.body.classList.remove('no-scroll'); 
            }, 800);
        });
    }

    /* ===================================================
       2. INICIALIZAR CARRUSELES PRINCIPALES (SWIPER)
       =================================================== */
    
    // Carrusel Hero Banner (Banner principal)
    if (document.querySelector('.hero-swiper')) {
        new Swiper('.hero-swiper', {
            loop: true,
            autoplay: { delay: 4000, disableOnInteraction: false }, // Se mueve solo cada 4s
            pagination: { el: '.hero-pagination', clickable: true },
            navigation: { nextEl: '.hero-next', prevEl: '.hero-prev' },
            effect: 'slide',
            speed: 600,
        });
    }

    // Carrusel de Categorías (Tarjetas medianas)
    if (document.querySelector('.categories-swiper')) {
        new Swiper('.categories-swiper', {
            slidesPerView: 'auto', // Resuelve el tamaño apoyado en CSS (min-width)
            spaceBetween: 20, 
            navigation: { nextEl: '.cat-next', prevEl: '.cat-prev' },
            grabCursor: true,
        });
    }

    /* ===================================================
       3. CARRUSEL DE NOVEDADES (PRODUCTOS CON BREAKPOINTS)
       =================================================== */
    if (document.querySelector('.products-swiper')) {
        new Swiper('.products-swiper', {
            loop: true, 
            autoplay: { delay: 2500, disableOnInteraction: false }, // Rotación continua (2.5s)
            navigation: { nextEl: '.prod-next', prevEl: '.prod-prev' },
            grabCursor: true,
            /* Breakpoints: Configuración reactiva. Define cuántas tarjetas 
               mostrar dependiendo de los píxeles de ancho de la pantalla */
            breakpoints: {
                0: { slidesPerView: 1.2, spaceBetween: 15 },    // Celulares pequeños
                576: { slidesPerView: 2.5, spaceBetween: 20 },  // Celulares horizontales/Tablets
                992: { slidesPerView: 3.5, spaceBetween: 25 },  // Laptops
                1200: { slidesPerView: 5, spaceBetween: 25 }    // Monitores grandes (PC)
            }
        });
    }

    /* ===================================================
       4. MENÚ LATERAL MÓVIL (OFF-CANVAS)
       =================================================== */
    const openMenuBtn = document.getElementById('open-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const sideMenu = document.getElementById('side-menu');
    const menuOverlay = document.getElementById('menu-overlay');

    if (openMenuBtn && closeMenuBtn && sideMenu && menuOverlay) {
        
        // Bloquea el scroll de fondo y muestra el panel
        const openMenu = () => {
            sideMenu.classList.add('open');
            menuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; 
        };

        // Regresa los estados a la normalidad
        const closeMenu = () => {
            sideMenu.classList.remove('open');
            menuOverlay.classList.remove('active');
            document.body.style.overflow = 'auto'; 
        };

        openMenuBtn.addEventListener('click', openMenu);
        closeMenuBtn.addEventListener('click', closeMenu);
        menuOverlay.addEventListener('click', closeMenu);
    }

});