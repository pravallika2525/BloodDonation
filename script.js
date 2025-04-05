const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const indicatorBtns = document.querySelectorAll('.indicator-btn');

let currentSlide = 0;
let intervalId;

carouselItems[currentSlide].classList.add('active');

prevBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    carouselItems[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + carouselItems.length) % carouselItems.length;
    carouselItems[currentSlide].classList.add('active');
    updateIndicators();
    startInterval();
});

nextBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    carouselItems[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % carouselItems.length;
    carouselItems[currentSlide].classList.add('active');
    updateIndicators();
    startInterval();
});

indicatorBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        clearInterval(intervalId);
        carouselItems[currentSlide].classList.remove('active');
        currentSlide = index;
        carouselItems[currentSlide].classList.add('active');
        updateIndicators();
        startInterval();
    });
});

function updateIndicators() {
    indicatorBtns.forEach((btn, index) => {
        if (index === currentSlide) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function startInterval() {
    intervalId = setInterval(() => {
        carouselItems[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % carouselItems.length;
        carouselItems[currentSlide].classList.add('active');
        updateIndicators();
    }, 3000); // switch to next slide every 5 seconds
}

startInterval();

