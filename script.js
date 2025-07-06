// Carousel Controls
let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');
const totalItems = carouselItems.length;
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Mostrar la imagen en base al índice actual
function updateCarousel() {
    const offset = -currentIndex * 800; // Ajusta el desplazamiento según el tamaño de las imágenes (400px)
    document.querySelector('.carousel').style.transform = `translateX(${offset}px)`;
}

// Avanzar a la siguiente imagen
function showNextImage() {
    currentIndex = (currentIndex + 1) % totalItems; // Se asegura de que sea cíclico
    updateCarousel();
}

// Retroceder a la imagen anterior
function showPrevImage() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Evita índices negativos
    updateCarousel();
}

// Asignar eventos a los botones
nextBtn.addEventListener('click', showNextImage);
prevBtn.addEventListener('click', showPrevImage);

// Cambiar automáticamente cada 10000 segundos
//setInterval(showNextImage, 10000);


// Cookies Popup
document.addEventListener("DOMContentLoaded", function() {
    const cookiePopup = document.getElementById('cookiePopup');
    const acceptCookiesBtn = document.getElementById('acceptCookiesBtn');

    // Verifica si el usuario ya aceptó las cookies
    if (!localStorage.getItem('cookiesAccepted')) {
        // Si no aceptó, mostrar el popup
        cookiePopup.style.display = 'block';
    }

    // Manejar el clic en el botón de aceptar
    acceptCookiesBtn.addEventListener('click', function() {
        // Almacenar en localStorage que aceptó las cookies
        localStorage.setItem('cookiesAccepted', true);
        // Ocultar el popup
        cookiePopup.style.display = 'none';
    });
});


// Additional Carousel Controls
let currentIndex2 = 0;
const carouselItems2 = document.querySelectorAll('.carousel-item-2');
const totalItems2 = carouselItems2.length;
const prevBtn2 = document.querySelector('.prev-btn-2');
const nextBtn2 = document.querySelector('.next-btn-2');

// Mostrar la imagen en base al índice actual
function updateCarousel2() {
    const offset = -currentIndex2 * 800; // Ajusta el desplazamiento según el tamaño de las imágenes (400px)
    document.querySelector('.carousel-2').style.transform = `translateX(${offset}px)`;
}

// Avanzar a la siguiente imagen
function showNextImage2() {
    currentIndex2 = (currentIndex2 + 1) % totalItems2; // Se asegura de que sea cíclico
    updateCarousel2();
}

// Retroceder a la imagen anterior
function showPrevImage2() {
    currentIndex2 = (currentIndex2 - 1 + totalItems2) % totalItems2; // Evita índices negativos
    updateCarousel2();
}

// Asignar eventos a los botones
nextBtn2.addEventListener('click', showNextImage2);
prevBtn2.addEventListener('click', showPrevImage2);


// Further Carousel Controls
let currentIndex3 = 0;
const carouselItems3 = document.querySelectorAll('.carousel-item-3');
const totalItems3 = carouselItems3.length;
const prevBtn3 = document.querySelector('.prev-btn-3');
const nextBtn3 = document.querySelector('.next-btn-3');

// Mostrar la imagen en base al índice actual
function updateCarousel3() {
    const offset = -currentIndex3 * 800; // Ajusta el desplazamiento según el tamaño de las imágenes (400px)
    document.querySelector('.carousel-3').style.transform = `translateX(${offset}px)`;
}

// Avanzar a la siguiente imagen
function showNextImage3() {
    currentIndex3 = (currentIndex3 + 1) % totalItems3; // Se asegura de que sea cíclico
    updateCarousel3();
}

// Retroceder a la imagen anterior
function showPrevImage3() {
    currentIndex3 = (currentIndex3 - 1 + totalItems3) % totalItems3; // Evita índices negativos
    updateCarousel3();
}

// Asignar eventos a los botones
nextBtn3.addEventListener('click', showNextImage3);
prevBtn3.addEventListener('click', showPrevImage3);


// Google Apps Script Integration for Subscription Form
const APP_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyawDS1myfcYWrdxIAbg0r-qLTfFkY790ZNpDaE2u0BNeXprUdvkrLtc1p7E0kKDY7d/exec';

// Verificar si el formulario de suscripción existe antes de agregar el evento
const subscriptionForm = document.getElementById('subscriptionForm');
if (subscriptionForm) {
    subscriptionForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío por defecto del formulario

        // Capturar los datos del formulario
        const name = event.target.name.value;
        const email = event.target.email.value;

        // Crear el payload para el envío
        const payload = {
            action: "subscribe",
            name: name,
            email: email
        };

        // Enviar los datos usando fetch API
        fetch(APP_SCRIPT_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })
        .then(response => response.json())
        .then(data => {
            // Mostrar mensaje de éxito o error basado en la respuesta
            alert(data.message);
        })
        .catch(error => {
            console.error('Error al enviar el formulario:', error);
            alert('Hubo un problema al enviar tu suscripción. Inténtalo nuevamente.');
        });
    });
}

// Manejador del botón de cancelar suscripción
function cancelarSubscripcion() {
    const email = prompt("Introduce tu correo para cancelar la suscripción:");
    if (!email) return;

    const payload = {
        action: "unsubscribe",
        email: email
    };

    fetch(APP_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    })
    .catch(error => {
        console.error('Error al cancelar la suscripción:', error);
        alert('Hubo un problema al cancelar tu suscripción. Inténtalo nuevamente.');
    });
}
