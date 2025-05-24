class MainBanner extends HTMLElement{
    constructor(){
        super()
        this.main_banner = {
            mainHeader:`Break Into Cloud Engineering — Without Another Certification`,
            week:`8 weeks`,
            career:`with practical AWS
              skills and 1:1 mentorship`,
            subtitle:`Transform your career in` ,
              videoLink:`https://player.vimeo.com/video/938223043?app_id=122963&referrer=https://www.membershipedu.com/`,
              careerTransitions:`340`,
              videoLink2:`https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F938223043%3Fapp_id%3D122963&amp;dntp=1&amp;display_name=Vimeo&amp;url=https%3A%2F%2Fvimeo.com%2F938223043&amp;image=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1839407357-c9a6d0316ea3fa098a52daad5add78bd091fed55ac98cc1cf7264a9cf6900b4d-d_1280&amp;key=96f1f04c5f4143bcb0f2e68c87d65feb&amp;type=text%2Fhtml&amp;schema=vimeo`
        }
    }
    connectedCallback(){
        return this.render()
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
        <h1 class="heading-7">Featured in</h1>
      </div>
      <div class="pyramid left-top"></div>
      <div class="pyramid left"></div>
      <div class="pyramid right-top"></div>
      <div class="pyramid right"></div>

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