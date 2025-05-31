window.onload = () => {
    document.querySelector(".is--carrousel-book").style.visibility =
      "visible";
  };

  /////////////// VIMEO PLAYER ///////////////

  var Webflow = Webflow || [];
//   Webflow.push(function () {
//     var iframe = document.querySelector("iframe");
//     var player;

//     var videoLoaded = false; // Variable to track if the video has been loaded

//     $(".is--vimeo-play-btn").click(function () {
//       if (!videoLoaded) {
//         // Load the video URL into the iframe if it hasn't been loaded yet
//         iframe.src =
//           "https://player.vimeo.com/video/886924182?h=ce060256da";
//         player = new Vimeo.Player(iframe);
//         videoLoaded = true;
//       }

//       player.play();
//     });

//     $("#btnPause").click(function () {
//       if (player) {
//         player.pause();
//       }
//     });

//     $(window).resize(function () {
//       if (player) {
//         player.pause();
//       }
//     });

//     // Escape key keyboard exit
//     $(document).keydown(function (e) {
//       if (e.which === 27) {
//         $("#btnPause").click();
//       }
//     });

//     // 'ended' event to reset the video when it finishes
//     if (player) {
//       player.on("ended", function () {
//         player.setCurrentTime(0); // Reset the video to 0
//         $("#btnPause").click(); // Pause the video
//       });
//     }
//   });

  /////////////// SPLIDE SLIDER INIT AND BLUR EFFECT ///////////////

  // Function to initialize Swiper once it's loaded
  function initializeSwiper() {
    var swiper = new Swiper(".swiper-container", {
      // Swiper options
      slidesPerView: 7,
      loop: true,
      speed: 1000,
      touchRatio: 1,
      grabCursor: true,
      centeredSlides: true,
      autoplay: { delay: 2000 },
      effect: "coverflow",
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: false,
      },
      breakpoints: {
        991: {
          touchRatio: 0.7,
          coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          },
        },
      },

      /*///////// FROM HERE - BLUR EFFECT //////////*/

      on: {
        progress: function () {
          var swiper = this;
          if (window.innerWidth >= 992) {
            // Check the screen width
            window.requestAnimationFrame(function () {
              // Execute the blur effect logic when the browser is ready for a new animation frame
              for (var i = 0; i < swiper.slides.length; i++) {
                // console.log(swiper.slides[i])
                var slideProgress = swiper.slides[i].progress;
                var cardElement = swiper.slides[i].querySelector(
                  ".swiper-slide__card"
                );
                // console.log("Card",cardElement)
                if (
                  swiper.slides[i].classList.contains(
                    "swiper-slide-visible"
                  )
                ) {
                  var blur =
                    Math.round(Math.abs(slideProgress * 5) * 4) / 10;
                    // console.log("eken",cardElement)
                  // Round to the nearest tenth
                  cardElement.style.filter = "blur(" + blur + "px)";
                } else {
                  cardElement.style.filter = "none";
                  // Reset the blur effect
                }
              }
            });
          } 
          else {
           
            // Reset the blur effect for all elements on other screen sizes
            for (var i = 0; i < swiper.slides.length; i++) {
              // console.log(swiper.slides[i])
              var cardElement = swiper.slides[i].querySelector(
                ".swiper-slide__card"
              );
              // console.log("card element",cardElement)
              cardElement.style.filter = "none";
            }
          }
        },
      },
    });
  }

  /*///////// END OF BLUR EFFECT //////////*/

  // Function called once Swiper is loaded
  function handleSwiperLoad() {
    initializeSwiper();
  }

  // Check if Swiper is already loaded
  if (typeof Swiper === "undefined") {
    // Wait for the Swiper library to finish loading
    window.addEventListener("load", handleSwiperLoad);
  } else {
    // Swiper is already loaded, initialize it immediately
    handleSwiperLoad();
  }
