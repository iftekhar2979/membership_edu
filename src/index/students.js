class Students extends HTMLElement {
  constructor() {
    super();

    this.students = []
  }
  async loadData() {
    try {
      const response = await fetch('./data/index/cards.json');  // your JSON URL here
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      // console.log(data)
      this.students = data.index.students || [];
      this.render();
    } catch (error) {
      console.error('Failed to load students data:', error);
    }
  }
  connectedCallback() {
    this.loadData();
  }

  createStudentCards(slide) {
    return `<div
      role="group"
      class="swiper-slide w-dyn-item ${slide.extraClasses}"
      style="
        width: 342.857px;
        transition-duration: 0ms;
        transform: ${slide.transform};
        z-index: ${slide.zIndex};
      "
      aria-label="${slide.ariaLabel}"
      data-swiper-slide-index="${slide.dataIndex}"
    >
 
<div style="
  width: 300px; 
  height: 440px; 
  background: linear-gradient(180deg, #1c0058 0%, #2f005a 100%);
  color: #b1a1c7;
  font-family: Arial, sans-serif;
  position: relative;
  padding: 40px 20px 20px 20px;
  box-sizing: border-box;
  border-radius: 3%;
  overflow: hidden;
"
class="swiper-slide__card"
>

  <!-- Large purple circles as background rounded borders -->
  <div style="
    position: absolute;
    width: 90%;
    height: 80%;
    border: 3.5px solid #823141;
    border-radius: 50%;
    bottom: -150px;
    left: -120px;
    pointer-events: none;
  "></div>

  <div style="
    position: absolute;
    width: 105%;
    height: 78%;
    border: 3.5px solid rgb(114 48 167 / 70%);
    border-radius: 50%;
    top: -20%;
    right: -40%;
    pointer-events: none;
  "></div>

  <!-- Logo placeholder -->
  <div style="
    width: 50px; 
    height: 30px; 
    border-radius: 12px;
    margin-bottom: 30px;
    position: relative;
    z-index: 2;
  ">
  <img src="/images/small.png" alt="Logo"/>
  </div>

  <!-- Name -->
  <h1 style="
    font-weight: 700;
    font-size: 22px;
    margin: 0 0 15px 0;
    letter-spacing: 0.05em;
    position: relative;
    z-index: 2;
  ">${slide.title}</h1>
  <p style="
    font-weight: 700;
    font-size: 1rem;
    margin: 0 0 15px 0;
    letter-spacing: 0.05em;
    position: relative;
    z-index: 2;
  ">${slide.subtitle}</p>
  <p style="
    font-weight: 700;
    font-size: 1rem;
    margin: 0 0 15px 0;
    letter-spacing: 0.05em;
    position: relative;
    z-index: 2;
  ">Salary : ${slide.salary}</p>

  <!-- Subtitle -->
  <p style="
    font-weight: 400;
    font-size: 14px;
    line-height: 1.4;
    max-width: 220px;
    margin: 0;
    position: relative;
    z-index: 2;
  "></p>

  <!-- Circular image container -->
  <div style="
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 160px;
    height: 160px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
    z-index: 3;
  ">
    <img src="${slide.img}" alt="${slide.title}" style="
      width: 100%; 
      height: 100%; 
      object-fit: cover;
    " />
  </div>

  <!-- Linked icon at bottom center -->
  <div style="
    position: absolute;
    bottom: 10px;
    left: 0;
    transform: translateX(-50%);
    z-index: 4;
  ">
    <a href="${slide.linkedIn}" target="_blank" rel="noopener noreferrer" style="display: inline-block; width: 32px; height: 32px;">
      <!-- LinkedIn SVG Icon -->
     <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48" style=
   " left: 60%;
    position: relative;"
>
<path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"></path><path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"></path><path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"></path><path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"></path>
</svg>
    </a>
  </div>

</div>

</div>


        <div class="swiper-card__c-text">
          <div class="swiper-card__text text--black">
            ${slide.title}
          </div>
          <div class="swiper-card__text text--dark-blue-grey is--hidden">
            ${slide.subtitle}
          </div>
        </div>
      </div>
    </div>`;
  }
  render() {
    const container = document.getElementById("swiper-wrapper-edb33598d2e4b67d");
    if (!container) {
      console.warn("Container with id 'swiper-wrapper-edb33598d2e4b67d' not found");
      return;
    }
    const rows = this.students.map(slide => this.createStudentCards(slide)).join("");
    container.innerHTML = rows; // inject slides inside external container
  }
  
}
customElements.define("student-carousel", Students);


{/* <img
src="${slide.img}"
alt="${slide.alt}"
class="swiper-card__img"
/> */}



   
// <div style="
//   width: 300px; 
//   height: 440px; 
//   background: linear-gradient(180deg, #1c0058 0%, #2f005a 100%);
//   color: #b1a1c7;
//   font-family: Arial, sans-serif;
//   position: relative;
//   padding: 40px 20px 20px 20px;
//   box-sizing: border-box;
//   border-radius: 3%;
//   overflow: hidden; /* Make sure circles don't overflow */
// ">

//   <!-- Large purple circles as background rounded borders -->
//   <div style="
//   position: absolute;
//     width: 90%;
//     height: 80%;
//     border: 3.5px solid #823141;
//     border-radius: 50%;
//     bottom: -150px;
//     left: -120px;
//     pointer-events: none;
//   "></div>

//   <div style="
//    position: absolute;
//     width: 105%;
//     height: 78%;
//     border: 3.5px solid rgb(114 48 167 / 70%);
//     border-radius: 50%;
//     top: -20%;
//     right: -40%;
//     pointer-events: none;
//   "></div>

//   <!-- Logo placeholder -->
//   <div style="
//     width: 50px; 
//     height: 30px; 
//     background: linear-gradient(90deg, #7d3abf 0%, #d44784 100%);
//     border-radius: 12px;
//     margin-bottom: 30px;
//     position: relative;
//     z-index: 2;
//   "></div>

//   <!-- Name -->
//   <h1 style="
//     font-weight: 700;
//     font-size: 22px;
//     margin: 0 0 15px 0;
//     letter-spacing: 0.05em;
//     position: relative;
//     z-index: 2;
//   ">${slide.title}</h1>

//   <!-- Subtitle -->
//   <p style="
//     font-weight: 400;
//     font-size: 14px;
//     line-height: 1.4;
//     max-width: 220px;
//     margin: 0;
//     position: relative;
//     z-index: 2;
//   "></p>

//   <!-- Circular image container with img tag -->
//   <div style="
//     position: absolute;
//     bottom: 20px;
//     right: 20px;
//     width: 160px;
//     height: 160px;
//     border-radius: 50%;
//     overflow: hidden;
//     box-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
//     z-index: 3;
//   ">
//     <img src="${slide.img}" alt="${slide.title}" style="
//       width: 100%; 
//       height: 100%; 
//       object-fit: cover;
//     " />
//   </div>