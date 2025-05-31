// app.js
// app.js

document.addEventListener('DOMContentLoaded', function () {
    let currentSlide = 0; // Keep track of the current slide
    const slides = document.querySelectorAll('.swiper-slide');
    const swiperWrapper = document.querySelector('.horizontal-swiper .swiper-wrapper');
    const totalSlides = slides.length;
    let startTouchX = 0;
    let isDragging = false;
    let dragStartX = 0;
  
    // Function to move to the next slide
    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides; // Loop back to the first slide
      updateSlidePosition();
    }
  
    // Function to move to the previous slide
    function prevSlide() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Loop to the last slide if we're at the start
      updateSlidePosition();
    }
  
    // Update the swiper-wrapper position to show the correct slide
    function updateSlidePosition() {
      console.log("slide",slides[0].offsetWidth)
      const slideWidth = slides[0].offsetWidth; // Get the width of one slide
    
      swiperWrapper.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }
    // Automatically move to the next slide every 5 seconds (adjustable)
    setInterval(nextSlide, 5000); // Slow transition: every 5 seconds
    // Initialize the swiper position
    updateSlidePosition();
    // Mouse drag functionality
    swiperWrapper.addEventListener('mousedown', (e) => {
      isDragging = true;
      dragStartX = e.pageX;
      swiperWrapper.style.transition = 'none'; // Disable transition during drag
    });
  
    swiperWrapper.addEventListener('mousemove', (e) => {
      if (isDragging) {
        const dragDistance = dragStartX - e.pageX; // Calculate the drag distance
        swiperWrapper.style.transform = `translateX(-${currentSlide * slides[0].offsetWidth + dragDistance}px)`;
      }
    });
  
    swiperWrapper.addEventListener('mouseup', () => {
      isDragging = false;
      const slideWidth = slides[0].offsetWidth;
      const currentPosition = parseInt(swiperWrapper.style.transform.split('(')[1].split('px')[0], 10);
      const draggedSlide = Math.round(currentPosition / slideWidth);
      currentSlide = Math.max(0, Math.min(totalSlides - 1, draggedSlide));
      updateSlidePosition();
      swiperWrapper.style.transition = 'transform 1.5s ease-in-out'; // Re-enable transition
    });
  
    // Touch swipe functionality
    swiperWrapper.addEventListener('touchstart', (e) => {
      startTouchX = e.touches[0].clientX;
    });
  
    swiperWrapper.addEventListener('touchmove', (e) => {
      const moveX = e.touches[0].clientX;
      const distance = startTouchX - moveX;
      swiperWrapper.style.transform = `translateX(-${currentSlide * slides[0].offsetWidth + distance}px)`;
    });
  
    swiperWrapper.addEventListener('touchend', () => {
      const endTouchX = startTouchX - event.changedTouches[0].clientX;
      if (endTouchX > 100) {
        nextSlide();
      } else if (endTouchX < -100) {
        prevSlide();
      }
      swiperWrapper.style.transition = 'transform 1.5s ease-in-out'; // Re-enable transition
    });
  });
  