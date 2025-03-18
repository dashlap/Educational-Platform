document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const navigation = document.querySelector('.navigation');

    burgerMenu.addEventListener('click', () => {
        navigation.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const indicators = document.querySelectorAll('.indicator');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  let current = 0;
  const totalSlides = slides.length;

  function showSlide(index) {
      slides.forEach(slide => slide.style.transform = `translateX(${-(index * 100)}%)`);
      indicators.forEach((indicator, i) => {
          indicator.classList.toggle('active', i === index);
      });
  }

  function nextSlide() {
      current = (current + 1) % totalSlides;
      showSlide(current);
  }

  function prevSlide() {
      current = (current - 1 + totalSlides) % totalSlides;
      showSlide(current);
  }

  next.addEventListener('click', nextSlide);
  prev.addEventListener('click', prevSlide);
});