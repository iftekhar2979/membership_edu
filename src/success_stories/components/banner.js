class SuccessBanner extends HTMLElement {
    constructor(){
        super()
        this.information ={
            title:`CloudBootcamp.AI Success Stories`,
            subtitle:`STUDENT SUCCESS HUB`,
            paragraph: ` Welcome to the Student Success Hub, the place where real
          transformations happen. Here, CloudBootcamp.AI students proudly share
          how they went from stuck, underpaid, or overlooked to landing
          six-figure cloud roles, remote freedom, and life-changing
          opportunities. Explore powerful testimonials, interview clips, and
          success stories that prove what’s possible when you follow the right
          roadmap`
        }
    }
    connectedCallback(){
        this.render()
    }
    render(){
        this.innerHTML=`  <div class="w-layout-blockcontainer container-33 w-container">
        <h3 class="heading-71">${this.information.title}</h3>
        <h1 class="heading-72">${this.information.subtitle}</h1>
        <p class="paragraph-16">
          ${this.information.paragraph}
        </p>
      </div>`
    }
}

customElements.define("success-banner", SuccessBanner);