 class StudentTabs extends HTMLElement {
    constructor() {
      super();
      this.tabs = [
        { id: "tab-students-interview-btn", text: "Students Interview",  },
        { id: "tab-video-reviews-btn", text: "Offer Letters",  },
        { id: "tab-success-posts-btn", text: "Success Posts",  },
      
      ];
    }

    connectedCallback() {
      this.render();
    }

    render() {
      this.innerHTML = `
        <div class="columns-13 w-row">
          ${this.tabs.map((tab, i) => `
            <div class="column-${this.getColumnNumber(i)} w-col ">
              <a
                id="${tab.id}"
                class="butt${i === 0 ? ' btn' : ''} w-button"
              >
                ${tab.text}
              </a>
            </div>
          `).join('')}
        </div>
      `;
    }

    // Returns the column class suffix based on index
    getColumnNumber(index) {
      // Your original column classes were: 28, 94, 95, 96, 97, 29
      // We'll map them in order to keep the same classes:
      const columnClasses = [28, 94, 95, 96, 97, 29];
      return columnClasses[index] || 28;
    }
  }

  customElements.define('student-tabs', StudentTabs);