// Header Scroll animation

let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const header = document.querySelector(".section-header");
  if (header) {
    if (scrollTop > lastScrollTop) {
      header.style.top = "-120px";
    } else {
      header.style.top = "0";
    }
  } else {
    console.warn("Header is Not Avaialbe");
  }

  lastScrollTop = scrollTop;
});

// Load Embeded Video Time line

window.addEventListener("load", () => {
  const testimonialEmbedVideo = document.getElementById(
    "testimonial-embed-video"
  );
  document
    .querySelector(".custom-video-btn.custom-button-bg__gradient")
    .addEventListener("click", () => {
      testimonialEmbedVideo.classList.remove("embed-video-hide");
      setTimeout(
        () => testimonialEmbedVideo.classList.add("embed-video-lightbox-open"),
        1
      );
    });
  document
    .querySelector(".w-lightbox-control.w-lightbox-close")
    .addEventListener("click", () => {
      testimonialEmbedVideo.classList.remove("embed-video-lightbox-open");
      setTimeout(() => {
        testimonialEmbedVideo.classList.add("embed-video-hide");
      }, 300);
    });
});


// Earning Animation 

let isInView = false;
let $tick;
const targetValue = 7800000;
const valueInterval = 111111;
const timeInterval = 88;
// init Flip Counter
function setupFlip(tick) {
  var initialValue = parseInt(
    tick.root.getAttribute("data-value"),
    10
  );
  tick.value = initialValue;
  $tick = tick;
}
window.addEventListener("load", () => {
  const randomTickVal = () =>
    Math.floor(Math.random() * 1682) + 88;
  const targetElement =
    document.querySelector(".members__counter");
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.05,
  };
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            isInView = true;
        observer.unobserve(targetElement);
        const tickInterval = Tick.helper.interval(() => {
            console.log(targetValue)
          let tickValue;
          if ($tick.value >= targetValue) {
            tickValue = targetValue;
            tickInterval.stop();
            //   runAfter();
          } else tickValue = $tick.value + valueInterval;
          $tick.value = Number(tickValue);
          $tick.root.setAttribute("aria-label", tickValue);
        }, timeInterval);
      }
    });
  };
  const observer = new IntersectionObserver(
    callback,
    options
  );
  observer.observe(targetElement);
});