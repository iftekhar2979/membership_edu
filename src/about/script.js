class Timeline {
  constructor() {
    this.timelineData = [];
  }
  byId(id) {
    return document.getElementById(id);
  }
  async loadData() {
    try {
      const response = await fetch("./data/index/cards.json");
      if (!response.ok) throw new Error("Failed to fetch data");
      const data = await response.json();
      this.timelineData = data.about_page;

    } catch (err) {
      this.innerHTML = `<p>Error loading data: ${err.message}</p>`;
    }
  }
  // Create individual timeline item HTML
  createTimelineItem(item) {
    return `
      <div role="listitem" class="w-dyn-item">
        <div data-w-id="7bc2019d-db85-8525-9d61-467225166264" class="w-layout-grid story__grid">
          <div class="story__left">
            <div class="story-card">
              <div class="story-card__c-img">
                <div class="story-card__inner">
                  <img src="${item.img}" loading="lazy" alt="${item.alt}" sizes="(max-width: 479px) 87vw, (max-width: 767px) 92vw, (max-width: 991px) 94vw, 29vw" class="story-card__img"/>
                  <img src="https://assets-global.website-files.com/6478a8ada70541eef2afb81f/64f18c15ed886d13a65a1032_inc5000-sticker.webp" loading="lazy" alt="America's Fastest Growing - Inc. 5000" class="story-card__inc5000-sticker w-condition-invisible"/>
                </div>
              </div>
            </div>
          </div>
          <div id="w-node-_7bc2019d-db85-8525-9d61-467225166275-1a698aa1" class="story__center">
            <div class="story__dot">
              <div class="story-dot__color is--gradient force--radius"></div>
              <div class="story-dot__color is--grey"></div>
            </div>
          </div>
          <div id="w-node-_7bc2019d-db85-8525-9d61-467225166277-1a698aa1" class="story__right">
            <div class="story-grid__c-text">
              <div class="story__date">${item.year}</div>
              <div class="story__title">${item.title}</div>
              <div class="story__paragraph">${item.subtitle}</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  journey() {
    const date= this.byId("started_data")
    const title= this.byId("started_title")
    const img= this.byId("started_img")
    const {year,title:titles,img:images}=this.timelineData.start_of_journey
    date.innerText = year 
    title.innerText = titles
    img.src = images;
  }
  renderTags(tags) {
    const container = document.querySelector(".about-us-tags__container");
    if (!container) {
      console.warn("Tags container not found");
      return;
    }
    container.innerHTML = ""; // Clear existing
    tags.forEach((tagText, index) => {
      // Create tag wrapper div
      const tagDiv = document.createElement("div");
      tagDiv.classList.add("about-us__tag");
      tagDiv.style.animationDelay = `${index * 0.5}s`;

      // Inner div
      const innerDiv = document.createElement("div");
      innerDiv.classList.add("about-us__tag-inner");

      // Text div
      const textDiv = document.createElement("div");
      textDiv.classList.add("about-us__tag-text");
      textDiv.textContent = tagText;

      // Append all
      innerDiv.appendChild(textDiv);
      tagDiv.appendChild(innerDiv);
      container.appendChild(tagDiv);
    });
  }
  teamMembers(teamMembers){
    
    const teamGrid = document.getElementById("w-node-_432cb75f-6683-fabd-f7a0-87cde3290be4-d0fd52f4");
    
    teamMembers.forEach(member => {
        const card = document.createElement("div");
        card.className = "w-layout-cell cell";
        card.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h1 class="heading-104">${member.name}</h1>
            <p class="paragraph-43">${member.designation}</p>
        `;
        teamGrid.appendChild(card);
    });
  }
  hero(hero){
    const heroElement = document.getElementById("hero");
    if (!heroElement) {
      console.warn("Hero Element Not found");
      return;
    }
    let info = `
      <h1 class="heading-106">
      <em class="italic-text-3" style="color:white">${hero.main_heading}</em>
      </h1>
      <p class="paragraph-14">
      <strong>${hero.sub_heading_bold}</strong>
      ${hero.sub_heading}
      </p>
      <p class="paragraph-13">
      ${hero.sub_title}
      </p>
      <div class="html-embed w-embed">
            <style>
              .heading-106,
              .heading-62,
              .heading-69,
              .paragraph-43,
              #bullet-title.w-row h3 {
                -webkit-text-fill-color: transparent;
                -webkit-background-clip: text;
                background-clip: text;
              }
              .heading-106 {
                background-image: linear-gradient(133deg, #fff, #83848e);
              }
              .heading-62 {
                background-image: linear-gradient(137deg, #fff 34%, #83848e);
              }
              .heading-69 {
                background-image: linear-gradient(170deg, #fc5bff, #bc2dff 37%);
              }
              .paragraph-43 {
                background-image: linear-gradient(#fc5bff, #bc2dff);
              }
              #bullet-title.w-row h3 {
                background-image: linear-gradient(to bottom, #fc5bff, #bc2dff);
              }
            </style>
          </div>
      <div id="bullet-title" class="maincol w-row">
            <div class="column-24 w-col w-col-3">
              <h3 class="heading-58"><em>${hero.cards[0].count}</em></h3>
              <div class="text-block-4">${hero.cards[0].title}</div>
            </div>
            <div class="column-24 w-col w-col-3">
              <h3 class="heading-58"><em>${hero.cards[1].count}</em></h3>
              <div class="text-block-4">${hero.cards[1].title}</div>
            </div>

            <div class="column-26 w-col w-col-3">
              <h3 class="heading-59"><em>${hero.cards[2].count}</em></h3>
              <div class="text-block-7">${hero.cards[2].title}</div>
            </div>
          </div>
          
      
      `;
    heroElement.innerHTML = info;
  }

  async render() {
    await this.loadData();

    const container = document.getElementById("journey_list");

    if (!container) {
      console.warn("Timeline container not found");
      return;
    }
    this.renderTags(this.timelineData.second_hero.tags)
    this.teamMembers(this.timelineData.team_members)
    this.journey()
    this.hero(this.timelineData.hero)
    // Map through the timeline data and generate HTML for each item
    const timelineHTML = this.timelineData.journey
      .map((item) => this.createTimelineItem(item))
      .join("");
    container.innerHTML = timelineHTML;
  }
}

function openModal(imgSrc) {
  const modal = document.getElementById("imageModal${item.img}");
  const modalImage = document.getElementById("modalImage${item.img}");
  modal.style.display = "flex";
  modalImage.src = imgSrc;
}
document.addEventListener("DOMContentLoaded", () => {
  const body_2 = document.body;
  body_2.addEventListener("mousemove", handleMouseMove_2);

  function handleMouseMove_2(event) {
    const offsetX =
      ((event.clientX - window.innerWidth / 2) / window.innerWidth) * 20;
    const offsetY =
      ((event.clientY - window.innerHeight / 2) / window.innerHeight) * 20;

    const productIcon = document.querySelector(".section .is--linkedin");
    productIcon.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
    const productBlur = document.querySelector(".is--big");
    productBlur.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;

    const productIconImage = document.querySelector(".is--icon.is--big");
    // console.log("Product Icon",productIconImage)
    productIconImage.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
  }

  body_2.addEventListener("mouseleave", () => {
    const productIcon = document.querySelector(".section .is--linkedin");
    productIcon.style.transform = "translate3d(0, 0, 0)";

    const productBlur = document.querySelector(".product-icon__blur.is--big");
    productBlur.style.transform = "translate3d(0, 0, 0)";

    const productIconImage = document.querySelector(
      ".product__icon-2.is--icon.is--big"
    );
    productIconImage.style.transform = "translate3d(0, 0, 0)";
  });

  // Animation loop function
  function animate_2() {
    // Calculate scale value between 0 and 1.2
    const scale = Math.min(
      1.3,
      Math.max(0, Math.sin(Date.now() / 1000) * 0.2 + 1)
    );

    // Apply transform with scale3d to the element
    const productBlur = document.querySelector(
      ".product__icon,is--icon.is--big"
    );
    // console.log(productBlur)
    productBlur.style.transform = `translate3d(0px, 0px, 0px) scale3d(${scale}, ${scale}, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;

    // Call animate function again for the next frame
    requestAnimationFrame(animate_2);
  }
  animate_2();
  // footer before logo animation
  body_2.addEventListener("mousemove", handleMouseMove_1);

  function handleMouseMove_1(event) {
    const offsetX =
      ((event.clientX - window.innerWidth / 2) / window.innerWidth) * 20;
    const offsetY =
      ((event.clientY - window.innerHeight / 2) / window.innerHeight) * 20;

    const productIcon = document.querySelector(
      ".product__c-icon-1.is--big.is--linkedin-1"
    );
    productIcon.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;

    const productBlur = document.querySelector(".product-icon__blur-1.is--big");
    // console.log(productBlur)
    productBlur.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;

    const productIconImage = document.querySelector(
      ".product__icon-1.is--icon.is--big"
    );
    productIconImage.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
  }

  body_2.addEventListener("mouseleave", () => {
    const productIcon = document.querySelector(
      ".product__c-icon-1.is--big.is--linkedin-1"
    );
    productIcon.style.transform = "translate3d(0, 0, 0)";

    const productBlur = document.querySelector(".product-icon__blur-1.is--big");
    productBlur.style.transform = "translate3d(0, 0, 0)";

    const productIconImage = document.querySelector(
      ".product__icon-1.is--icon.is--big"
    );
    productIconImage.style.transform = "translate3d(0, 0, 0)";
  });

  // Animation loop function
  function animate_1() {
    // Calculate scale value between 0 and 1.2
    const scale = Math.min(
      1.3,
      Math.max(0, Math.sin(Date.now() / 1000) * 0.2 + 1)
    );

    // Apply transform with scale3d to the element
    const productBlur = document.querySelector(".product-icon__blur-1.is--big");
    productBlur.style.transform = `translate3d(0px, 0px, 0px) scale3d(${scale}, ${scale}, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;

    requestAnimationFrame(animate_1);
  }

  animate_1();

  body_2.addEventListener("mousemove", handleMouseMove);

  function handleMouseMove(event) {
    const offsetX =
      ((event.clientX - window.innerWidth / 2) / window.innerWidth) * 20;
    const offsetY =
      ((event.clientY - window.innerHeight / 2) / window.innerHeight) * 20;

    const productIcon = document.querySelector(
      ".product__c-icon.is--big.is--linkedin"
    );
    productIcon.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;

    const productBlur = document.querySelector(".product-icon__blur.is--big");
    productBlur.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;

    const productIconImage = document.querySelector(
      ".product__icon.is--icon.is--big"
    );
    productIconImage.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
  }

  body_2.addEventListener("mouseleave", () => {
    const productIcon = document.querySelector(
      ".product__c-icon.is--big.is--linkedin"
    );
    productIcon.style.transform = "translate3d(0, 0, 0)";

    const productBlur = document.querySelector(".product-icon__blur.is--big");
    productBlur.style.transform = "translate3d(0, 0, 0)";

    const productIconImage = document.querySelector(
      ".product__icon.is--icon.is--big"
    );
    productIconImage.style.transform = "translate3d(0, 0, 0)";
  });

  // Animation loop function
  function animate() {
    // Calculate scale value between 0 and 1.2
    const scale = Math.min(
      1.3,
      Math.max(0, Math.sin(Date.now() / 1000) * 0.2 + 1)
    );

    // Apply transform with scale3d to the element
    const productBlur = document.querySelector(".product-icon__blur.is--big");
    productBlur.style.transform = `translate3d(0px, 0px, 0px) scale3d(${scale}, ${scale}, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;

    // Call animate function again for the next frame
    requestAnimationFrame(animate);
  }

  // Start the animation loop
  animate();

  // Animation loop function
  function animateRotation() {
    // Calculate rotation angle between 0 and 360 degrees
    const rotationAngle = 360 - (((Date.now() / 1000) * 60) % 360);

    // Apply transform with rotateZ to the element
    const productLineLoop = document.querySelector(".product__line-loop");
    productLineLoop.style.transform = `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${rotationAngle}deg) skew(0deg, 0deg)`;

    // Call animateRotation function again for the next frame
    requestAnimationFrame(animateRotation);
  }

  // Start the reverse rotation animation loop
  animateRotation();

  const heading = document.getElementById('first-heading');
  console.log(heading)
  window.addEventListener('mousemove', (e) => {
    const xPercent = e.clientX / window.innerWidth;
    const yPercent = e.clientY / window.innerHeight;
  
    const maxTranslate = 20;
    const translateX = (xPercent - 0.5) * maxTranslate;
    const translateY = (yPercent - 0.5) * maxTranslate;
  
    heading.style.transform = `translate(${translateX}px, ${translateY}px)`;
  });
  
  window.addEventListener('scroll', () => {
    // Calculate scroll progress (0 at top, 1 at bottom)
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;
  
    // Map scrollPercent to a color gradient, e.g. from purple to pink
    // You can customize colors here:
    const startColor = { r: 94, g: 43, b: 159 };   // #5e2b9f purple
    const endColor = { r: 255, g: 105, b: 180 };   // hotpink-ish #ff69b4
  
    // Interpolate colors linearly
    const r = Math.round(startColor.r + (endColor.r - startColor.r) * scrollPercent);
    const g = Math.round(startColor.g + (endColor.g - startColor.g) * scrollPercent);
    const b = Math.round(startColor.b + (endColor.b - startColor.b) * scrollPercent);
  
    heading.style.color = `rgb(${r}, ${g}, ${b})`;
  });
  
  const timeline = new Timeline();
  timeline.render();

});
