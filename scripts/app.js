const slides = document.querySelectorAll('.slider__slide');
const prevBtn = document.querySelector('.slider__btn--prev');
const nextBtn = document.querySelector('.slider__btn--next');

let index = 0;
const total = slides.length;

function render() {
  slides.forEach((slide, i) => {
    slide.classList.remove('is-active', 'is-prev', 'is-next');

    const prev = (index - 1 + total) % total;
    const next = (index + 1) % total;

    if (i === index) slide.classList.add('is-active');
    if (i === prev) slide.classList.add('is-prev');
    if (i === next) slide.classList.add('is-next');
  });
}

nextBtn.addEventListener('click', () => {
  index = (index + 1) % total;
  render();
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + total) % total;
  render();
});

render();
