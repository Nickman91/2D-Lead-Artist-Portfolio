// Плавный скролл к разделу галереи
document.getElementById('view-works').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector(this.getAttribute('href')).scrollIntoView({
    behavior: 'smooth'
  });
});

// Плавный скролл к разделу резюме
document.getElementById('view-resume').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector(this.getAttribute('href')).scrollIntoView({
    behavior: 'smooth'
  });
});

// Карусель отзывов
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.remove('active');
    if (i === index) {
      testimonial.classList.add('active');
    }
  });
}

function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
  showTestimonial(currentTestimonial);
}

function prevTestimonial() {
  currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
  showTestimonial(currentTestimonial);
}

// Автоматическая смена отзывов
setInterval(nextTestimonial, 5000);

// Кнопки управления
document.querySelector('.next-btn').addEventListener('click', nextTestimonial);
document.querySelector('.prev-btn').addEventListener('click', prevTestimonial);

// Показываем первый отзыв
showTestimonial(currentTestimonial);