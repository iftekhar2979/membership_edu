    class ProgramStats extends HTMLElement {
      constructor() {
        super();
      }

      connectedCallback() {
        this.loadData();
      }

      async loadData() {
        try {
          const response = await fetch("./data/index/cards.json");
          if (!response.ok) throw new Error("Failed to fetch data");
          const data = await response.json();
          this.render(data.index.cards);
        } catch (err) {
          this.innerHTML = `<p>Error loading data: ${err.message}</p>`;
        }
      }

      render(data) {
        this.innerHTML = `
          <div class="columns-35 w-row">
        <div class="w-col w-col-6">
          <h1 class="heading-89">
            ${data.heading}
          </h1>
        </div>
        <div class="column-86 w-col w-col-6">
          <img
            src="${data.image.src}"
            loading="lazy"
            width="1584"
            sizes="(max-width: 479px) 61vw, 100px"
            alt=""
            class="image-36"
          />
          <div class="columns-36 w-row">
            <div class="column-49 column-50 w-col w-col-6">
              <img
                src="${data.stats[0].icon}"
                loading="lazy"
                width="50"
                alt=""
                class="image-32"
              />
              <h2 class="heading-90">${data.stats[0].number}</h2>
              <p class="paragraph-34">${data.stats[0].description}</p>
            </div>
            <div class="column-51 column-52 column-53 w-col w-col-6">
              <img
                src="${data.stats[1].icon}"
                loading="lazy"
                width="50"
                alt=""
                class="image-33"
              />
              <h2 class="heading-90">
                <strong class="bold-text-13">${data.stats[1].number}</strong>
              </h2>
              <p class="paragraph-34">
              ${data.stats[1].description}
              </p>
            </div>
          </div>
          <div class="columns-37 w-row">
            <div class="column-54 w-col w-col-6">
              <img
                src="${data.stats[2].icon}"
                loading="lazy"
                width="50"
                alt=""
                class="image-34"
              />
              <h2 class="heading-90">
                <strong class="bold-text-14">${data.stats[2].number}</strong>
              </h2>
              <p class="paragraph-34">
              ${data.stats[2].description}
              </p>
            </div>
            <div class="column-55 w-col w-col-6">
              <img
                src="${data.stats[3].icon}"
                loading="lazy"
                width="50"
                alt=""
                class="image-35"
              />
              <h2 class="heading-90">
                <strong class="bold-text-15">${data.stats[3].number}</strong>
              </h2>
              <p class="paragraph-34">${data.stats[3].description}</p>
            </div>
          </div>
        </div>
      </div>
        `;
      }

      
    }

    customElements.define("program-stats", ProgramStats);

