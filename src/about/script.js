document.addEventListener("DOMContentLoaded",()=>{
  const body_2 = document.body;
  body_2.addEventListener("mousemove", handleMouseMove_2);

  function handleMouseMove_2(event) {
    const offsetX =
      ((event.clientX - window.innerWidth / 2) / window.innerWidth) *
      20;
    const offsetY =
      ((event.clientY - window.innerHeight / 2) /
        window.innerHeight) *
      20;
  

    const productIcon = document.querySelector(
      ".section .is--linkedin"
    );
    productIcon.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
    const productBlur = document.querySelector(
      ".is--big"
    );
    productBlur.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
  
    const productIconImage = document.querySelector(
      ".is--icon.is--big"
    );
    // console.log("Product Icon",productIconImage)
    productIconImage.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
  }
  
  body_2.addEventListener("mouseleave", () => {
    const productIcon = document.querySelector(
      ".section .is--linkedin"
    );
    productIcon.style.transform = "translate3d(0, 0, 0)";
  
    const productBlur = document.querySelector(
      ".product-icon__blur.is--big"
    );
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
    const productBlur = document.querySelector(".product__icon,is--icon.is--big");
    // console.log(productBlur)
    productBlur.style.transform = `translate3d(0px, 0px, 0px) scale3d(${scale}, ${scale}, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
  
    // Call animate function again for the next frame
    requestAnimationFrame(animate_2);
  }
  animate_2()
  // footer before logo animation 
  body_2.addEventListener("mousemove", handleMouseMove_1);
  
  function handleMouseMove_1(event) {
    const offsetX =
      ((event.clientX - window.innerWidth / 2) / window.innerWidth) *
      20;
    const offsetY =
      ((event.clientY - window.innerHeight / 2) /
        window.innerHeight) *
      20;
  
    const productIcon = document.querySelector(".product__c-icon-1.is--big.is--linkedin-1");
    productIcon.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
  
    const productBlur = document.querySelector(
      ".product-icon__blur-1.is--big"
    );
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
  
    const productBlur = document.querySelector(
      ".product-icon__blur-1.is--big"
    );
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
    const productBlur = document.querySelector(
      ".product-icon__blur-1.is--big"
    );
    productBlur.style.transform = `translate3d(0px, 0px, 0px) scale3d(${scale}, ${scale}, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
  
    requestAnimationFrame(animate_1);
  }
  
  animate_1();
  
  body_2.addEventListener("mousemove", handleMouseMove);
  
  function handleMouseMove(event) {
    const offsetX =
      ((event.clientX - window.innerWidth / 2) / window.innerWidth) *
      20;
    const offsetY =
      ((event.clientY - window.innerHeight / 2) /
        window.innerHeight) *
      20;
  
    const productIcon = document.querySelector(
      ".product__c-icon.is--big.is--linkedin"
    );
    productIcon.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
  
    const productBlur = document.querySelector(
      ".product-icon__blur.is--big"
    );
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
  
    const productBlur = document.querySelector(
      ".product-icon__blur.is--big"
    );
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
    const productBlur = document.querySelector(
      ".product-icon__blur.is--big"
    );
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
    const productLineLoop = document.querySelector(
      ".product__line-loop"
    );
    productLineLoop.style.transform = `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${rotationAngle}deg) skew(0deg, 0deg)`;
  
    // Call animateRotation function again for the next frame
    requestAnimationFrame(animateRotation);
  }
  
  // Start the reverse rotation animation loop
  animateRotation();
})

class Timeline {
  constructor(timelineData) {
    this.timelineData = timelineData;
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
              <div class="story__date">${item.date}</div>
              <div class="story__title">${item.title}</div>
              <div class="story__paragraph">${item.description}</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Render all timeline items
  render() {
    const container = document.querySelector(".w-layout-blockcontainer.container-30.w-container");
    console.log(container)
    if (!container) {
      console.warn("Timeline container not found");
      return;
    }
    
    // Map through the timeline data and generate HTML for each item
    const timelineHTML = this.timelineData.map(item => this.createTimelineItem(item)).join('');
    container.innerHTML = timelineHTML;
  }
}

// Example timeline data
const timelineData = [
  {
    img: "https://assets-global.website-files.com/65fc810e091c7ea4dc2da4c1/6634a7a9a29b4063aae530c2_time%20line%20(1).png",
    alt: "Over $10,000,000 in revenue",
    date: "8. 2024",
    title: "– 340+ Students Transformed",
    description: "Our students have gone from stuck in Help Desk or non-tech jobs to making $130K–$200K+ remotely as Cloud Engineers."
  },
  {
    img: "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/66324bf40979f85a318111e4_320191333_916238042730046_4616928834897467278_n.jpg",
    alt: "Audiobook Impact Academy",
    date: "7. 2023",
    title: "– Launching CloudBootcamp.AI",
    description: "I launched a mentorship-based 8-week program designed to help others skip the guesswork and break into cloud."
  },
  // Add more timeline items here as needed
];

// Initialize the timeline component and render the timeline
const timeline = new Timeline(timelineData);
timeline.render();
