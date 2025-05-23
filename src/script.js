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


const logos = [
  {
    src: "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/6619089fdcd20828968d3ba7_64c7ced5f2a7d945a128495c_inc-logo%20(1).svg",
    alt: "Inc Logo"
  },
  {
    src: "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/6619089f857fc389e7699928_64882f635095aa042674ff3a_entrepreneur-logo%20(1).svg",
    alt: "Entrepreneur Logo"
  },
  {
    src: "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/661908a064faf2b29da8c121_64eb9385c49943384198b50a_markets-insider-logo%20(1).svg",
    alt: "Markets Insider Logo"
  },
  {
    src: "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/661908a0ab984ca2d0dc4080_64eb93854443d947594d3d66_marketwatch-logo%20(1).svg",
    alt: "MarketWatch Logo"
  },
  {
    src: "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/661908a0e0f28c718fdf8299_64eb938557140c36d5bc5572_business-insider-logo%20(1).svg",
    alt: "Business Insider Logo",
    className: "image-7"
  },
  {
    src: "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/661908a08580ebcd89f61671_64882f6386e34d3ea727d9e9_forbes-logo%20(1).svg",
    alt: "Forbes Logo"
  },
  {
    src: "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/661908a06c1b7764f0372573_64c7ced5897054d95beacd78_disrupt-logo%20(1).svg",
    alt: "Disrupt Logo"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("logoContainer");

  // Append each logo twice (like the original code)
  for (let i = 0; i < 2; i++) {
    logos.forEach(logo => {
      const img = document.createElement("img");
      img.src = logo.src;
      img.alt = logo.alt || "";
      img.loading = "lazy";
      if (logo.className) img.className = logo.className;
      container.appendChild(img);
    });
  }
});

const techLogos = [
  { src: "https://thecloudbootcamp.com/wp-content/uploads/2024/07/google_cloud.svg", alt: "google_cloud" },
  { src: "https://thecloudbootcamp.com/wp-content/uploads/2024/07/kubernetes.svg", alt: "kubernetes" },
  { src: "https://thecloudbootcamp.com/wp-content/uploads/2024/07/oracle.svg", alt: "oracle" },
  { src: "https://thecloudbootcamp.com/wp-content/uploads/2024/07/python.svg", alt: "python" },
  { src: "https://thecloudbootcamp.com/wp-content/uploads/2024/07/terraform.svg", alt: "terraform" },
  { src: "https://thecloudbootcamp.com/wp-content/uploads/2024/07/ansible.svg", alt: "ansible" },
  { src: "https://thecloudbootcamp.com/wp-content/uploads/2024/07/aws.svg", alt: "aws" },
  { src: "https://thecloudbootcamp.com/wp-content/uploads/2024/07/azure.svg", alt: "azure" },
  { src: "https://thecloudbootcamp.com/wp-content/uploads/2024/07/docker.svg", alt: "docker" },
  { src: "https://thecloudbootcamp.com/wp-content/uploads/2024/07/git.svg", alt: "git" },
  { src: "https://thecloudbootcamp.com/wp-content/uploads/2024/07/AI.svg", alt: "AI" }
];

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("techLogoContainer");

  techLogos.forEach(logo => {
    const img = document.createElement("img");
    img.src = logo.src;
    img.alt = logo.alt;
    img.loading = "lazy";
    container.appendChild(img);
  });
});

