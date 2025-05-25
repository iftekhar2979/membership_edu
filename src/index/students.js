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
      this.students = data.students || [];
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
      <div class="swiper-slide__card" style="filter: ${slide.filter}">
        <img
          src="${slide.img}"
          alt="${slide.alt}"
          class="swiper-card__img"
        />
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