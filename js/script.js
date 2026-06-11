// EVENTO PRINCIPAL: Se ejecuta cuando todo el HTML ha sido leído y procesado por el navegador
document.addEventListener('DOMContentLoaded', () => {

    /* ===================================================
       1. LÓGICA DEL LOADER (Pantalla de inicio con Manzana 3D)
       =================================================== */
    // Capturamos los elementos visuales del loader mediante sus IDs en el HTML
    const loader = document.getElementById('loader-screen');
    const welcomeMsg = document.getElementById('welcome-msg');
    const continueMsg = document.getElementById('continue-msg');

    // Validación de seguridad para no ejecutar código si el loader no está en la página
    if(loader) {
        
        // Temporizador 1: Activa la animación del mensaje de bienvenida al medio segundo (500ms)
        setTimeout(() => {
            if(welcomeMsg) welcomeMsg.classList.add('show');
        }, 500);

        // Temporizador 2: Muestra la instrucción de "DALE CLIC" a los 3 segundos
        setTimeout(() => {
            if(continueMsg) continueMsg.classList.add('show');
        }, 3000);

        // Evento Click: Desvanece la pantalla negra cuando el usuario hace clic
        loader.addEventListener('click', () => {
            loader.style.opacity = '0'; // Dispara la transición del CSS
            
            // Espera a que termine la opacidad (800ms) antes de quitar el contenedor y devolver el scroll
            setTimeout(() => {
                loader.style.display = 'none';
                document.body.classList.remove('no-scroll'); // Devuelve el scroll natural
            }, 800);
        });
    }

    /* ===================================================
       2. INICIALIZAR CARRUSEL PRINCIPAL (HERO) CON SWIPER
       =================================================== */
    // Busca si la clase '.hero-swiper' existe antes de inicializar la librería
    if (document.querySelector('.hero-swiper')) {
        const heroSwiper = new Swiper('.hero-swiper', {
            loop: true, // Carrusel infinito (vuelve al inicio)
            autoplay: {
                delay: 4000, // Cambio automático cada 4 segundos
                disableOnInteraction: false, // Evita que se pause si el usuario toca la pantalla
            },
            pagination: {
                el: '.hero-pagination', // Activa los puntos indicadores inferiores
                clickable: true,
            },
            navigation: {
                nextEl: '.hero-next', // Asocia flecha derecha
                prevEl: '.hero-prev', // Asocia flecha izquierda
            },
            effect: 'slide', // Efecto nativo de deslizamiento
            speed: 600, // Duración de la animación del cambio (600ms)
        });
    }

    /* ===================================================
       3. INICIALIZAR CARRUSEL DE CATEGORÍAS CON SWIPER
       =================================================== */
    // Inicia el slider más pequeño para las tarjetas de categorías
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
       4. LÓGICA DEL MENÚ LATERAL (OFF-CANVAS PARA MÓVILES)
       =================================================== */
    // Captura los controles necesarios para el menú móvil
    const openMenuBtn = document.getElementById('open-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const sideMenu = document.getElementById('side-menu');
    const menuOverlay = document.getElementById('menu-overlay');

    // Valida que todos los elementos existan en el DOM
    if (openMenuBtn && closeMenuBtn && sideMenu && menuOverlay) {
        
        // Función específica para abrir el menú lateral
        const openMenu = () => {
            sideMenu.classList.add('open'); // Mueve el panel lateral a la vista (transform: translateX(0))
            menuOverlay.classList.add('active'); // Muestra la capa oscura
            document.body.style.overflow = 'hidden'; // Evita scroll de fondo mientras se navega el menú
        };

        // Función específica para cerrar el menú lateral
        const closeMenu = () => {
            sideMenu.classList.remove('open'); // Devuelve el panel a su escondite (-100%)
            menuOverlay.classList.remove('active'); // Oculta la capa oscura
            document.body.style.overflow = 'auto'; // Restaura el scroll natural de la web
        };

        // Asignación de los eventos "click" a los botones para ejecutar las funciones
        openMenuBtn.addEventListener('click', openMenu);
        closeMenuBtn.addEventListener('click', closeMenu);
        
        // Si el usuario hace clic fuera del menú (en lo oscuro), también ejecuta el cierre
        menuOverlay.addEventListener('click', closeMenu);
    }

});