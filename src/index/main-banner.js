class MainBanner extends HTMLElement{
    constructor(){
        super()
        this.main_banner = []
    }
   async loadData(){
      try {
        const response = await fetch('./data/index/cards.json');  // your JSON URL here
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        this.main_banner = data.index.main_headers || [];
        this.render();
      } catch (error) {
        console.error('Failed to load students data:', error);
      }
    }
    connectedCallback(){
        this.loadData()
    }
    render(){
        this.innerHTML=`  <section class="section">
      <div class="w-embed w-iframe w-script">
        <div id="testimonial-embed-video" class="embed-video-hide">
          <div
            class="w-lightbox-control w-lightbox-close"
            role="button"
            aria-label="close lightbox"
            tabindex="0"
          ></div>
          <iframe
            width="1200"
            height="675"
            src="${this.main_banner.videoLink}"
            title="Vimeo video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div class="w-layout-blockcontainer container-2 w-container">
        <div class="columns w-row" style="display: flex; margin-top: 9%;">
          <div class="column-35 w-col w-col-6">
            <h1 class="heading">
            ${this.main_banner.mainHeader}
            </h1>
            <p class="paragraph">
              ${this.main_banner.subtitle}
              <strong class="bold-text-3">${this.main_banner.week}</strong> ${this.main_banner.career}
            </p>
            <div class="columns-21 w-row">
              <div class="w-col w-col-4 w-col-small-4">
                <h1 class="heading-85">
                  <strong class="bold-text-11">Verified</strong>
                </h1>
                <div class="text-block-9">Community</div>
              </div>
              <div class="column-37 w-col w-col-4 w-col-small-4">
                <div class="w-embed">
                  <style></style>
                  <div class="v-seperator-gradient"></div>
                </div>
              </div>
              <div class="column-36 w-col w-col-4 w-col-small-4">
                <h1 class="heading-85">
                  <strong class="bold-text-12">${this.main_banner.careerTransitions}+</strong>
                </h1>
                <div class="text-block-9">Successfull career transition</div>
              </div>
            </div>
          
          </div>
          <div class="column w-col w-col-6">
            <div
              style="padding-top: 56.27659574468085%"
              class="hero-section-video w-video w-embed"
            >
              <iframe
                class="embedly-embed"
                src="${this.main_banner.videoLink2}"
                width="940"
                height="529"
                scrolling="no"
                allowfullscreen
                title="Video 2"
              ></iframe>
            </div>
            <div class="code-embed-6 w-embed">
              <a
                href="javascript:void(0)"
                class="custom-video-btn custom-button-bg__gradient"
              >
                <span>Play Video</span>
                <img
                  src="https://assets-global.website-files.com/658fd648729a651f8b0574a7/658fe88d560869e69412c016_Arrow%20Right%20(1).svg"
                  width="27"
                />
              </a>
            </div>
          </div>
        </div>
        <h1 class="heading-7">Technology You’ll Learn</h1>
      </div>

      <div class="cursel-contaner">
        <div class="logo-contaner" id="logoContainer">
        </div>
       
      </div>
      <div class="html-embed-2 w-embed">
        <div class="ultra-gradient-wrapper-2 v-2">
          <img
            src="https://assets-global.website-files.com/658fd648729a651f8b0574a7/65b16ada03d934af7928069a_lunca2-65b1699766573.webp"
            loading="eager"
            sizes="(max-width: 1015px) 100vw, 1015px"
            srcset="
              https://assets-global.website-files.com/658fd648729a651f8b0574a7/65b16ada03d934af7928069a_lunca2-65b1699766573-p-500.webp  500w,
              https://assets-global.website-files.com/658fd648729a651f8b0574a7/65b16ada03d934af7928069a_lunca2-65b1699766573-p-800.webp  800w,
              https://assets-global.website-files.com/658fd648729a651f8b0574a7/65b16ada03d934af7928069a_lunca2-65b1699766573.webp       1015w
            "
            alt=""
            class="shape-bg is--right v-2"
          /><img
            class="ellipse"
            src="./images/Ellipse 6.png"
            loading="eager"
            sizes="(max-width: 1919px) 100vw, 961.25px"
            alt=""
            class="shape-bg main v-2 v-3"
          />
          <img
            src="https://assets-global.website-files.com/658fd648729a651f8b0574a7/659ad141eabb05549e1dc027_grid.svg"
            loading="eager"
            alt=""
            class="shape-bg is--grid v-2"
          /><img
            src="https://assets-global.website-files.com/658fd648729a651f8b0574a7/659ad141eabb05549e1dc027_grid.svg"
            loading="eager"
            alt=""
            class="shape-bg is--grid _2 v-2"
          />
        </div>
      </div>
    </section>`
    }
}

customElements.define("main-banner", MainBanner);