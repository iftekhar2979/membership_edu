class TestimonialGrid extends HTMLElement {
    constructor() {
      super();
      
      this.testimonials = [
        {
          rating: 5,
          starsImage:
            "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/662a054908e7e70cf04624f9_659999f9d0b9bf616d4e9332_stars.svg",
          text:
            "MembershipEDU.com affiliate program is simple: I get to earn by promoting things I truly stand behind. It's a win-win for me.",
          avatar:
            "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/662a062c16690044c10ee093_65a93870ff80265b0a5a6f64_New%20Mavie%206enhanced.webp",
          name: "Luis G.",
          position: "Green Diamond",
        },
        {
          rating: 5,
          starsImage:
            "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/662a054908e7e70cf04624f9_659999f9d0b9bf616d4e9332_stars.svg",
          text: "Great program and support.",
          avatar:
            "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/662a062c16690044c10ee093_65a93870ff80265b0a5a6f64_New%20Mavie%206enhanced.webp",
          name: "Anna K.",
          position: "Silver Member",
        },
        {
          rating: 5,
          starsImage:
            "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/662a054908e7e70cf04624f9_659999f9d0b9bf616d4e9332_stars.svg",
          text: "Highly recommend for affiliates.",
          avatar:
            "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/662a062c16690044c10ee093_65a93870ff80265b0a5a6f64_New%20Mavie%206enhanced.webp",
          name: "Mark T.",
          position: "Gold Member",
        },
        {
          rating: 5,
          starsImage:
            "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/662a054908e7e70cf04624f9_659999f9d0b9bf616d4e9332_stars.svg",
          text: "Love the affiliate program.",
          avatar:
            "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/662a062c16690044c10ee093_65a93870ff80265b0a5a6f64_New%20Mavie%206enhanced.webp",
          name: "Sophia L.",
          position: "Platinum Member",
        },
        {
            rating: 5,
            starsImage: "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/662a054908e7e70cf04624f9_659999f9d0b9bf616d4e9332_stars.svg",
            text: "Easy to promote and earn.",
            avatar: "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/662a062c16690044c10ee093_65a93870ff80265b0a5a6f64_New%20Mavie%206enhanced.webp",
            name: "David W.",
            position: "Bronze Member"
          },
          {
            rating: 5,
            starsImage: "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/662a054908e7e70cf04624f9_659999f9d0b9bf616d4e9332_stars.svg",
            text: "Support is excellent!",
            avatar: "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/662a062c16690044c10ee093_65a93870ff80265b0a5a6f64_New%20Mavie%206enhanced.webp",
            name: "Emma R.",
            position: "Gold Member"
          }
      ];
    }

    connectedCallback() {
      this.render();
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
              <img src="${t.avatar}" loading="lazy" width="55" alt="avatar" />
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