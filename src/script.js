window.pageData = {
  data: null,
  ready: fetch("./data/index/cards.json")
    .then((response) => {
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      return response.json();
    })
    .then((json) => {
      window.pageData.data = json;
      console.log("Global pageData loaded:", window.pageData.data);
      return json;
    })
    .catch((err) => {
      console.error("Error loading global pageData:", err);
    }),
};


class LoadHtml {
  constructor() {}
  techLogoRender(techLogos) {
    const container = document.getElementById("techLogoContainer");
    if (!container) {
      console.warn("Tech logo container not found");
      return;
    }
    techLogos.forEach((logo) => {
      const img = document.createElement("img");
      img.src = logo.src;
      img.alt = logo.alt || "";
      img.loading = "lazy";
      if (logo.className) img.className = logo.className;
      container.appendChild(img);
    });
  }
  featuredLogoRender(logos) {
    const container = document.getElementById("logoContainer");
    if (!container) {
      console.warn("Tech logo container not found");
      return;
    }
    for (let i = 0; i < 2; i++) {
      logos.forEach((logo) => {
        const img = document.createElement("img");
        img.src = logo.src;
        img.alt = logo.alt || "";
        img.loading = "lazy";
        if (logo.className) img.className = logo.className;
        container.appendChild(img);
      });
    }
  }
}
const loader= new LoadHtml()
window.pageData.ready.then(() => {
  loader.featuredLogoRender(window.pageData.data.featured_logo);
  loader.techLogoRender(window.pageData.data.tech_logo);

  // You can update the DOM or do other stuff here now that data is ready
});

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
let $tick;  // Global reference to the flip tick instance

// Setup tick (called by your flip library on init)
function setupFlip(tick) {
  // Save the tick instance globally for later update
  $tick = tick;

  // Set initial value from the data attribute
  const initialValue = parseInt(tick.root.getAttribute("data-value"), 10) || 0;
  tick.value = initialValue;

  // Render initial value (using the library's render/update function)
  if (typeof tick.render === "function") {
    tick.render();
  } else {
    // Fallback if no render method, update text directly
    const textWrapper = tick.root.querySelector(".tick-flip-panel-text-wrapper");
    if (textWrapper) textWrapper.textContent = initialValue.toLocaleString();
  }
}

// Animate the counter when the element is in viewport
function animateCounter() {
  const targetValue = 7800000;
  const valueInterval = 111111;
  const timeInterval = 88;

  const targetElement = document.querySelector(".members__counter");
  if (!targetElement) {
    console.error("Members counter not found");
    return;
  }

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.05,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        observer.unobserve(targetElement);

        const intervalId = setInterval(() => {
          if (!$tick) {
            clearInterval(intervalId);
            return;
          }
          if ($tick.value >= targetValue) {
            $tick.value = targetValue;
            if (typeof $tick.render === "function") {
              $tick.render();
            }
            clearInterval(intervalId);
            console.log("Animation complete");
          } else {
            $tick.value += valueInterval;
            if (typeof $tick.render === "function") {
              $tick.render();
            }
            console.log("Tick updated to:", $tick.value);
          }
        }, timeInterval);
      }
    });
  }, options);

  observer.observe(targetElement);
}

window.addEventListener("load", () => {
  const tickElement = document.querySelector(".tick");
  if (!tickElement) {
    console.error("Tick element not found");
    return;
  }

  // Create a tick object similar to what Flip.js expects (adjust as needed)
  const tick = {
    root: tickElement,
    value: 0,
    render: function () {
      // Flip.js typically has internal render logic, simulate here:
      const textWrapper = this.root.querySelector(".tick-flip-panel-text-wrapper");
      if (textWrapper) {
        textWrapper.textContent = this.value.toLocaleString();
      }
      this.root.setAttribute("aria-label", this.value.toLocaleString());
    },
  };

  setupFlip(tick);
  animateCounter();
});



// const logos = [
//   {
//     src: "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/6619089fdcd20828968d3ba7_64c7ced5f2a7d945a128495c_inc-logo%20(1).svg",
//     alt: "Inc Logo"
//   },
//   {
//     src: "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/6619089f857fc389e7699928_64882f635095aa042674ff3a_entrepreneur-logo%20(1).svg",
//     alt: "Entrepreneur Logo"
//   },
//   {
//     src: "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/661908a064faf2b29da8c121_64eb9385c49943384198b50a_markets-insider-logo%20(1).svg",
//     alt: "Markets Insider Logo"
//   },
//   {
//     src: "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/661908a0ab984ca2d0dc4080_64eb93854443d947594d3d66_marketwatch-logo%20(1).svg",
//     alt: "MarketWatch Logo"
//   },
//   {
//     src: "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/661908a0e0f28c718fdf8299_64eb938557140c36d5bc5572_business-insider-logo%20(1).svg",
//     alt: "Business Insider Logo",
//     className: "image-7"
//   },
//   {
//     src: "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/661908a08580ebcd89f61671_64882f6386e34d3ea727d9e9_forbes-logo%20(1).svg",
//     alt: "Forbes Logo"
//   },
//   {
//     src: "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/661908a06c1b7764f0372573_64c7ced5897054d95beacd78_disrupt-logo%20(1).svg",
//     alt: "Disrupt Logo"
//   }
// ];

// document.addEventListener("DOMContentLoaded", () => {
//   const container = document.getElementById("logoContainer");

//   // Append each logo twice (like the original code)
//   for (let i = 0; i < 2; i++) {
//     logos.forEach(logo => {
//       const img = document.createElement("img");
//       img.src = logo.src;
//       img.alt = logo.alt || "";
//       img.loading = "lazy";
//       if (logo.className) img.className = logo.className;
//       container.appendChild(img);
//     });
//   }
// });

// const techLogos = [
//   { src: "https://thecloudbootcamp.com/wp-content/uploads/2024/07/google_cloud.svg", alt: "google_cloud" },
//   { src: "https://thecloudbootcamp.com/wp-content/uploads/2024/07/kubernetes.svg", alt: "kubernetes" },
//   { src: "https://thecloudbootcamp.com/wp-content/uploads/2024/07/oracle.svg", alt: "oracle" },
//   { src: "https://thecloudbootcamp.com/wp-content/uploads/2024/07/python.svg", alt: "python" },
//   { src: "https://thecloudbootcamp.com/wp-content/uploads/2024/07/terraform.svg", alt: "terraform" },
//   { src: "https://thecloudbootcamp.com/wp-content/uploads/2024/07/ansible.svg", alt: "ansible" },
//   { src: "https://thecloudbootcamp.com/wp-content/uploads/2024/07/aws.svg", alt: "aws" },
//   { src: "https://thecloudbootcamp.com/wp-content/uploads/2024/07/azure.svg", alt: "azure" },
//   { src: "https://thecloudbootcamp.com/wp-content/uploads/2024/07/docker.svg", alt: "docker" },
//   { src: "https://thecloudbootcamp.com/wp-content/uploads/2024/07/git.svg", alt: "git" },
//   { src: "https://thecloudbootcamp.com/wp-content/uploads/2024/07/AI.svg", alt: "AI" }
// ];

// document.addEventListener("DOMContentLoaded", () => {
//   const container = document.getElementById("techLogoContainer");

//   techLogos.forEach(logo => {
//     const img = document.createElement("img");
//     img.src = logo.src;
//     img.alt = logo.alt;
//     img.loading = "lazy";
//     container.appendChild(img);
//   });
// });
