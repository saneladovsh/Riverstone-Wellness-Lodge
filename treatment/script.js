const prevButton = document.querySelector('.btn--left');
const nextButton = document.querySelector('.btn--right');
const carouselItems = document.querySelector('.carousel-container');

let currentIndex = 0;

function showSquare(index) {
  carouselItems.style.transform = `translateX(-${index * 100}%)`;
}

prevButton.addEventListener('click', () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : carouselItems.children.length - 1;
  showSquare(currentIndex);
});

console.log

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % carouselItems.children.length;
  showSquare(currentIndex);
});
