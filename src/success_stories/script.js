const tabsData = {
  "students-interview": {
    heading: "Student Interviews",
    paragraph: `Step into the world of career transformation with inspiring interviews
          from students who went from zero cloud experience to landing
          high-paying roles in tech. From help desk jobs and non-tech
          backgrounds to remote Cloud Engineer positions earning $130K or more,
          their stories are proof of what’s possible with the right mentorship,
          hands-on training, and a proven system like CloudBootcamp.AI.`,
    items: [
      {
        img: "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/666822fdb0daa253e9dcef4e_maxresdefault.webp",
        videoLink:
          "https://www.youtube.com/embed/PsGZR9lsib4?si=P13v2CiC3oQUNGzb",
        title:
          "_smittythegoat_ $949k in 2 Months | Boniface Ogunti | Skool | Membership Community",
        name: "Kenny Smith",
        description:
          "Today we have kenon Smith also known on all social media platform as Smitty the goat...",
      },
    ],
  },
  "video-reviews": {
    heading: "Video Reviews",
    paragraph:
      "We are thrilled to share these students’ enthusiastic video reviews...",
    items: [
      {
        img: "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/664deb8fb6699fae5292e9e7_2.png",
        videoLink:
          "https://www.youtube.com/embed/kLlvm0gRnAE?si=DD1oRF7NUgvguhST",
      },
      {
        img: "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/664deb8fb6699fae5292e9e7_2.png",
        videoLink:
          "https://www.youtube.com/embed/kLlvm0gRnAE?si=DD1oRF7NUgvguhST",
      },
      {
        img: "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/664deb8fb6699fae5292e9e7_2.png",
        videoLink:
          "https://www.youtube.com/embed/kLlvm0gRnAE?si=DD1oRF7NUgvguhST",
      },
      {
        img: "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/664deb8fb6699fae5292e9e7_2.png",
        videoLink:
          "https://www.youtube.com/embed/kLlvm0gRnAE?si=DD1oRF7NUgvguhST",
      },
      {
        img: "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/664deb8fb6699fae5292e9e7_2.png",
        videoLink:
          "https://www.youtube.com/embed/kLlvm0gRnAE?si=DD1oRF7NUgvguhST",
      },
      
    ],
  },
  "success-posts": {
    heading: "Success Posts",
    paragraph:
      "A sneak peek into what our students are saying inside our community! With over 10,000 students, they share their success via Community, email, Trustpilot and more.",
    images: [
      "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/664ddf90f6fd03ee875155ac_7E97AB8B-8F96-4B39-9AC9-5862BF3D9040.jpg",
      "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/664ddff3430a6648269dab7e_IMG_3027.jpg",
      "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/664de0152cd78971fcd1b889_IMG_3039.jpg",
      "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/664de04fdaff1decb662087e_IMG_7924.jpg",
      // add more images as needed
    ],
  },
  "submit-your-success": {
    heading: "Submit Your Success",
    paragraphs: [
      "Did you have an incredible experience with MembershipEDU.com? We'd love to know all about it.",
      "Your feedback matters! By sharing your thoughts, you can help inspire other students.",
    ],
    buttonText: "Submit",
    buttonUrl: "#",
  },
};

window.onload = () => {
  document.querySelectorAll(".section-14 a.butt.w-button").forEach((item) => {
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
  const youtubeVideo = testimonialEmbedVideo.querySelector("iframe");
  document.querySelectorAll(".testimonial-video-thumbnail").forEach((item) => {
    item.addEventListener("click", () => {
      youtubeVideo.src = item.getAttribute("data-video-embed-link");
      testimonialEmbedVideo.classList.remove("embed-video-hide");
      setTimeout(
        () => testimonialEmbedVideo.classList.add("embed-video-lightbox-open"),
        1
      );
    });
  });
  document
    .querySelector(".w-lightbox-control.w-lightbox-close")
    .addEventListener("click", () => {
      testimonialEmbedVideo.classList.remove("embed-video-lightbox-open");
      setTimeout(() => {
        testimonialEmbedVideo.classList.add("embed-video-hide");
        youtubeVideo.src = "";
      }, 300);
    });
};


function successInterviewRender(){
  document.addEventListener("DOMContentLoaded", () => {
    const successContainer = document.getElementById("tab-students-interview");
    if (!successContainer) return;
  
    // Assuming tabsData.students-interview.items is an array of interview objects
    const interviewsInfo = tabsData["students-interview"];
    const interviews = tabsData["students-interview"].items;
    if (!interviews || !Array.isArray(interviews)) return;
  
    // Add the banner to the container
    let banner = `<div class="w-layout-blockcontainer container-35 w-container">
          <h3 class="heading-78">${interviewsInfo.heading}</h3>
          <p class="paragraph-17">
          ${interviewsInfo.paragraph}
          </p>
        </div>`;
    successContainer.innerHTML += banner;
    // Generate all HTML and append it
    interviews.forEach((item) => {
      successContainer.innerHTML += successInterviews(item);
    });
  });
  
  function successInterviews(item) {
  return `<div class="columns-14 w-row">
    <div class="column-30 w-col w-col-6">
      <img
        class="image-21 testimonial-video-thumbnail"
        data-video-embed-link="${item.videoLink}"
        src="${item.img}"
        alt=""
        sizes="(max-width: 479px) 89vw, (max-width: 767px) 42vw, (max-width: 991px) 44vw, 45vw"
        loading="lazy"
      />
    </div>
    <div class="w-col w-col-6">
      <h4 class="heading-74">${item.title}<br />
      </h4>
      <p class="paragraph-19">
        <span class="text-span-4">${item.name}</span>
      </p>
      <p class="paragraph-19">
        ${item.description}
      </p>
    </div>
  </div>`;
}

}
function offerLetter (){
  document.addEventListener("DOMContentLoaded", () => {
    const successContainer = document.getElementById("tab-video-reviews");
    if (!successContainer) return;
  
    const interviewsInfo = tabsData["video-reviews"];
    const interviews = interviewsInfo.items;
    if (!interviews || !Array.isArray(interviews)) return;
  
    // Helper function to chunk array into groups of n
    function chunkArray(arr, size) {
      const chunks = [];
      for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
      }
      return chunks;
    }
  
    // Split interviews into groups of 3
    const chunks = chunkArray(interviews, 3);
  
    // Generate rows HTML
    const rowsHTML = chunks.map(chunk => {
      const cardsHTML = chunk.map(item => offerLetterItems(item)).join("");
      return `<div class="columns-59 w-row">${cardsHTML}</div>`;
    }).join("");
  
    // Compose full HTML with banner + rows
    const fullHTML = `
      <div class="w-layout-blockcontainer container-36 w-container">
        <h3 class="heading-78">${interviewsInfo.heading}</h3>
        <p class="paragraph-20">${interviewsInfo.paragraph}</p>
        ${rowsHTML}
      </div>
    `;
  
    successContainer.innerHTML = fullHTML;
  });
}
successInterviewRender()
offerLetter()


function successInterviews(item) {
  return `<div class="columns-14 w-row">
    <div class="column-30 w-col w-col-6">
      <img
        class="image-21 testimonial-video-thumbnail"
        data-video-embed-link="${item.videoLink}"
        src="${item.img}"
        alt=""
        sizes="(max-width: 479px) 89vw, (max-width: 767px) 42vw, (max-width: 991px) 44vw, 45vw"
        loading="lazy"
      />
    </div>
    <div class="w-col w-col-6">
      <h4 class="heading-74">${item.title}<br />
      </h4>
      <p class="paragraph-19">
        <span class="text-span-4">${item.name}</span>
      </p>
      <p class="paragraph-19">
        ${item.description}
      </p>
    </div>
  </div>`;
}

function offerLetterItems(item) {
  return `
    <div
      data-video-embed-link="${item.videoLink}"
      class="video-reviews-col testimonial-video-thumbnail w-col w-col-4"
   
    >
      <img
        src="${item.img}"
        loading="lazy"
        alt=""
        class="image-74 video-review-thumbnail"
      />
      <img
        src="https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/664df05128d2da83240c1b10_play-arrow.svg"
        loading="lazy"
        alt="Play button"
        class="image-80 play-btn-img"
      />
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("tab-success-posts");
  if (!container) return;

  const successPostsData = tabsData["success-posts"]
  container.innerHTML = generateSuccessPostsSection(successPostsData);
});

function generateSuccessPostsSection(data) {
  function chunkArray(arr, size = 2) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  }

  const imageRows = chunkArray(data.images, 2);

  const rowsHTML = imageRows
    .map(
      (rowImages) => `
      <div class="columns-15 w-row">
        ${rowImages
          .map(
            (imgUrl) => `
          <div class="column-31 w-col w-col-6">
            <img
              src="${imgUrl}"
              loading="lazy"
              sizes="100vw"
              alt=""
              class="image-22"
            />
          </div>
        `
          )
          .join("")}
      </div>
    `
    )
    .join("");

  return `
    <div class="w-layout-blockcontainer container-37 w-container">
      <h3 class="heading-78">${data.heading}</h3>
      <p class="paragraph-22">${data.paragraph}</p>
      ${rowsHTML}
    </div>
  `;
}


document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("tab-submit-your-success");
  if (!container) return;
  const submitSuccessData = tabsData["submit-your-success"]

  container.innerHTML = generateSubmitSuccessSection(submitSuccessData);
});

function generateSubmitSuccessSection(data) {
  const paragraphsHTML = data.paragraphs
    .map((p) => `<p class="paragraph-24">${p}</p>`)
    .join("");

  return `
    <div class="w-layout-blockcontainer container-14 w-container">
      <h3 class="heading-78">${data.heading}</h3>
      ${paragraphsHTML}
      <a href="${data.submitLink}" class="button-5-btc w-button">${data.submitText}</a>
    </div>
  `;
}
