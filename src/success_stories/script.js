window.onload = () => {
    document
      .querySelectorAll(".section-14 a.butt.w-button")
      .forEach((item) => {
        item.addEventListener("click", () => {
          let secId = "#" + item.id.replace("-btn", "");
          document
            .querySelector(".section-14 a.btn.butt.w-button")
            .classList.remove("btn");
          item.classList.add("btn");
          document
            .querySelector("section.d-sec-block")
            .classList.remove("d-sec-block");
          document.querySelector(secId).classList.add("d-sec-block");
        });
      });

    const testimonialEmbedVideo = document.getElementById(
      "testimonial-embed-video"
    );
    const youtubeVideo =
      testimonialEmbedVideo.querySelector("iframe");
    document
      .querySelectorAll(".testimonial-video-thumbnail")
      .forEach((item) => {
        item.addEventListener("click", () => {
          youtubeVideo.src = item.getAttribute(
            "data-video-embed-link"
          );
          testimonialEmbedVideo.classList.remove("embed-video-hide");
          setTimeout(
            () =>
              testimonialEmbedVideo.classList.add(
                "embed-video-lightbox-open"
              ),
            1
          );
        });
      });
    document
      .querySelector(".w-lightbox-control.w-lightbox-close")
      .addEventListener("click", () => {
        testimonialEmbedVideo.classList.remove(
          "embed-video-lightbox-open"
        );
        setTimeout(() => {
          testimonialEmbedVideo.classList.add("embed-video-hide");
          youtubeVideo.src = "";
        }, 300);
      });
  };