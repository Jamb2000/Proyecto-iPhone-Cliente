document.addEventListener('DOMContentLoaded', () => {

    /* ===================================================
       1. LÓGICA DEL LOADER (Manzana 3D)
       =================================================== */
    const loader = document.getElementById('loader-screen');
    const welcomeMsg = document.getElementById('welcome-msg');
    const continueMsg = document.getElementById('continue-msg');

    if(loader) {
        setTimeout(() => {
            if(welcomeMsg) welcomeMsg.classList.add('show');
        }, 500);

        setTimeout(() => {
            if(continueMsg) continueMsg.classList.add('show');
        }, 3000);

        loader.addEventListener('click', () => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
                document.body.classList.remove('no-scroll'); 
            }, 800);
        });
    }

    /* ===================================================
       2. INICIALIZAR CARRUSEL PRINCIPAL (HERO) CON SWIPER
       =================================================== */
    if (document.querySelector('.hero-swiper')) {
        const heroSwiper = new Swiper('.hero-swiper', {
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.hero-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.hero-next',
                prevEl: '.hero-prev',
            },
            effect: 'slide',
            speed: 600,
        });
    }

    /* ===================================================
       3. INICIALIZAR CARRUSEL DE CATEGORÍAS CON SWIPER
       =================================================== */
    if (document.querySelector('.categories-swiper')) {
        const catSwiper = new Swiper('.categories-swiper', {
            slidesPerView: 'auto',
            spaceBetween: 15,
            navigation: {
                nextEl: '.cat-next',
                prevEl: '.cat-prev',
            },
            grabCursor: true, 
        });
    }

    /* ===================================================
       4. NUEVO: LÓGICA DEL MENÚ LATERAL (OFF-CANVAS)
       =================================================== */
    const openMenuBtn = document.getElementById('open-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const sideMenu = document.getElementById('side-menu');
    const menuOverlay = document.getElementById('menu-overlay');

    if (openMenuBtn && closeMenuBtn && sideMenu && menuOverlay) {
        
        // Función para abrir el menú
        const openMenu = () => {
            sideMenu.classList.add('open');
            menuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Evita scroll de fondo
        };

        // Función para cerrar el menú
        const closeMenu = () => {
            sideMenu.classList.remove('open');
            menuOverlay.classList.remove('active');
            document.body.style.overflow = 'auto'; // Restaura el scroll
        };

        openMenuBtn.addEventListener('click', openMenu);
        closeMenuBtn.addEventListener('click', closeMenu);
        // Cerrar también si hace clic en lo oscuro
        menuOverlay.addEventListener('click', closeMenu);
    }

});