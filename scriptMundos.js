
let currentIdx = 0;
const slides = document.querySelectorAll('.slide');
const bars = document.querySelectorAll('.bar');


function showSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    bars.forEach(b => b.classList.remove('active'));
    
    slides[index].classList.add('active');
    bars[index].classList.add('active');
}


function nextSlide() {
    currentIdx = (currentIdx + 1) % slides.length;
    showSlide(currentIdx);
}


setInterval(nextSlide, 5000);


function currentSlide(index) {
    currentIdx = index;
    showSlide(currentIdx);
}