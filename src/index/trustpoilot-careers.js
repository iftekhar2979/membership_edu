class TrustPilotCareer extends HTMLElement {
    constructor() {
        super();
        this.data = {}
    }
    async loadData(){
        try {
          const response = await fetch('./data/index/cards.json');  // your JSON URL here
          if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
          const data = await response.json();
  
          this.data = data.index.join_section
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
            <div class="div-block-9">
                <div class="w-layout-blockcontainer container-26 w-container">
                    <h1 class="heading-2">
                       Joined <br />${this.data.pepole}+ people now!!
                    </h1>
                    
                </div>
            </div>
        `;
    }
}

customElements.define("trust-pilot-banner", TrustPilotCareer);
