const iconMouseOverComponent = {
    tag: 'icon-mouse-over',
    styles: `
      .heading-79 {
        background-image: linear-gradient(133deg, #fff, #83848e);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
      }
      .product__c-icon {
        justify-content: center;
        align-items: center;
        margin-bottom: 2rem;
        display: flex;
        position: relative;
      }
      /* (Additional styles trimmed for brevity) */
    `,
    template: `
      <section class="section is--linkedin is--before-footer">
        <div class="container">
          <div class="title-container is--align-center">
            <div class="product__c-icon is--big is--linkedin">
              <div class="product-icon__blur is--big"></div>
              <img src="loop.svg" alt="" class="product__line-loop" />
              <img src="images/logo-2.png" alt="Icon" class="product__icon is--icon is--big" />
              <img src="bg-logo.png" alt="" class="product__icon is--bg is--big" />
            </div>
          </div>
        </div>
      </section>
    `,
    scripts: {
      mouseMoveHandler: (event) => {
        const offsetX = ((event.clientX - window.innerWidth / 2) / window.innerWidth) * 20;
        const offsetY = ((event.clientY - window.innerHeight / 2) / window.innerHeight) * 20;
  
        const icon = document.querySelector('.product__c-icon.is--big.is--linkedin');
        const blur = document.querySelector('.product-icon__blur.is--big');
        const iconImage = document.querySelector('.product__icon.is--icon.is--big');
  
        if (icon && blur && iconImage) {
          icon.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
          blur.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
          iconImage.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
        }
      },
      mouseLeaveHandler: () => {
        const icon = document.querySelector('.product__c-icon.is--big.is--linkedin');
        const blur = document.querySelector('.product-icon__blur.is--big');
        const iconImage = document.querySelector('.product__icon.is--icon.is--big');
  
        if (icon && blur && iconImage) {
          icon.style.transform = 'translate3d(0, 0, 0)';
          blur.style.transform = 'translate3d(0, 0, 0)';
          iconImage.style.transform = 'translate3d(0, 0, 0)';
        }
      },
      animateScale: () => {
        const blur = document.querySelector('.product-icon__blur.is--big');
        if (blur) {
          const scale = Math.min(1.3, Math.max(0, Math.sin(Date.now() / 1000) * 0.2 + 1));
          blur.style.transform = `translate3d(0px, 0px, 0px) scale3d(${scale}, ${scale}, 1) rotateZ(0deg)`;
        }
        requestAnimationFrame(iconMouseOverComponent.scripts.animateScale);
      },
      animateRotation: () => {
        const loop = document.querySelector('.product__line-loop');
        if (loop) {
          const angle = 360 - (((Date.now() / 1000) * 60) % 360);
          loop.style.transform = `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateZ(${angle}deg)`;
        }
        requestAnimationFrame(iconMouseOverComponent.scripts.animateRotation);
      },
      init: () => {
        document.body.addEventListener('mousemove', iconMouseOverComponent.scripts.mouseMoveHandler);
        document.body.addEventListener('mouseleave', iconMouseOverComponent.scripts.mouseLeaveHandler);
        iconMouseOverComponent.scripts.animateScale();
        iconMouseOverComponent.scripts.animateRotation();
      }
    }
  };
  
  customElements.define('icon-mouse-over', class extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = `
        <style>${iconMouseOverComponent.styles}</style>
        ${iconMouseOverComponent.template}
      `;
    }
    connectedCallback() {
      iconMouseOverComponent.scripts.init();
    }
  });
  