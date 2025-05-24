class SiteHeader extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = `
         <article class="section-header">
      <div class="w-layout-blockcontainer container-22 w-container">
        <div class="columns-19 w-row">
          <div class="column-33 logo-column w-col w-col-3">
            <img
              class="image-27 has-link"
              src="./images/logo.png"
              alt=""
              sizes="(max-width: 479px) 36px, (max-width: 767px) 19vw, (max-width: 991px) 20vw, 21vw"
            />
            <div class="glass-btn d-none w-embed">
              <div class="glass-btn__burger-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.125rem"
                  height="1.125rem"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M2.8125 9H15.1875"
                    stroke="CurrentColor"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M2.8125 4.5H15.1875"
                    stroke="CurrentColor"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M2.8125 13.5H15.1875"
                    stroke="CurrentColor"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div class="menu-container">
                <div class="menu-header">
                  <span class="close-btn">&times;</span>
                  <a class="login-btn" href="">Login</a>
                </div>
                <ul class="menu-list">
                  <li class="menu-item link-active">
                    <a href="index.html">Home</a>
                  </li>
                  <li class="menu-item">
                    <a href="students-success-hub.html">Success</a>
                  </li>
                  <li class="menu-item"><a href="">Program</a></li>
                  <li class="menu-heading">Company</li>
                  <li class="submenu-item">
                    <a href="about.html">About Us</a>
                  </li>
                  <li class="submenu-item"><a href="press.html">Press</a></li>
                  <li class="submenu-item">
                    <a href="contact.html">Contact Us</a>
                  </li>
                  <li class="submenu-item">
                    <a href="careers.html">Careers</a>
                  </li>
                  <li class="menu-heading">Learn</li>
                  <li class="submenu-item"><a href="https://substack.com/home">Blog</a></li>
                  <li class="submenu-item"><a href="">Help Center</a></li>
                  <li class="submenu-item">
                    <a href="membership-calculator.html"> Salary Growth calculator</a>
                  </li>
                  <li class="menu-btn-item">
                    <a href="" target="_blank" class="nav-link nav-btn-link">
                      <span>Watch Free Training</span>
                      <div class="button__bg-gradient"></div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="column-34 d-none-mob w-col w-col-6">
            <div class="html-embed-3 w-embed">
              <div class="nav-menu">
                <a href="index.html" class="nav-link link-active">Home</a>
                <div class="nav-link has-dropdown">
                  <div class="nav-link-inner-text">
                    <span>Company</span>
                    <span class="has-arrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.125rem"
                        height="1.125rem"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M14.625 6.75L9 12.375L3.375 6.75"
                          stroke="CurrentColor"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <div class="nav-dropdown-wrap dropdown-1">
                    <div class="nav-dropdown">
                      <div class="nav-dropdown-column">
                        <a href="about.html" class="nav-link">
                          <div class="nav-link-text">About Us</div>
                          <div class="nav-link-description"></div>
                        </a>
                        <a href="press.html" class="nav-link">
                          <div class="nav-link-text">Press</div>
                          <div class="nav-link-description"></div>
                        </a>
                      </div>
                      <a href="contact.html" class="nav-link">
                        <div class="nav-link-text">Contact Us</div>
                        <div class="nav-link-description">
                          You have questions?
                          <br />
                          We got answers.
                        </div>
                    
                      </a>
                
                    </div>
                  </div>
                </div>
                <a href="students-success-hub.html" class="nav-link">Success</a>
                <div class="nav-link has-dropdown">
                  <div class="nav-link-inner-text">
                    <span>Learn</span>
                    <span class="has-arrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.125rem"
                        height="1.125rem"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M14.625 6.75L9 12.375L3.375 6.75"
                          stroke="CurrentColor"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <div class="nav-dropdown-wrap dropdown-2">
                    <div class="nav-dropdown">
                      <div class="nav-dropdown-column">
                      
                        <a
                          href=""
                          class="nav-link"
                        >
                          <div class="nav-link-text">Help Center</div>
                          <div class="nav-link-description">
                            Need assistance? Reach out to our help center.
                          </div>
                        </a>
                        <a href="membership-calculator.html" class="nav-link">
                          <div class="nav-link-text">Salary growth calculator</div>
                          <div class="nav-link-description">
                            Instantly predict your CloudBootcamp.AI earnings
                          </div>
                        </a>
                      </div>
                      <div class="nav-dropdown-column">
                        <a
                          href=""
                          target="_blank"
                          class="nav-link"
                        >
                          <div class="nav-link-text">
                            Watch The Free Training
                          </div>
                          <div class="nav-link-description">
                            Create a massive passive income stream by creating a
                            CloudBootcamp.AI business
                          </div>
                         
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="" class="nav-link">Program</a>
              </div>
            </div>
          </div>
          <div class="column-1 d-none-mob w-col w-col-3">
            <div class="w-embed">
              <div class="nav-menu">
               
                <a
                  href=""
                  target="_blank"
                  class="nav-link nav-btn-link custom-button-bg__gradient"
                  ><span>Watch Free Training</span></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-embed w-script">
        <div class="nav__bottom-line"></div>
      </div>
    </article>
      `;
    }
  }
  customElements.define('site-header', SiteHeader);
  