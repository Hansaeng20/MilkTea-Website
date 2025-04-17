document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${100 * (i - index)}%)`;
        });
    };

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        showSlide(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        showSlide(currentIndex);
    });

    showSlide(currentIndex);
});

let slideIndex = 0;
showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function prevSlide() {
    showSlides(slideIndex -= 1);
}

function showSlides(n) {
    const slides = document.querySelectorAll('.carousel-slide');
    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }
    slides.forEach(slide => slide.style.display = 'none');
    slides[slideIndex].style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('bg-music');
    var sidebarToggle = document.getElementById('sidebar-toggle');
    var sidebar = document.getElementById('sidebar');

    // Play the music automatically when the page loads
    audio.play();

    // Toggle the sidebar
    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });
});



