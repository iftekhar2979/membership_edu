// Global pageData loader
window.pageData = {
  data: null,
  ready: fetch("./data/index/cards.json")
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return response.json();
    })
    .then((json) => {
      window.pageData.data = json;
      return json;
    })
    .catch((err) => {
      console.error("Error loading global pageData:", err);
    }),
};

// Loader class to render logos
class LoadHtml {
  techLogoRender(techLogos) {
    const container = document.getElementById("techLogoContainer");
    if (!container) return console.warn("Tech logo container not found");
    let double =techLogos.concat(techLogos)
    double.forEach((logo) => {
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
    if (!container) return console.warn("Logo container not found");
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
  earnings(heading){
    const earningHeading = document.querySelector(".heading-5")
    if(!earningHeading) return console.warn("Earning Heading Container Not found")
      earningHeading.innerText = heading
  }
  admin(adminInfo){
    const adminSection = document.querySelector(".image-37")
    const  title = document.querySelector(".heading-6")
    const  designation = document.querySelector(".paragraph-39")
    adminSection.src=adminInfo.image
    title.innerText= adminInfo.paragraph
    designation.innerText = adminInfo.designation
  }
}

const loader = new LoadHtml();

window.pageData.ready.then(() => {
  if (!window.pageData.data) {
    console.error("No data loaded");
    return;
  }
  console.log(window.pageData.index)
  loader.featuredLogoRender(window.pageData.data.index.featured_logo);
  loader.techLogoRender(window.pageData.data.index.tech_logo);
  loader.earnings(window.pageData.data.index.earnings.heading)
  loader.admin(window.pageData.data.index.adminInfo)
  initFlipCounter(window.pageData.data.index.earnings.count);
  document.querySelector('.image-27').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'index.html';
  });
});

// Scroll header animation
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
    console.warn("Header is Not Available");
  }
  lastScrollTop = scrollTop;
});

// Video lightbox open/close
window.addEventListener("load", () => {
  const testimonialEmbedVideo = document.getElementById("testimonial-embed-video");
  const openBtn = document.querySelector(".custom-video-btn.custom-button-bg__gradient");
  const closeBtn = document.querySelector(".w-lightbox-control.w-lightbox-close");

  if (openBtn && testimonialEmbedVideo) {
    openBtn.addEventListener("click", () => {
      testimonialEmbedVideo.classList.remove("embed-video-hide");
      setTimeout(() => testimonialEmbedVideo.classList.add("embed-video-lightbox-open"), 1);
    });
  }

  if (closeBtn && testimonialEmbedVideo) {
    closeBtn.addEventListener("click", () => {
      testimonialEmbedVideo.classList.remove("embed-video-lightbox-open");
      setTimeout(() => testimonialEmbedVideo.classList.add("embed-video-hide"), 300);
    });
  }
});

// Flip counter variables
let $tick;

function setupFlip(tick) {
  const initialValue = parseInt(tick.root.getAttribute("data-value"), 10) || 0;
  tick.value = initialValue;
  $tick = tick;
  console.log($tick)
  console.log("setupFlip initialized with value:", initialValue);
}

function initFlipCounter(targetValue) {
  const tickElement = document.querySelector(".tick");
  if (!tickElement) {
    console.error("Tick element not found");
    return;
  }

  setupFlip({ root: tickElement });

  const targetElement = document.querySelector(".members__counter");
  if (!targetElement) {
    console.error("Members counter element not found");
    return;
  }

  const valueInterval = 111111;
  const timeInterval = 88;

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.05,
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        const tickInterval = Tick.helper.interval(() => {
          if ($tick.value >= targetValue) {
            $tick.value = targetValue;
            tickInterval.stop();
            console.log("Animation complete");
          } else {
            $tick.value += valueInterval;
          }
          $tick.root.setAttribute("data-value", $tick.value);

        }, timeInterval);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(targetElement);
}


