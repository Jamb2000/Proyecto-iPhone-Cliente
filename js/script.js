// EVENTO PRINCIPAL: DOMContentLoaded garantiza que el HTML está listo antes de ejecutar JS
document.addEventListener('DOMContentLoaded', () => {

    /* ===================================================
       1. LÓGICA DEL LOADER (Pantalla Inicial 3D)
       =================================================== */
    // Capturamos los elementos visuales del loader mediante sus IDs en el HTML
    const loader = document.getElementById('loader-screen');
    const welcomeMsg = document.getElementById('welcome-msg');
    const continueMsg = document.getElementById('continue-msg');

    // Validación de seguridad para no ejecutar código si el loader ya no existe
    if(loader) {
        
        // Muestra el mensaje de bienvenida al transcurrir medio segundo (500ms)
        setTimeout(() => {
            if(welcomeMsg) welcomeMsg.classList.add('show');
        }, 500);

        // Muestra la instrucción de hacer clic al transcurrir 3 segundos
        setTimeout(() => {
            if(continueMsg) continueMsg.classList.add('show');
        }, 3000);

        // Escucha el evento 'click' en toda la pantalla del loader
        loader.addEventListener('click', () => {
            loader.style.opacity = '0'; // Activa el desvanecimiento CSS
            
            // Espera a que termine la opacidad (800ms) para desaparecerlo del flujo visual
            setTimeout(() => {
                loader.style.display = 'none';
                document.body.classList.remove('no-scroll'); // Devuelve el scroll al usuario
            }, 800);
        });
    }

    /* ===================================================
       2. INICIALIZAR CARRUSEL PRINCIPAL (HERO) CON SWIPER
       =================================================== */
    // Buscamos el contenedor antes de intentar arrancar la librería
    if (document.querySelector('.hero-swiper')) {
        const heroSwiper = new Swiper('.hero-swiper', {
            loop: true, // Efecto infinito (al terminar la última, regresa a la primera)
            autoplay: {
                delay: 4000, // Cambio automático de banner cada 4 segundos
                disableOnInteraction: false, // El autoplay no se apaga si el usuario arrastra la pantalla
            },
            pagination: {
                el: '.hero-pagination', // Conecta la estructura de paginación
                clickable: true,
            },
            navigation: {
                nextEl: '.hero-next', // Conecta flechas del DOM
                prevEl: '.hero-prev',
            },
            effect: 'slide', // Efecto nativo de movimiento horizontal
            speed: 600, // Duración del efecto en milisegundos
        });
    }

    /* ===================================================
       3. INICIALIZAR CARRUSEL DE CATEGORÍAS CON SWIPER
       =================================================== */
    if (document.querySelector('.categories-swiper')) {
        const catSwiper = new Swiper('.categories-swiper', {
            slidesPerView: 'auto', // Permite que cada categoría defina su propio ancho con CSS
            spaceBetween: 15, // Espaciado entre cada tarjeta de categoría
            navigation: {
                nextEl: '.cat-next',
                prevEl: '.cat-prev',
            },
            grabCursor: true, // Cambia el puntero del mouse a una mano en navegadores de PC
        });
    }

    /* ===================================================
       4. LÓGICA DEL MENÚ LATERAL MÓVIL (OFF-CANVAS)
       =================================================== */
    // Captura los botones y el fondo oscuro
    const openMenuBtn = document.getElementById('open-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const sideMenu = document.getElementById('side-menu');
    const menuOverlay = document.getElementById('menu-overlay');

    // Nos aseguramos de que no falte ningún elemento crítico en el HTML
    if (openMenuBtn && closeMenuBtn && sideMenu && menuOverlay) {
        
        // Método de acción para abrir la barra lateral
        const openMenu = () => {
            sideMenu.classList.add('open'); // Desliza la caja
            menuOverlay.classList.add('active'); // Oscurece la web detrás
            document.body.style.overflow = 'hidden'; // Bloquea el scroll del fondo
        };

        // Método de acción para esconder la barra lateral
        const closeMenu = () => {
            sideMenu.classList.remove('open'); // Retrae la caja
            menuOverlay.classList.remove('active'); // Retira la oscuridad
            document.body.style.overflow = 'auto'; // Devuelve el scroll del fondo
        };

        // Escucha los clics sobre los iconos y ejecuta los métodos anteriores
        openMenuBtn.addEventListener('click', openMenu);
        closeMenuBtn.addEventListener('click', closeMenu);
        
        // Atajo intuitivo: cerrar el menú si el usuario pincha el área oscurecida
        menuOverlay.addEventListener('click', closeMenu);
    }

});