document.addEventListener('DOMContentLoaded', () => {
    const carrusel = document.querySelector('#carrusel-noticias');
    const btnPrev = document.querySelector('.prev');
    const btnNext = document.querySelector('.next');
    let slideIndex = 0;
    let slides = [];

    // Iniciar el carrusel
    async function iniciarCarrusel() {
        try {
            const data = await cargarNoticias();
            crearSlides(data);
            mostrarSlide(slideIndex);
        } catch (error) {
            console.error('Error al cargar noticias:', error);
        }
    }

    // Cargar JSON
    async function cargarNoticias() {
        const res = await fetch('data/noticias.json');
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return await res.json();
    }

    // Crear los slides
    function crearSlides(data) {
        data.forEach(noticia => {
            const slide = document.createElement('div');
            slide.classList.add('slide');

            slide.innerHTML = `
                <img src="${noticia.imagen}" alt="${noticia.alt}">
                <p class="caption">${noticia.titulo}</p>
            `;
            carrusel.appendChild(slide);
        });

        slides = document.querySelectorAll('.slide');
    }

    // Mostrar slide activo
    function mostrarSlide(index) {
        if (slides.length === 0) return;

        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    // Botón anterior
    btnPrev.addEventListener('click', () => {
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        mostrarSlide(slideIndex);
    });

    // Botón siguiente
    btnNext.addEventListener('click', () => {
        slideIndex = (slideIndex + 1) % slides.length;
        mostrarSlide(slideIndex);
    });

    iniciarCarrusel();
});
