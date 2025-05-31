// const tabsData = {
//   "students-interview": {
//     heading: "Student Interviews",
//     paragraph: `Step into the world of career transformation with inspiring interviews
//           from students who went from zero cloud experience to landing
//           high-paying roles in tech. From help desk jobs and non-tech
//           backgrounds to remote Cloud Engineer positions earning $130K or more,
//           their stories are proof of what’s possible with the right mentorship,
//           hands-on training, and a proven system like CloudBootcamp.AI.`,
//     items: [
//       {
//         img: "./images/thumbnails/greg.png",
//         videoLink:
//           "https://player.vimeo.com/video/1088413792?h=d708484680&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
//         title:
//           "_smittythegoat_ $949k in 2 Months | Boniface Ogunti | Skool | Membership Community",
//         name: "Kenny Smith",
//         description:
//           "Today we have kenon Smith also known on all social media platform as Smitty the goat...",
//       },
//     ],
//   },
//   "video-reviews": {
//     heading: "Offer Letters",
//     paragraph:
//       "No hype, just receipts. These offer letters show the real-life transformations of students who broke into tech and secured high-paying roles.",
//     items: [
//       {
//         img: "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/664deb8fb6699fae5292e9e7_2.png",
//         videoLink:
//           "https://www.youtube.com/embed/kLlvm0gRnAE?si=DD1oRF7NUgvguhST",
//       },
//       {
//         img: "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/664deb8fb6699fae5292e9e7_2.png",
//         videoLink:
//           "https://www.youtube.com/embed/kLlvm0gRnAE?si=DD1oRF7NUgvguhST",
//       },
//       {
//         img: "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/664deb8fb6699fae5292e9e7_2.png",
//         videoLink:
//           "https://www.youtube.com/embed/kLlvm0gRnAE?si=DD1oRF7NUgvguhST",
//       },
//       {
//         img: "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/664deb8fb6699fae5292e9e7_2.png",
//         videoLink:
//           "https://www.youtube.com/embed/kLlvm0gRnAE?si=DD1oRF7NUgvguhST",
//       },
//       {
//         img: "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/664deb8fb6699fae5292e9e7_2.png",
//         videoLink:
//           "https://www.youtube.com/embed/kLlvm0gRnAE?si=DD1oRF7NUgvguhST",
//       },
      
//     ],
//   },
//   "success-posts": {
//     heading: "Success Posts",
//     paragraph:
//       "Take a look inside our Slack community where 340 students are sharing life changing wins, from $130K+ salaries and $8K/month contracts to landing remote roles every single day.",
//     images: [
//       "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/664ddf90f6fd03ee875155ac_7E97AB8B-8F96-4B39-9AC9-5862BF3D9040.jpg",
//       "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/664ddff3430a6648269dab7e_IMG_3027.jpg",
//       "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/664de0152cd78971fcd1b889_IMG_3039.jpg",
//       "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/664de04fdaff1decb662087e_IMG_7924.jpg",
//       // add more images as needed
//     ],
//   },
//   "submit-your-success": {
//     heading: "Submit Your Success",
//     paragraphs: [
//       "Did you have an incredible experience with MembershipEDU.com? We'd love to know all about it.",
//       "Your feedback matters! By sharing your thoughts, you can help inspire other students.",
//     ],
//     buttonText: "Submit",
//     buttonUrl: "#",
//   },
// };


class SuccessContent {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
    this.tabsData = null;
  }

  async fetchData() {
    try {
      const res = await fetch(this.apiUrl);
      if (!res.ok) throw new Error("Network response was not ok");
       let data = await res.json();
       this.tabsData = data.success_page
      // console.log(this.tabsData)
    } catch (err) {
      console.error("Failed to fetch tabsData:", err);
    }
  }

  renderStudentInterviews() {
    if (!this.tabsData) return;
    const successContainer = document.getElementById("tab-students-interview");
    if (!successContainer) return;
// console.log("tab",this.tabsData)
    const interviewsInfo = this.tabsData["students-interview"];
    // console.log(interviewsInfo)
    const interviews = interviewsInfo?.items;
    if (!interviews || !Array.isArray(interviews)) return;

    let banner = `
      <div class="w-layout-blockcontainer container-35 w-container">
        <h3 class="heading-78">${interviewsInfo.heading}</h3>
        <p class="paragraph-17">${interviewsInfo.paragraph}</p>
      </div>`;
    successContainer.innerHTML += banner;

    interviews.forEach(item => {
      successContainer.innerHTML += this.successInterviews(item);
    });
  }

  successInterviews(item) {
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
        <h4 class="heading-74">${item.title}<br /></h4>
        <p class="paragraph-19">
          <span class="text-span-4">${item.name}</span>
        </p>
        <p class="paragraph-19">${item.description || ""}</p>
      </div>
    </div>`;
  }

  renderOfferLetters() {
    if (!this.tabsData) return;
    const successContainer = document.getElementById("tab-video-reviews");
    if (!successContainer) return;

    const interviewsInfo = this.tabsData["video-reviews"];
    const interviews = interviewsInfo?.items;
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
      const cardsHTML = chunk.map(item => this.offerLetterItems(item)).join("");
      return `<div class="columns-59 w-row">${cardsHTML}</div>`;
    }).join("");

    // Compose full HTML with banner + rows
    const fullHTML = `
      <div class="w-layout-blockcontainer container-36 w-container">
        <h3 class="heading-78">${interviewsInfo.heading}</h3>
        <p class="paragraph-17">${interviewsInfo.paragraph}</p>
        ${rowsHTML}
      </div>
    `;

    successContainer.innerHTML = fullHTML;
  }

  offerLetterItems(item) {
    return `
      <div class="offer-student-card">
  <div class="offer-student-card__offer-image">
    <img
      src="${item.img}"
      alt="Offer Letter Screenshot"
      loading="lazy"
      class="offer-letter-img"
      style="cursor: pointer;"
    />
  </div>
  <div class="offer-student-card__student-info">
    <img
      src="${item.student_profile}"
      alt="Student Photo"
      class="offer-student-card__student-photo"
      loading="lazy"
    />
    <h3 class="offer-student-card__student-name">${item.name}</h3>
    <p class="" style="    font-size: clamp(1rem, 2vw, 1rem);
    font-weight: bold;">$ ${item.salary}</p>
    <button class="" style=" background: #5858cb;
    border-radius: 5%;
    margin: 2%;
    padding: 3%;
    font-size: 1rem;
    color: white;
    cursor: pointer;">Click me to see offer letter
    </button>
  </div>
</div>


    `;
  }
  renderSuccessPosts() {
    if (!this.tabsData) return;
    const container = document.getElementById("tab-success-posts");
    if (!container) return;

    const data = this.tabsData["success-posts"];
    container.innerHTML = this.generateSuccessPostsSection(data);
  }

  generateSuccessPostsSection(data) {
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
            <div class="column-31 w-col w-col-6 offer-card">
              <img
                src="${imgUrl}"
                loading="lazy"
                sizes="100vw"
                alt=""
                class="image-22 offer-student-card__offer-image"
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
        <p class="paragraph-17">${data.paragraph}</p>
       <p style="
  padding: 12px 24px;
  margin: 3%;
  font-size: 1rem;
  color: rgb(250 249 251);
  cursor: pointer;
  text-align: center;
  text-shadow:
    0 0 5px #5e2b9f,
    0 0 10px #5e2b9f,
    0 0 20px #5e2b9f,
    0 0 40px #5e2b9f;
  box-shadow:
    0 0 5px #5e2b9f,
    0 0 10px #5e2b9f,
    0 0 20px #5e2b9f,
    0 0 40px #5e2b9f;
  animation: neonGlow 3s ease-in-out infinite alternate;
">

  Click on Screenshots
</p>

<style>
@keyframes neonGlow {
  0% {
    text-shadow:
      0 0 5px #5e2b9f,
      0 0 10px #5e2b9f,
      0 0 20px #5e2b9f,
      0 0 40px #5e2b9f;
    box-shadow:
      0 0 5px #5e2b9f,
      0 0 10px #5e2b9f,
      0 0 20px #5e2b9f,
      0 0 40px #5e2b9f;
  }
  100% {
    text-shadow:
      0 0 10px #7a53c6,
      0 0 20px #7a53c6,
      0 0 30px #7a53c6,
      0 0 60px #7a53c6;
    box-shadow:
      0 0 10px #7a53c6,
      0 0 20px #7a53c6,
      0 0 30px #7a53c6,
      0 0 60px #7a53c6;
  }
}
</style>
        ${rowsHTML}
      </div>
    `;
  }


  async init() {
    await this.fetchData();
    this.renderStudentInterviews();
    this.renderOfferLetters();
    this.renderSuccessPosts();
  }
}

// Replace 'your-api-url-here' with your actual API endpoint that returns tabsData JSON
const successContent = new SuccessContent("./data/index/cards.json");
document.addEventListener("DOMContentLoaded", () => {
  successContent.init();
});

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
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener('click', event => {
    const container = event.target.closest('.offer-student-card');
    if (!container) return;
  
    const offerImg = container.querySelector('.offer-student-card__offer-image img');
    if (!offerImg) return;
  
    let modal = document.getElementById('imageModal');
    let modalImg = document.getElementById('modalImage');
  
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'imageModal';
      modal.style.cssText = `
        display: block; position: fixed; z-index: 9999; padding-top: 8%;
        left: 0; top: 0; width: 100vw; height: 100vh; overflow: auto;
        background-color: rgba(0, 0, 0, 0.8);
      `;
      modal.innerHTML = `
        <span id="modalClose" style="
          position: absolute; top: 20px; right: 30px; color: white;
          font-size: 36px; font-weight: bold; cursor: pointer;
        ">&times;</span>
        <img id="modalImage" style="
          margin: auto; display: block; max-width: 90vw; max-height: 80vh;
          border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.8);
        " alt="Offer Letter Full View" />
      `;
      document.body.appendChild(modal);
  
      document.getElementById('modalClose').onclick = () => modal.style.display = 'none';
      modal.onclick = e => {
        if (e.target === modal) modal.style.display = 'none';
      };
  
      modalImg = document.getElementById('modalImage'); // get after creation
    } else {
      modal.style.display = 'block';
    }
  
    // Set the modal image src and alt every time modal opens
    modalImg.src = offerImg.src;
    modalImg.alt = offerImg.alt;
  });
  document.body.addEventListener('click', event => {
    const container = event.target.closest('.offer-card');
    console.log('container',container)
    if (!container) return;
  
    const offerImg = container.querySelector('.image-22');
    if (!offerImg) return;
  
    let modal = document.getElementById('imageModal');
    let modalImg = document.getElementById('modalImage');
  
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'imageModal';
      modal.style.cssText = `
        display: block; position: fixed; z-index: 9999; padding-top: 8%;
        left: 0; top: 0; width: 100vw; height: 100vh; overflow: auto;
        background-color: rgba(0, 0, 0, 0.8);
      `;
      modal.innerHTML = `
        <span id="modalClose" style="
          position: absolute; top: 20px; right: 30px; color: white;
          font-size: 36px; font-weight: bold; cursor: pointer;
        ">&times;</span>
        <img id="modalImage" style="
          margin: auto; display: block; max-width: 90vw; max-height: 80vh;
          border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.8);
        " alt="Offer Letter Full View" />
      `;
      document.body.appendChild(modal);
  
      document.getElementById('modalClose').onclick = () => modal.style.display = 'none';
      modal.onclick = e => {
        if (e.target === modal) modal.style.display = 'none';
      };
  
      modalImg = document.getElementById('modalImage'); // get after creation
    } else {
      modal.style.display = 'block';
    }
  
    // Set the modal image src and alt every time modal opens
    modalImg.src = offerImg.src;
    modalImg.alt = offerImg.alt;
  });
  
});
