class NancieCard extends HTMLElement {
    constructor() {
      super();
    }
  
    static get observedAttributes() {
      return ['image', 'name', 'subtitle'];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      this.render();
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      const image = this.getAttribute('image') || '';
      const name = this.getAttribute('name') || 'NANCIE KEM';
      const subtitle = this.getAttribute('subtitle') || 'Making waves of success<br>through membership.';
  
      this.innerHTML = `
        <style>
          :host {
            display: block;
            width: 375px;
            height: 667px;
            position: relative;
            background: linear-gradient(180deg, #1A065A 0%, #230B62 45%, #360863 100%);
            color: white;
            box-sizing: border-box;
            padding: 40px 30px 0 30px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            overflow: hidden;
          }
          .logo {
            position: relative;
            width: 50px;
            height: 30px;
            margin-bottom: 30px;
          }
          .logo div {
            position: absolute;
            border-radius: 50%;
          }
          .logo .circle1 {
            width: 22px;
            height: 22px;
            background: linear-gradient(135deg, #5129CA, #C1386D);
            left: 0;
            top: 0;
          }
          .logo .circle2 {
            width: 22px;
            height: 22px;
            background: linear-gradient(135deg, #5B2ECC, #BD3D6E);
            left: 18px;
            top: 0;
          }
          .logo .circle3 {
            width: 22px;
            height: 22px;
            background: linear-gradient(135deg, #9F3E70, #D64B6D);
            left: 36px;
            top: 0;
          }
          h1 {
            font-weight: 700;
            font-size: 28px;
            color: #9A8EA2;
            margin: 0 0 12px 0;
            letter-spacing: 1.1px;
          }
          p {
            font-weight: 400;
            font-size: 14px;
            line-height: 1.3;
            max-width: 240px;
            color: #fff;
            margin: 0;
          }
          .circle-large1, .circle-large2 {
            position: absolute;
            border: 1px solid rgba(255 255 255 / 0.12);
            border-radius: 50%;
            pointer-events: none;
          }
          .circle-large1 {
            width: 320px;
            height: 320px;
            bottom: 60px;
            left: -140px;
          }
          .circle-large2 {
            width: 450px;
            height: 450px;
            top: 30px;
            right: -200px;
          }
          .image-wrapper {
            position: absolute;
            bottom: 0;
            right: 0;
            width: 220px;
          }
          .image-wrapper img {
            width: 100%;
            height: auto;
            display: block;
            object-fit: cover;
          }
        </style>
  
        <div class="logo">
          <div class="circle1"></div>
          <div class="circle2"></div>
          <div class="circle3"></div>
        </div>
  
        <h1>${name}</h1>
        <p>${subtitle}</p>
  
        <div class="circle-large1"></div>
        <div class="circle-large2"></div>
  
        <div class="image-wrapper">
          <img src="${image}" alt="${name}" />
        </div>
      `;
    }
  }
  
  customElements.define('student_card', NancieCard);
  