class TestimonialGrid extends HTMLElement {
    constructor() {
      super();
      
      this.testimonials = [];
    }
    async loadData(){
      try {
        const response = await fetch('./data/index/cards.json');  // your JSON URL here
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        this.testimonials = data.index.testomanial
        // console.log(data.testomanial)
        this.render();
      } catch (error) {
        console.error('Failed to load students data:', error);
      }
    }
    connectedCallback() {
      this.loadData();
    }

    chunkArray(arr, size) {
      const result = [];
      for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
      }
      return result;
    }

    createTestimonialCard(t, i) {
      return `
        <div class="${i % 2 === 1 ? "colu12-colrevew" : ""} column-39 w-col w-col-4">
          <div class="columns-25 w-row">
            <div class="w-col w-col-2"><h1 class="heading-88">${t.rating}</h1></div>
            <div class="w-col w-col-10">
              <img src="${t.starsImage}" loading="lazy" alt="stars" />
            </div>
          </div>
          <p class="paragraph-32">${t.text}</p>
          <div class="w-row">
            <div class="w-col w-col-3">
              <img src="${t.avatar}" loading="lazy" width="55" style="border-radius: 50%;" alt="avatar" />
            </div>
            <div class="w-col w-col-9">
              <p class="paragraph-33">
                <span class="text-span-9">${t.name}<br></span>${t.position}
              </p>
            </div>
          </div>
        </div>
      `;
    }

    render() {
      console.log(this.testimonials)
      const grouped = this.chunkArray(this.testimonials, 3);
      const rowsHTML = grouped
        .map(
          (group) => `
          <div class="columns-24 w-row">
            ${group.map((t, i) => this.createTestimonialCard(t, i)).join("")}
          </div>
        `
        )
        .join("");

      this.innerHTML = rowsHTML;
    }
  }

  customElements.define("testimonial-grid", TestimonialGrid);