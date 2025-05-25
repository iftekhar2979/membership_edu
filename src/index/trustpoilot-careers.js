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
  
          this.data = data.join_section
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
                        Don’t want to wait? Join <br />${this.data.pepole}+ people now!!
                    </h1>
                    <div class="html-embed-6 w-embed">
                        <div class="new-lp__c-trustpilot is--free-training">
                            <div class="new-lp___trustpilot-text is--desk mob-none">
                                Excellent
                            </div>
                            <img
                                src="https://assets-global.website-files.com/6478a8ada70541eef2afb81f/6568477a9bddd4ffba46a3f9_trust-stars.svg"
                                loading="lazy"
                                alt="5/5 stars on Trustpilot"
                                class="new-lp__trustpilot-stars"
                            />
                            <div class="new-lp___trustpilot-text">
                                <strong>${this.data.careerCount}+</strong> successful career transitions
                                <span class="is--desk">on</span>
                            </div>
                            <img
                                src="https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/662804c8c8b7e53d97f22e4a_logo-white.svg"
                                loading="lazy"
                                alt="Trustpilot logo"
                                class="new-lp___trustpilot-logo"
                            />
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("trust-pilot-banner", TrustPilotCareer);
