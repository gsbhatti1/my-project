let currentSlide = 0;
const slides = document.querySelectorAll('.property-item');
const totalSlides = slides.length;
const slidesToShow = 4; // Number of slides visible
const slideWidth = slides[0].clientWidth + 30; // Includes padding

// Clone the first and last few slides for the infinite effect
const carousel = document.querySelector('.property-items');
const firstClones = [];
const lastClones = [];

for (let i = 0; i < slidesToShow; i++) {
  const firstClone = slides[i].cloneNode(true);
  const lastClone = slides[totalSlides - 1 - i].cloneNode(true);
  firstClones.push(firstClone);
  lastClones.push(lastClone);
  carousel.append(firstClone); // Append clones at the end
  carousel.prepend(lastClone); // Prepend clones at the beginning
}

// Adjust total number of slides after cloning
const totalSlidesWithClones = totalSlides + slidesToShow * 2;

// Move to the first original slide to create seamless looping
carousel.style.transform = `translateX(${-slideWidth * slidesToShow}px)`;

// Function to move slides
function moveSlide(direction) {
  currentSlide += direction;
  carousel.style.transition = 'transform 0.7s ease-in-out';
  carousel.style.transform = `translateX(${-slideWidth * (slidesToShow + currentSlide)}px)`;

  // Handle loop around the first and last slides
  carousel.addEventListener('transitionend', () => {
    if (currentSlide === totalSlides) {
      currentSlide = 0;
      carousel.style.transition = 'none';
      carousel.style.transform = `translateX(${-slideWidth * slidesToShow}px)`;
    }

    if (currentSlide === -slidesToShow) {
      currentSlide = totalSlides - slidesToShow;
      carousel.style.transition = 'none';
      carousel.style.transform = `translateX(${-slideWidth * (slidesToShow + currentSlide)}px)`;
    }
  });
}

// Autoplay (optional)
setInterval(() => {
  moveSlide(1);
}, 5000);
