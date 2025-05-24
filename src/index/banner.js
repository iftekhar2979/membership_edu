class CloudBootcampSection extends HTMLElement {
    constructor() {
      super();
      this.banner = {
        title: `Our proven system makes transitioning into a high-paying AWS Cloud
                Engineer career possible for almost anyone — even without a tech
                degree or prior cloud experience.`,
        subtitle: `Our unique method makes CloudBootcamp.AI business accessible to almost
                anyone, regardless of background, experience!`,
        imageLink: "https://assets-global.website-files.com/658fd648729a651f8b0574a7/65b183b440ee08c86b29d67a_new-smth2-65b1821aebe1a.webp",
        videoLink: `https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FyAoLSRbwxL8%3Ffeature%3Doembed&amp;display_name=YouTube&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DyAoLSRbwxL8&amp;image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FyAoLSRbwxL8%2Fhqdefault.jpg&amp;key=96f1f04c5f4143bcb0f2e68c87d65feb&amp;type=text%2Fhtml&amp;schema=youtube`
      };
    }

    connectedCallback() {
      this.render();
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
                src="${this.banner.videoLink}"
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