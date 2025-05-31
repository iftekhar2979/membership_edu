class CloudBootcampSection extends HTMLElement {
    constructor() {
      super();
      this.banner = {}
    }
    getYouTubeEmbedUrl(url) {
      const regExp = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/;
      const match = url.match(regExp);
      if (match && match[1]) {
        return `https://www.youtube.com/embed/${match[1]}`;
      }
      return url; // fallback if no match
    }
    
    async loadData(){
      try {
        const response = await fetch('./data/index/cards.json');  // your JSON URL here
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();

        this.banner = data.index.hero_section;
        this.render();
      } catch (error) {
        console.error('Failed to load students data:', error);
      }
    }
    connectedCallback() {
      this.loadData();
    }

    render() {
      this.innerHTML = `
        <section class="section-2">
          <div class="w-layout-blockcontainer container-25 w-container">
            <h1 class="heading-2">
              ${this.banner.title}
            </h1>
          </div>
          <div class="w-layout-blockcontainer container-3 w-container">
            <div
              style="padding-top: 56.17021276595745%"
              class="video w-video w-embed"
            >
              <iframe
                class="embedly-embed"
                src="${getYouTubeEmbedUrl(this.banner.videoLink)}"
                width="940"
                height="528"
                scrolling="no"
                allowfullscreen
                title="Dummy Video"
              ></iframe>
            </div>
            <p class="paragraph-2">
              ${this.banner.subtitle}
            </p>
            <a
              href="#"
              target="_blank"
              class="button-container-3 custom-button-bg__gradient w-button"
            >Watch Free Training</a>
          </div>
          <div class="sec2-bg-img-container w-embed">
            <img
              src="${this.banner.imageLink}"
              alt="Cloud Bootcamp Image"
            />
          </div>
        </section>
      `;
    }
  }

customElements.define("cloud-bootcamp-banner", CloudBootcampSection);