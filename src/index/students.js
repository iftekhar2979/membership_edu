class Students extends HTMLElement {
  constructor() {
    super();

    this.students = [
      {
        img: "https://assets-global.website-files.com/65fc810e091c7ea4dc2da4c1/662b89c73251e1f5215ca33f_Mtrail.png",
        alt: "01",
        title: "Speech Therapy for Toddlers",
        subtitle: "Generates $2,493 per month",
        filter: "blur(6px)",
        ariaLabel: "7 / 7",
        dataIndex: 6,
        zIndex: -2,
        transform:
          "translate3d(0px, 0px, -600.083px) rotateX(0deg) rotateY(0deg) scale(1)",
        extraClasses: "swiper-slide-duplicate swiper-slide-visible",
      },
      {
        img: "https://assets-global.website-files.com/65fc810e091c7ea4dc2da4c1/662b89c75089b294cdca7cde_Tiffany.png",
        alt: "07",
        title: "Repairing the Heartbreak of Pet Loss Grief",
        subtitle: "Generates $3,344 per month",
        filter: "blur(4px)",
        ariaLabel: "1 / 7",
        dataIndex: 0,
        zIndex: -1,
        transform:
          "translate3d(0px, 0px, -400px) rotateX(0deg) rotateY(0deg) scale(1)",
        extraClasses: "swiper-slide-visible",
      },
      {
        img: "https://assets-global.website-files.com/65fc810e091c7ea4dc2da4c1/662b89c7fd72e6a6e7d90984_Nancie.png",
        alt: "05",
        title: "The Credit Game",
        subtitle: "Generates $1,769 per month",
        filter: "blur(0px)",
        ariaLabel: "3 / 7",
        dataIndex: 2,
        zIndex: 1,
        transform:
          "translate3d(0px, 0px, -0.166667px) rotateX(0deg) rotateY(0deg) scale(1)",
        extraClasses: "swiper-slide-visible swiper-slide-active",
      },
    ];
  }
  connectedCallback() {
    this.render();
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